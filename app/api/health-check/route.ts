import { NextResponse } from "next/server";
import { getHealthCheckInterest, isValidPhone } from "@/lib/form-validation";

type HealthCheckRequest = {
  name?: unknown;
  phone?: unknown;
  preferredMoment?: unknown;
  interest?: unknown;
};

const validMoments = new Set(["ochtend", "middag", "avond"]);

export async function POST(request: Request) {
  let body: HealthCheckRequest;

  try {
    body = (await request.json()) as HealthCheckRequest;
  } catch {
    return NextResponse.json(
      { message: "Controleer de ingevulde gegevens en probeer het opnieuw." },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const preferredMoment =
    typeof body.preferredMoment === "string" ? body.preferredMoment : "";
  const interest = getHealthCheckInterest(body.interest);

  if (
    name.length < 2 ||
    name.length > 100 ||
    !isValidPhone(phone) ||
    (body.interest !== undefined && !interest) ||
    !validMoments.has(preferredMoment)
  ) {
    return NextResponse.json(
      { message: "Controleer je naam, telefoonnummer en voorkeursmoment." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        message:
          "Aanvragen is nog niet geactiveerd. Stuur voorlopig een e-mail naar astrid@astridsanders.com.",
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phone,
        preferredMoment,
        interest,
        source: "astridsanders.com/gratis-gezondheidscheck",
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      throw new Error(`Webhook response: ${response.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Health check webhook failed", error);
    return NextResponse.json(
      {
        message:
          "De aanvraag kon niet worden verstuurd. Probeer het later opnieuw of stuur een e-mail.",
      },
      { status: 502 },
    );
  }
}

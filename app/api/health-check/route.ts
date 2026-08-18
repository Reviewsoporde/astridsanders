import { NextResponse } from "next/server";
import {
  getFormSource,
  getHealthCheckInterest,
  isValidEmail,
  isValidPhone,
} from "@/lib/form-validation";

type HealthCheckRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  preferredMoment?: unknown;
  interest?: unknown;
  source?: unknown;
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
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const preferredMoment =
    typeof body.preferredMoment === "string" ? body.preferredMoment : "";
  const interest = getHealthCheckInterest(body.interest);
  const source = getFormSource(body.source) ?? "gratis-gezondheidscheck";

  if (
    name.length < 2 ||
    name.length > 100 ||
    !isValidEmail(email) ||
    !isValidPhone(phone) ||
    (body.interest !== undefined && !interest) ||
    !validMoments.has(preferredMoment)
  ) {
    return NextResponse.json(
      { message: "Controleer je naam, e-mailadres, telefoonnummer en voorkeursmoment." },
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
        email,
        phone,
        preferredMoment,
        interest,
        source: `astridsanders.com/${source}`,
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

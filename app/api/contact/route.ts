import { NextResponse } from "next/server";
import { isValidPhone } from "@/lib/form-validation";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json(
      { message: "Controleer de ingevulde gegevens en probeer het opnieuw." },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    name.length < 2 ||
    name.length > 100 ||
    !emailPattern.test(email) ||
    email.length > 200 ||
    !isValidPhone(phone, false) ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { message: "Controleer je naam, e-mailadres en bericht." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        message:
          "Versturen is nog niet geactiveerd. Stuur voorlopig een e-mail naar astrid@astridsanders.com.",
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
        message,
        source: "astridsanders.com/contact",
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
    console.error("Contact webhook failed", error);
    return NextResponse.json(
      {
        message:
          "Het bericht kon niet worden verstuurd. Probeer het later opnieuw of stuur een e-mail.",
      },
      { status: 502 },
    );
  }
}

"use client";

import { Check, CheckCircle, WarningCircle, WhatsappLogo } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import type { HealthCheckInterest } from "@/lib/form-validation";
import { translateText, type Locale } from "@/lib/i18n";
import { whatsAppHref } from "@/lib/whatsapp";

type FormStatus = "idle" | "submitting" | "success" | "error";

const copy = {
  nl: {
    requestError: "De aanvraag kon niet worden verstuurd.",
    success: "Dank je wel. Astrid neemt persoonlijk contact met je op rond het gekozen moment.",
    genericError: "Er ging iets mis. Probeer het later opnieuw.",
    timeoutError: "Het versturen duurde te lang. Probeer het opnieuw of mail Astrid rechtstreeks.",
    badge: ["Gratis", "Telefonisch", "Geen verplichting"],
    name: "Naam",
    namePlaceholder: "Jouw naam",
    phone: "Telefoonnummer",
    phonePlaceholder: "06 12 34 56 78",
    phoneHint: "Op dit nummer belt Astrid je; een landcode zoals +31 mag ook.",
    preferredMoment: "Wanneer komt bellen je het beste uit?",
    moments: [
      ["ochtend", "Ochtend"],
      ["middag", "Middag"],
      ["avond", "Avond"],
    ],
    submitting: "Aanvraag versturen...",
    submit: "Gratis gezondheidscheck aanvragen",
    privacy: "Je gegevens worden alleen gebruikt om contact met je op te nemen over deze aanvraag.",
    selectedInterest: "Je gekozen startpunt",
    directContact: "Liever direct contact?",
    emailAction: "Mail Astrid",
    orSeparator: "of",
    whatsappAction: "stuur een WhatsApp-bericht",
    emailSubject: "Gratis gezondheidscheck aanvragen",
  },
  en: {
    requestError: "The request could not be sent.",
    success: "Thank you. Astrid will contact you personally around your preferred time.",
    genericError: "Something went wrong. Please try again later.",
    timeoutError: "Sending took too long. Try again or email Astrid directly.",
    badge: ["Free", "By phone", "No obligation"],
    name: "Name",
    namePlaceholder: "Your name",
    phone: "Phone number",
    phonePlaceholder: "+31 6 12 34 56 78",
    phoneHint: "Astrid will call you on this number; an international prefix such as +31 is fine.",
    preferredMoment: "When is calling most convenient for you?",
    moments: [
      ["ochtend", "Morning"],
      ["middag", "Afternoon"],
      ["avond", "Evening"],
    ],
    submitting: "Sending request...",
    submit: "Request a free health check",
    privacy: "Your details will only be used to contact you about this request.",
    selectedInterest: "Your selected starting point",
    directContact: "Prefer direct contact?",
    emailAction: "Email Astrid",
    orSeparator: "or",
    whatsappAction: "send a WhatsApp message",
    emailSubject: "Request a free health check",
  },
} satisfies Record<Locale, Record<string, string | string[] | string[][]>>;

type HealthCheckFormClientProps = {
  interest?: HealthCheckInterest;
  locale?: Locale;
};

export function HealthCheckFormClient({
  interest,
  locale = "nl",
}: HealthCheckFormClientProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const labels = copy[locale];
  const moments = labels.moments as string[][];
  const badge = labels.badge as string[];
  const interestLabel = interest ? translateText(interest, locale) : undefined;
  const emailBody = interest
    ? `${labels.selectedInterest as string}: ${interestLabel}\n\n`
    : "";
  const emailHref = `mailto:astrid@astridsanders.com?subject=${encodeURIComponent(
    labels.emailSubject as string,
  )}${emailBody ? `&body=${encodeURIComponent(emailBody)}` : ""}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15_000);

    try {
      const response = await fetch("/api/health-check/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          preferredMoment: formData.get("preferredMoment"),
          interest,
        }),
        signal: controller.signal,
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          locale === "en"
            ? (labels.requestError as string)
            : result.message || (labels.requestError as string),
        );
      }

      form.reset();
      setStatus("success");
      setMessage(labels.success as string);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof DOMException && error.name === "AbortError"
          ? (labels.timeoutError as string)
          : error instanceof Error
            ? error.message
            : (labels.genericError as string),
      );
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  return (
    <form className="health-form" onSubmit={handleSubmit} aria-busy={status === "submitting"}>
      <ul className="form-badge">
        {badge.map((item) => (
          <li key={item}>
            <Check size={14} weight="bold" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      {interest ? (
        <p className="form-selection">
          <span>{labels.selectedInterest as string}</span>
          <strong>{interestLabel}</strong>
        </p>
      ) : null}

      <div className="field">
        <label htmlFor="name">{labels.name as string}</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          placeholder={labels.namePlaceholder as string}
        />
      </div>

      <div className="field">
        <label htmlFor="phone">{labels.phone as string}</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          minLength={8}
          maxLength={30}
          pattern="[+]?[0-9 ().-]{8,30}"
          aria-describedby="phone-hint"
          placeholder={labels.phonePlaceholder as string}
        />
        <small id="phone-hint" className="field-hint">
          {labels.phoneHint as string}
        </small>
      </div>

      <fieldset className="field">
        <legend>{labels.preferredMoment as string}</legend>
        <div className="moment-options">
          {moments.map(([value, label]) => (
            <label key={value} className="moment-option">
              <input type="radio" name="preferredMoment" value={value} required />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button className="button button--solid health-form__submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? (labels.submitting as string) : (labels.submit as string)}
      </button>

      <p className="form-privacy">{labels.privacy as string}</p>

      <p className="form-direct-contact">
        {labels.directContact as string}{" "}
        <a href={emailHref}>{labels.emailAction as string}</a>{" "}
        {labels.orSeparator as string}{" "}
        <a
          className="form-direct-contact__whatsapp"
          href={whatsAppHref(locale)}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsappLogo size={17} weight="fill" aria-hidden="true" />
          {labels.whatsappAction as string}
        </a>
      </p>

      {message ? (
        <div className={`form-message form-message--${status}`} role={status === "error" ? "alert" : "status"}>
          {status === "success" ? (
            <CheckCircle size={22} weight="fill" aria-hidden="true" />
          ) : (
            <WarningCircle size={22} weight="fill" aria-hidden="true" />
          )}
          <span>{message}</span>
        </div>
      ) : null}
    </form>
  );
}

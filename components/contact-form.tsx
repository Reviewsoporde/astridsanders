"use client";

import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n";

type FormStatus = "idle" | "submitting" | "success" | "error";
export type ContactFormContext = "contact" | "business" | "zorgprofessionals";

const copy = {
  nl: {
    requestError: "Het bericht kon niet worden verstuurd.",
    success: "Dank je wel voor je bericht. Astrid neemt zo snel mogelijk contact met je op.",
    genericError: "Er ging iets mis. Probeer het later opnieuw.",
    timeoutError: "Het versturen duurde te lang. Probeer het opnieuw of mail Astrid rechtstreeks.",
    name: "Naam",
    namePlaceholder: "Jouw naam",
    email: "E-mailadres",
    emailPlaceholder: "jouwnaam@voorbeeld.nl",
    phone: "Telefoonnummer (optioneel)",
    phonePlaceholder: "06 12 34 56 78",
    phoneHint: "Gebruik 8 tot 15 cijfers; spaties, haakjes en een landcode zijn toegestaan.",
    message: "Waar kan Astrid je mee helpen?",
    messagePlaceholder: "Vertel kort wat er speelt of welke vraag je hebt.",
    submitting: "Bericht versturen...",
    submit: "Bericht versturen",
    privacy: "Je gegevens worden alleen gebruikt om contact met je op te nemen over je bericht.",
    directContact: "Liever rechtstreeks contact?",
    emailAction: "Mail Astrid",
    emailSubject: "Vraag via astridsanders.com",
  },
  en: {
    requestError: "The message could not be sent.",
    success: "Thank you for your message. Astrid will contact you as soon as possible.",
    genericError: "Something went wrong. Please try again later.",
    timeoutError: "Sending took too long. Try again or email Astrid directly.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email address",
    emailPlaceholder: "yourname@example.com",
    phone: "Phone number (optional)",
    phonePlaceholder: "+31 6 12 34 56 78",
    phoneHint: "Use 8 to 15 digits; spaces, brackets and an international prefix are allowed.",
    message: "How can Astrid help you?",
    messagePlaceholder: "Briefly describe your situation or question.",
    submitting: "Sending message...",
    submit: "Send message",
    privacy: "Your details will only be used to contact you about your message.",
    directContact: "Prefer direct contact?",
    emailAction: "Email Astrid",
    emailSubject: "Question via astridsanders.com",
  },
} satisfies Record<Locale, Record<string, string>>;

const contextCopy: Record<
  Locale,
  Record<ContactFormContext, Partial<Record<keyof (typeof copy)["nl"], string>>>
> = {
  nl: {
    contact: {},
    business: {
      success:
        "Dank je wel voor je aanvraag. Astrid neemt zo snel mogelijk contact met je op.",
      message: "Wat kan Astrid voor jouw organisatie betekenen?",
      messagePlaceholder:
        "Beschrijf kort je organisatie, vraag en de gewenste vorm van begeleiding.",
      privacy:
        "Je gegevens worden alleen gebruikt om contact met je op te nemen over je aanvraag.",
      emailSubject: "Zakelijke aanvraag via astridsanders.com",
    },
    zorgprofessionals: {
      success:
        "Dank je wel voor je bericht. Astrid neemt zo snel mogelijk contact met je op.",
      message: "Welke samenwerking of doorverwijzing wil je bespreken?",
      messagePlaceholder:
        "Beschrijf kort je vraag. Deel geen medische of persoonlijke informatie zonder toestemming van de patiënt.",
      privacy:
        "Je gegevens worden alleen gebruikt om contact met je op te nemen over je bericht.",
      emailSubject: "Samenwerking of doorverwijzing via astridsanders.com",
    },
  },
  en: {
    contact: {},
    business: {
      message: "What can Astrid do for your organisation?",
      messagePlaceholder:
        "Briefly describe your organisation, question and preferred form of support.",
      emailSubject: "Business enquiry via astridsanders.com",
    },
    zorgprofessionals: {
      message: "Which collaboration or referral would you like to discuss?",
      messagePlaceholder:
        "Briefly describe your question. Do not share medical or personal information without the patient's consent.",
      emailSubject: "Collaboration or referral via astridsanders.com",
    },
  },
};

export function ContactForm({
  locale = "nl",
  context = "contact",
}: {
  locale?: Locale;
  context?: ContactFormContext;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");
  const labels = { ...copy[locale], ...contextCopy[locale][context] };
  const emailHref = `mailto:astrid@astridsanders.com?subject=${encodeURIComponent(labels.emailSubject)}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15_000);

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          context,
        }),
        signal: controller.signal,
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(locale === "en" ? labels.requestError : result.message || labels.requestError);
      }

      form.reset();
      setStatus("success");
      setMessage(labels.success);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof DOMException && error.name === "AbortError"
          ? labels.timeoutError
          : error instanceof Error
            ? error.message
            : labels.genericError,
      );
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  return (
    <form
      className="health-form contact-form"
      onSubmit={handleSubmit}
      aria-busy={status === "submitting"}
    >
      <div className="field">
        <label htmlFor="contact-name">{labels.name}</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          placeholder={labels.namePlaceholder}
        />
      </div>

      <div className="field">
        <label htmlFor="contact-email">{labels.email}</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          maxLength={200}
          placeholder={labels.emailPlaceholder}
        />
      </div>

      <div className="field">
        <label htmlFor="contact-phone">{labels.phone}</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={30}
          pattern="[+]?[0-9 ().-]{8,30}"
          aria-describedby="contact-phone-hint"
          placeholder={labels.phonePlaceholder}
        />
        <small id="contact-phone-hint" className="field-hint">
          {labels.phoneHint}
        </small>
      </div>

      <div className="field">
        <label htmlFor="contact-message">{labels.message}</label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          placeholder={labels.messagePlaceholder}
        />
      </div>

      <button className="button button--solid health-form__submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? labels.submitting : labels.submit}
      </button>

      <p className="form-privacy">{labels.privacy}</p>

      <p className="form-direct-contact">
        {labels.directContact}{" "}
        <a href={emailHref}>{labels.emailAction}</a>
      </p>

      {message ? (
        <div
          className={`form-message form-message--${status}`}
          role={status === "error" ? "alert" : "status"}
        >
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

export const healthCheckInterests = [
  "Gratis gezondheidscheck",
  "Intake",
  "Los coachingsgesprek",
  "12-weken coachingstraject",
] as const;

export type HealthCheckInterest = (typeof healthCheckInterests)[number];

const phoneCharactersPattern = /^\+?[0-9\s().-]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  return email.length > 0 && email.length <= 200 && emailPattern.test(email);
}

/**
 * Page identifiers the unified contact/intake form can be submitted from.
 * Forwarded to GoHighLevel as `source` so leads stay traceable per page,
 * mirroring what the old separate contact-form contexts already did.
 */
export const formSources = [
  "home",
  "leefstijlcoaching-reuma",
  "leefstijlcoaching-artrose",
  "leefstijlcoaching-gezondheidsrisicos",
  "leefstijlcoaching-bedrijven",
  "zorgprofessionals",
  "over-astrid",
  "contact",
  "gratis-gezondheidscheck",
] as const;

export type FormSource = (typeof formSources)[number];

export function getFormSource(value: unknown): FormSource | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  return formSources.find((source) => source === value);
}

export function isValidPhone(value: string, required = true): boolean {
  const phone = value.trim();

  if (!phone) {
    return !required;
  }

  const digitCount = phone.replace(/\D/g, "").length;

  return (
    phone.length <= 30 &&
    phoneCharactersPattern.test(phone) &&
    digitCount >= 8 &&
    digitCount <= 15
  );
}

export function getHealthCheckInterest(value: unknown): HealthCheckInterest | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  return healthCheckInterests.find((interest) => interest === value);
}

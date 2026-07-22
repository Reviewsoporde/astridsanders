export const healthCheckInterests = [
  "Gratis gezondheidscheck",
  "Intake",
  "Los coachingsgesprek",
  "12-weken coachingstraject",
] as const;

export type HealthCheckInterest = (typeof healthCheckInterests)[number];

const phoneCharactersPattern = /^\+?[0-9\s().-]+$/;

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

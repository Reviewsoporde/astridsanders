import { HealthCheckFormClient } from "@/components/health-check-form-client";
import type { HealthCheckInterest } from "@/lib/form-validation";
import type { Locale } from "@/lib/i18n";

export function HealthCheckForm({
  interest,
  locale = "nl",
  compact,
}: {
  interest?: HealthCheckInterest;
  locale?: Locale;
  compact?: boolean;
}) {
  return (
    <HealthCheckFormClient
      interest={interest}
      locale={locale}
      compact={compact}
    />
  );
}

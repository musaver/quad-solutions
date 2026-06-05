import { getFalKey } from "@/lib/fal-credentials";

export type FalCreditsResult = {
  ok: boolean;
  balance?: number;
  currency?: string;
  username?: string;
  error?: string;
};

export function formatFalBalance(balance: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);
}

export async function getFalCredits(): Promise<FalCreditsResult> {
  const falKey = getFalKey();
  if (!falKey) {
    return { ok: false, error: "FAL_KEY not configured" };
  }

  try {
    const res = await fetch(
      "https://api.fal.ai/v1/account/billing?expand=credits",
      {
        headers: {
          Authorization: `Key ${falKey}`,
          Accept: "application/json",
        },
        cache: "no-store",
      },
    );

    const data = (await res.json()) as {
      username?: string;
      credits?: { current_balance?: number; currency?: string };
      error?: { message?: string };
    };

    if (!res.ok) {
      return {
        ok: false,
        error: data.error?.message || `Billing API returned ${res.status}`,
      };
    }

    const balance = data.credits?.current_balance;
    if (typeof balance !== "number") {
      return { ok: false, error: "Credit balance not available" };
    }

    return {
      ok: true,
      balance,
      currency: data.credits?.currency ?? "USD",
      username: data.username,
    };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Failed to fetch credits",
    };
  }
}

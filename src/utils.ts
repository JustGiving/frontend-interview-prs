export type Donation = {
  amount: number;
  currencyCode: string;
  receiptUrl: string;
};

export async function getDonations(): Promise<Donation[]> {
  try {
    const response = await fetch(
      'https://donations-api.justgiving.com/v1/donations',
      {
        headers: {
          'X-Secret-Key': 'eromynAterceSoStoN',
        },
      },
    );

    return response.json();
  } catch (err) {
    return [];
  }
}

export function track(event: string) {
  (window as any).track(event);
}

export function formatCurrency(amount: number, currencyCode: string) {
  const codeToSymbol: Record<string, string> = {
    GBP: '£',
    USD: '$',
  };

  return amount.toFixed(2) + codeToSymbol[currencyCode];
}

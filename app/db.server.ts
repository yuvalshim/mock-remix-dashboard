export type User = {
  id: string;
  name: string;
  email: string;
};

export async function getUser(): Promise<User> {
  return {
    id: "ak35kd2n4ho",
    name: "Yuval Shimoni",
    email: "johndoe@example.com",
  };
}

export type Invoice = {
  id: string;
  title: string;
  amount: string;
  currency: "EUR" | "USD" | "GBP";
  year: number;
};

export async function getInvoices(): Promise<Array<Invoice>> {
  return [
    {
      id: "e8obdnsoim8",
      title: "Teddy Bear",
      amount: "$10,000",
      currency: "EUR",
      year: 2000,
    },
    {
      id: "j8u90tr3iro",
      title: "Tacos",
      amount: "$55,000",
      currency: "USD",
      year: 2005,
    },
    {
      id: "j8u90tro",
      title: "Code Value",
      amount: "$80,000",
      currency: "USD",
      year: 2000,
    },
    {
      id: "j8tr3iro",
      title: "Gob Li",
      amount: "$6000",
      currency: "USD",
      year: 1994,
    },
  ];
}

export async function getInvoice(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const invoices = await getInvoices();

  return invoices.find((invoice) => invoice.id === id);
}

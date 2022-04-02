export type TInvoice = {
  name: string;
  number: number;
  amount: string;
  due: string;
};

let invoices: TInvoice[] = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

export function getInvoices({ name }: Partial<Omit<TInvoice, "number">> = {}) {
  return new Promise<TInvoice[]>((resolve) => {
    setTimeout(() => {
      if (name) {
        resolve(
          invoices.filter((invoice) => {
            return invoice.name.toLowerCase().startsWith(name.toLowerCase());
          })
        );
        return;
      }

      resolve(invoices);
    }, 100);
  });
}

export function getInvoice(number: number) {
  return new Promise<TInvoice | undefined>((resolve) => {
    setTimeout(() => {
      resolve(invoices.find((invoice) => invoice.number === number));
    }, 100);
  });
}

export function deleteInvoice(number: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("before invoices", invoices);

      const newInvoices = invoices.filter(
        (invoice) => invoice.number !== number
      );

      invoices = newInvoices;

      console.log("after invoices", invoices);

      resolve();
    }, 100);
  });
}

export function createInvoice(invoice: TInvoice) {
  return new Promise<TInvoice>((resolve) => {
    setTimeout(() => {
      console.log("before invoices", invoices);

      invoices = [...invoices, invoice];

      console.log("after invoices", invoices);

      resolve(invoice);
    }, 100);
  });
}

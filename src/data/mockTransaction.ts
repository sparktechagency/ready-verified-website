export interface Transaction {
  id: string;
  cvImage: string;
  cvFormat: string;
  transactionDate: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  paymentMethod: string;
  transactionId: string;
  customerName: string;
  customerEmail: string;
  cvTitle: string;
  downloadCount: number;
}

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    cvImage: "/cv/cv1.png?height=200&width=150",
    cvFormat: "International",
    transactionDate: "2024-01-15",
    amount: 29.99,
    status: "completed",
    paymentMethod: "Credit Card",
    transactionId: "TXN-2024-001",
    customerName: "John Doe",
    customerEmail: "john.doe@email.com",
    cvTitle: "Senior Software Engineer CV",
    downloadCount: 3,
  },
  {
    id: "2",
    cvImage: "/cv/cv1.png?height=200&width=150",
    cvFormat: "European",
    transactionDate: "2024-01-14",
    amount: 24.99,
    status: "completed",
    paymentMethod: "PayPal",
    transactionId: "TXN-2024-002",
    customerName: "Sarah Wilson",
    customerEmail: "sarah.wilson@email.com",
    cvTitle: "Marketing Manager CV",
    downloadCount: 1,
  },
  {
    id: "3",
    cvImage: "/cv/cv1.png?height=200&width=150",
    cvFormat: "Modern",
    transactionDate: "2024-01-13",
    amount: 34.99,
    status: "pending",
    paymentMethod: "Credit Card",
    transactionId: "TXN-2024-003",
    customerName: "Michael Brown",
    customerEmail: "michael.brown@email.com",
    cvTitle: "Creative Designer CV",
    downloadCount: 0,
  },
  {
    id: "4",
    cvImage: "/cv/cv1.png?height=200&width=150",
    cvFormat: "Classic",
    transactionDate: "2024-01-12",
    amount: 19.99,
    status: "completed",
    paymentMethod: "Stripe",
    transactionId: "TXN-2024-004",
    customerName: "Emily Davis",
    customerEmail: "emily.davis@email.com",
    cvTitle: "Business Analyst CV",
    downloadCount: 2,
  },
  {
    id: "5",
    cvImage: "/cv/cv1.png?height=200&width=150",
    cvFormat: "Executive",
    transactionDate: "2024-01-11",
    amount: 39.99,
    status: "failed",
    paymentMethod: "Credit Card",
    transactionId: "TXN-2024-005",
    customerName: "Robert Johnson",
    customerEmail: "robert.johnson@email.com",
    cvTitle: "Executive Director CV",
    downloadCount: 0,
  },
];

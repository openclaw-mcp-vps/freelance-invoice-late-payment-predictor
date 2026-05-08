import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invoice Late Payment Predictor – Know Before They're Late",
  description: "Predict which clients will pay invoices late using AI-powered analysis of payment history and patterns. Built for freelancers, consultants, and small agencies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c09054ff-028d-48b2-aad2-0b0892016347"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Checkout Debugger — Fix Abandoned Checkouts",
  description: "Analyze Shopify checkout abandonment patterns, identify payment gateway errors, slow loading times, and form validation problems that cost you revenue."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d0f56ef2-da01-4369-892d-e94db86e78ad"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

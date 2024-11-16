import type { Metadata } from "next";
import {Poppins} from 'next/font/google';
import "./globals.css";


// 2.change font family
const poppins = Poppins({
  subsets: ['latin'],
  weight : ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins'
});

// 1.change the description
export const metadata: Metadata = {
  title: "StoreIt",
  description: "StoreIt - The only  storage solution you need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3.set font in body className
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  );
}

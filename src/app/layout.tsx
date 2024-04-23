import { ReduxProvider } from "@/components/ReduxProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Header from "@/components/Haeder";
import ProviderGlobal from "@/components/ProviderGlobal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizzaria",
  description: "Projeto pizzaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ReduxProvider>
          <ProviderGlobal>{children}</ProviderGlobal>
        </ReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}

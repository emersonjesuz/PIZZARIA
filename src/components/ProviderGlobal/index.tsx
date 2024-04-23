"use client";
import { usePathname } from "next/navigation";
import Footer from "../Footer";
import Header from "../Haeder";

export default function ProviderGlobal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  const isPath = ["/", "/sobre", "/loja"];
  return (
    <div>
      {isPath.includes(path) && <Header />}
      {children}
      {isPath.includes(path) && <Footer />}
    </div>
  );
}

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/shared/navbar/Navbar";
import MainLayout from "@/components/ui/shared/MainLayout";
import Footer from "@/components/ui/shared/footer/Footer";
import Providers from "@/lib/Providers";

// Import Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Import Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "mini shop",
  description: "mini shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en" data-theme={"dark"}>
        <body
          className={`${inter.className} ${outfit.className} max-w-[1600px] mx-auto`}
        >
          <Navbar />
          <MainLayout>{children}</MainLayout>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}

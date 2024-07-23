import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotest",
});

export const metadata: Metadata = {
  title: "The Church of Christ, Evueta",
  description:
    "This is the official website of the Church of Christ, Evueta built by Okpokpa Philemon and it contains a quiz app for the church at Evueta to use during her end of year quiz for various age-groups and classifications in the church. The church is located at 9, Evueta street, Sergeant Quarters, Ughelli, Delta State, Nigeria.",
  icons: {
    icon: "./Assets/images/cocLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

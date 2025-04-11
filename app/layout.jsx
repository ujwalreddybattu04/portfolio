import { JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Ujwal Reddy - Portfolio",
  description:
    "Explore the portfolio of Ujwal Reddy, a Machine Learning Engineer and Frontend Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${roboto.variable}`}>
        <PageTransition>
          <Header />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}

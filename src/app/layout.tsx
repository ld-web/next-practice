import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import GithubIcon from "@/components/utils/GithubIcon";
import { Analytics } from "@vercel/analytics/react";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LD-WEB - Practice",
  description: "Live practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} text-gray-900 dark:bg-slate-800 dark:text-gray-200 px-2 pb-10`}
      >
        <ThemeProvider enableSystem attribute="class" defaultTheme="dark">
          {children}
          <footer className="text-center flex justify-center gap-x-4">
            LD-WEB
            <a href="https://github.com/ld-web" target="_blank">
              <GithubIcon />
            </a>
          </footer>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

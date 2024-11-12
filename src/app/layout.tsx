import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import GithubIcon from "@/components/utils/GithubIcon";
import Script from "next/script";

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
      <head>
        <Script
          defer
          src="https://analytics.ld-web.net/script.js"
          data-website-id="4bece9ed-b081-4b4c-a4f5-9936dfbb9935"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${inter.className} text-gray-900 dark:bg-slate-800 dark:text-gray-200 px-2 pb-10`}
      >
        <ThemeProvider enableSystem attribute="class" defaultTheme="dark">
          {children}
          <footer className="text-center flex justify-center gap-x-4">
            LD-WEB
            <a href="https://github.com/ld-web/next-practice" target="_blank">
              <GithubIcon />
            </a>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

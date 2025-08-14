import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { ColorPaletteProvider } from "@/context/ColorPaletteContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palettify - Color Palette Explorer",
  description: "Explore and visualize color palettes for your website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 min-h-screen`}>
        <ThemeProvider>
          <ColorPaletteProvider>
            {children}
          </ColorPaletteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

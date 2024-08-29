import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weblet | Your Online Script Hub",
  description:
    "Weblet is a user-friendly online platform to create, share, and execute scripts seamlessly. Enjoy an intuitive web-based editor for all your scripting needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

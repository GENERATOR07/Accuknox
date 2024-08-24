import { Metadata } from "next";

export const metadata: Metadata = {
  description: "dashboard page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}

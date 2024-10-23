import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const university = localFont ({
  src: "./fonts/University.otf"
});
export const gatau = localFont({
  src: "./fonts/gatau.ttf"
});
export const kumar = localFont({
  src: "./fonts/kumar.ttf"
})
export const metadata: Metadata = {
  title: "Official Website XITJKT1",
  description: "XITJKT1 SMKN1 BDL",
  keywords: "XITJKT1, SMKN1 Bandar Lampung, Kelas XI TJKT1, Teknik Jaringan Komputer Dan Telekomukasi",
  authors: [{name: "Agam Armanda, Nizar Romansyah, Galang Ramadhan, Ardika Maulana Putra, Pahre Fadil"}],
  creator: "XITJKT1",
  publisher: "XITJKT1",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

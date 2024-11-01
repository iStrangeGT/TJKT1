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
  authors: [{name: "Agam Armanda, Nizar Rohmansyah, Galang Ramadhan, Ardika Maulana Putra, Pahre Fadil"}],
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
        <div className="w-dvw h-dvh flex flex-col select-none overflow-y-scroll bg-white">
          <nav className="flex items-center justify-between flex-wrap text-white p-4">
            <div className={`w-full text-[#00425B] text-center text-3xl ${university.className}`}>
              XITJKT1
            </div>
          </nav>
      <div className={`flex flex-wrap justify-center items-center px-2 py-3 text-[#00425B] ${gatau.className}`}>
        <a href="/" className="text-xs sm:text-sm font-bold px-3 py-1 mx-3 sm:mx-6 hover:font-semibold hover:text-white hover:bg-[#00425B] rounded transition-colors duration-200">
          Home
        </a>
        <a href="/gallery" className="text-xs sm:text-sm font-bold px-3 py-1 mx-3 sm:mx-6 hover:font-semibold hover:text-white hover:bg-[#00425B] rounded transition-colors duration-200">
          Gallery
        </a>
        <a href="/members" className="text-xs sm:text-sm font-bold px-3 py-1 mx-3 sm:mx-6 hover:font-semibold hover:text-white hover:bg-[#00425B] rounded transition-colors duration-200">
          Members
        </a>
      </div>
      {children}
        <footer className="bg-[#00425B] p-4 mt-3 text-left">
            <p className={`text-text1 ${gatau.className}`}>Copyright 2024 XITJKT1</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
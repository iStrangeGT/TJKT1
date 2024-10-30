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
        <a href="/" className="block whitespace-nowrap mt-4 lg:inline-block lg:mt-0 hover:text-white hover:bg-[#00425B] hover:font-medium rounded hover:border-transparent py-1 px-2 md:px-1">
          Home
        </a>
        <a href="/gallery" className="block whitespace-nowrap mt-4 lg:inline-block lg:mt-0 hover:text-white hover:bg-[#00425B] hover:font-medium rounded hover:border-transparent py-1 px-2 md:px-1">
          Gallery
        </a>
        <a href="/about" className="block whitespace-nowrap mt-4 lg:inline-block lg:mt-0 hover:text-white hover:bg-[#00425B] hover:font-medium rounded hover:border-transparent py-1 px-2 md:px-1">
          About
        </a>
        <a href="/members" className="block whitespace-nowrap mt-4 lg:inline-block lg:mt-0 hover:text-white hover:bg-[#00425B] hover:font-medium rounded hover:border-transparent py-1 px-2 md:px-1">
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
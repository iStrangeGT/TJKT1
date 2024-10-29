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
        <div className="w-dvw h-dvh flex flex-col select-none overflow-y-scroll bg-white">
        <nav className="flex items-center justify-between flex-wrap bg-[#00425B] p-4">
        <div className={`w-full text-white text-center text-3xl ${university.className}`}>
          XITJKT1
        </div>

        

      </nav>
      <div className={`flex text-sm p-4 font-bold justify-center gap-24 text-[#00425B] ${gatau.className}`}>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1 mr-4">
          Home
        </a>
        <a href="/gallery" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1 mr-4">
          Gallery
        </a>
        <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1">
          About
        </a>
        <a href="/members" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1">
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
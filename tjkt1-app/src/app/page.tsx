import { gatau, university, kumar } from "./layout";
import React from "react";
import 'aos/dist/aos.css';

// Header Component
const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-background1 p-4">
        <div className={`w-full text-text1 text-center text-3xl ${university.className}`}>
          XITJKT1
        </div>

        

      </nav>
      <div className={`flex text-sm p-4 font-bold justify-center gap-24 bg-background1 text-text1 ${gatau.className}`}>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1 mr-4">
          Home
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1 mr-4">
          Galery
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1">
          About
        </a>
        <a href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1">
          Members
        </a>
      </div>
    </>
  );
};

// Main Content Component
const MainContent = () => {
  return (
    <div className={`flex flex-col items-center grow p-8 mt-24 bg-background1`}>
      <h6 className={`text-text1 mb-2 ${gatau.className}`}>Welcome To Our Class</h6>
      <h1 className={`text-5xl text-center text-text1 ${university.className}`}>XITJKT1</h1>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-background1 p-4 text-center">
      <p className={`text-text1 ${gatau.className}`}>© 2024 XITJKT1. All rights reserved.</p>
    </footer>
  );
};



// Main App Component
export default function App() {
  return (
    <div className="w-dvw h-dvh flex flex-col select-none bg-background1">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
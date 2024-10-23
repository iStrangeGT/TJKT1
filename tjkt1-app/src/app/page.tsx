import { gatau, university, kumar } from "./layout";

export default function () {
  return (
  <div className="w-dvw h-dvh flex flex-col bg-slate-200 select-none">
<nav className="flex items-center justify-between flex-wrap bg-white p-4">
      <div className={`w-full text-black text-center text-3xl ${university.className}`}>XITJKT1</div>
</nav>
<div className={`flex text-sm p-4 font-bold justify-center gap-24 ${gatau.className}`}>
    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1 mr-4">
      Home
    </a>
    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1 mr-4">
      Galery
    </a>
    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1">
      About
    </a>
    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-600 hover:bg-white rounded hover:border-transparent py-0 px-1">
      Members
    </a>
    </div>
    <div className={`grid-cols-2 grow p-8 text-black ${gatau.className}`}>
      <div>Welcome To Our Class</div>
      <div className={`text-5xl mt-2 ${university.className}`}>XITJKT1</div>
      <div className={`flex mt-7 ${gatau.className}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elite. Perspiciatis ex atque culpa, error illo labore voluptas voluptate, quam suscipit quod consequuntur, maiores consequatur nihil similique eaque porro doloribus? Veritatis, voluptates.
      </div>
    </div>
  </div>
  )
} 

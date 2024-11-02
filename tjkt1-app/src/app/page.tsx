import { gatau, university } from "./layout";

export default function App() {
  return (
    <div className={`flex flex-col items-start grow p-8 mt-2`}>
      <h6 className={`text-[#00425B] mb-2 ${gatau.className}`}>Welcome To Our Class</h6>
      <h1 className={`text-5xl text-[#00425B] ${university.className}`}>XITJKT1</h1>
      <p 
      className={`mt-8 text-[#00425B] ${gatau.className}`}
      data-aos="fade-right"
      data-aos-delay="300"
      data-aos-duration="500">Welcome to the digital heart of our school! XI TJKT 1 is a community of passionate <br></br>learners dedicated to mastering the intricacies of technology and engineering. Together, we'll explore the cutting-edge of computer science, develop groundbreaking applications, and shape the future of technology.<br></br> Join us as we embark on this exciting journey of discovery and innovation.</p>
    </div>
  );
}
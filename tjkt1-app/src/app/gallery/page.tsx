import Image from 'next/image';
import { gatau, university } from "../layout";

export default function Gallery() {
  const images = [
    { src: "/1.jpeg", alt: "Image 1", caption: "Kegiatan orientasi siswa baru" },
    { src: "/2.jpeg", alt: "Image 2", caption: "Praktikum jaringan komputer" },
    { src: "/3.jpeg", alt: "Image 3", caption: "Kunjungan industri ke perusahaan IT" },
    { src: "/4.jpeg", alt: "Image 4", caption: "Lomba keterampilan siswa" },
    { src: "/5.jpeg", alt: "Image 5", caption: "miaw 1" },
    { src: "/6.jpeg", alt: "Image 6", caption: "miaw 2" },
    { src: "/7.jpeg", alt: "Image 7", caption: "miaw 3" },
    { src: "/8.jpeg", alt: "Image 8", caption: "miaw 4" },
    { src: "/9.jpeg", alt: "Image 9", caption: "miaw 5" },
    { src: "/10.jpeg", alt: "Image 10", caption: "miaw 6" },
    { src: "/11.jpeg", alt: "Image 11", caption: "miaw 7" },
    { src: "/12.jpeg", alt: "Image 12", caption: "miaw 8" },
    { src: "/13.jpeg", alt: "Image 13", caption: "miaw 9" },
    { src: "/14.jpeg", alt: "Image 14", caption: "miaw 10" },
    { src: "/15.jpeg", alt: "Image 15", caption: "miaw 11" },
    { src: "/16.jpeg", alt: "Image 16", caption: "miaw 12" },
    { src: "/17.jpeg", alt: "Image 17", caption: "miaw 13" },
    { src: "/18.jpeg", alt: "Image 18", caption: "miaw 14" },
    { src: "/19.jpeg", alt: "Image 19", caption: "miaw 15" },
    { src: "/20.jpeg", alt: "Image 20", caption: "miaw 16" },
    { src: "/21.jpeg", alt: "Image 21", caption: "miaw 17" },
    { src: "/22.jpeg", alt: "Image 22", caption: "miaw 18" },
    { src: "/23.jpeg", alt: "Image 23", caption: "miaw 19" },
    { src: "/24.jpeg", alt: "Image 24", caption: "miaw 20" },
    { src: "/25.jpeg", alt: "Image 25", caption: "miaw 21" },
    { src: "/26.jpeg", alt: "Image 26", caption: "miaw 22" },
    { src: "/27.jpeg", alt: "Image 27", caption: "miaw 23" },
    { src: "/28.jpeg", alt: "Image 28", caption: "miaw 24" },
    { src: "/29.jpeg", alt: "Image 29", caption: "miaw 26" },
    { src: "/30.jpeg", alt: "Image 30", caption: "miaw 27" },
    { src: "/31.jpeg", alt: "Image 31", caption: "miaw 28" },
    { src: "/32.jpeg", alt: "Image 32", caption: "miaw 29" },
    { src: "/33.jpeg", alt: "Image 33", caption: "miaw 30" },
    { src: "/34.jpeg", alt: "Image 34", caption: "miaw 31" },
    { src: "/35.jpeg", alt: "Image 35", caption: "Foto bersama di akhir tahun ajaran" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className={`text-4xl text-center text-[#00425B] mb-2 ${university.className}`}>Our Gallery</h1>
      <p className={`text-center text-[#00425B] mb-8 ${gatau.className}`}>Capturing moments from XI TJKT 1</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="relative flex justify-center items-center bg-gray-100 p-2 ">
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
                className="max-w-full h-auto object-contain"
                style={{
                    maxHeight: '300px',
                    width: 'auto',
                }}
              />
            </div>
            <div className={`p-4 bg-white ${gatau.className}`}>
              <p className="text-sm text-[#00425B]">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
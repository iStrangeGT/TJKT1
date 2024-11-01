import Image from 'next/image';
import { gatau, university } from "../layout";

export default function Gallery() {
  const images = [
    { src: "/default.jpg", alt: "Image 1", caption: "Kegiatan orientasi siswa baru" },
    { src: "/default.jpg", alt: "Image 2", caption: "Praktikum jaringan komputer" },
    { src: "/default.jpg", alt: "Image 3", caption: "Kunjungan industri ke perusahaan IT" },
    { src: "/default.jpg", alt: "Image 4", caption: "Lomba keterampilan siswa" },
    { src: "/default.jpg", alt: "Image 5", caption: "miaw 1" },
    { src: "/default.jpg", alt: "Image 6", caption: "miaw 2" },
    { src: "/default.jpg", alt: "Image 7", caption: "miaw 3" },
    { src: "/default.jpg", alt: "Image 8", caption: "miaw 4" },
    { src: "/default.jpg", alt: "Image 9", caption: "miaw 5" },
    { src: "/default.jpg", alt: "Image 10", caption: "miaw 6" },
    { src: "/default.jpg", alt: "Image 11", caption: "miaw 7" },
    { src: "/default.jpg", alt: "Image 12", caption: "miaw 8" },
    { src: "/default.jpg", alt: "Image 13", caption: "miaw 9" },
    { src: "/default.jpg", alt: "Image 14", caption: "miaw 10" },
    { src: "/default.jpg", alt: "Image 15", caption: "miaw 11" },
    { src: "/default.jpg", alt: "Image 16", caption: "miaw 12" },
    { src: "/default.jpg", alt: "Image 17", caption: "miaw 13" },
    { src: "/default.jpg", alt: "Image 18", caption: "miaw 14" },
    { src: "/default.jpg", alt: "Image 19", caption: "miaw 15" },
    { src: "/default.jpg", alt: "Image 20", caption: "miaw 16" },
    { src: "/default.jpg", alt: "Image 21", caption: "miaw 17" },
    { src: "/default.jpg", alt: "Image 22", caption: "miaw 18" },
    { src: "/default.jpg", alt: "Image 23", caption: "miaw 19" },
    { src: "/default.jpg", alt: "Image 24", caption: "miaw 20" },
    { src: "/default.jpg", alt: "Image 25", caption: "miaw 21" },
    { src: "/default.jpg", alt: "Image 26", caption: "miaw 22" },
    { src: "/default.jpg", alt: "Image 27", caption: "miaw 23" },
    { src: "/default.jpg", alt: "Image 28", caption: "miaw 24" },
    { src: "/default.jpg", alt: "Image 29", caption: "miaw 26" },
    { src: "/default.jpg", alt: "Image 30", caption: "miaw 27" },
    { src: "/default.jpg", alt: "Image 31", caption: "miaw 28" },
    { src: "/default.jpg", alt: "Image 32", caption: "miaw 29" },
    { src: "/default.jpg", alt: "Image 33", caption: "miaw 30" },
    { src: "/default.jpg", alt: "Image 34", caption: "miaw 31" },
    { src: "/default.jpg", alt: "Image 35", caption: "Foto bersama di akhir tahun ajaran" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="relative flex justify-center items-center bg-gray-100 p-2 ">
              <Image
                src={img.src}
                alt={img.alt}
                width={300}
                height={300}
                loading="lazy"
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
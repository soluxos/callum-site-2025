import Image from "next/image";
import ImageGrid from "@/components/ImageGrid/SimpleImageGrid";
import Link from "next/link";

export default function Home() {
  // Example usage
  const imageArray = [
    { src: "/images/hero-3.png", alt: "Image 1" },
    { src: "/images/hero-2.png", alt: "Image 2" },
    { src: "/images/hero.png", alt: "Image 3" },
  ];

  return (
    <>
      <div className="bg-[#FF2B00] min-h-6 font-departure-mono uppercase flex flex-col justify-center items-center w-full px-10 md:px-15 lg:px-20 mt-[48px] xs:mt-0">
        <p className="text-white text-[12px] font-departure-mono uppercase">
          Work in progress, rapidly building because I want to work at Plain.com - Check progress on{" "}
          <Link href="https://github.com/soluxos/callum-site-2025" className="underline">
            GitHub
          </Link>
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 width-full h-[100vh]">
        <p className="text-[#626262] text-[12px] mb-4 font-departure-mono uppercase">
          I'm sorry, this page is yet to be built, but I'll be done soon. Check back later!
        </p>
      </div>
    </>
  );
}

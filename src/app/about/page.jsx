import Image from "next/image";
import ImageGrid from "@/components/ImageGrid/SimpleImageGrid";
import Link from "next/link";
import WipBanner from "@/components/WipBanner/WipBanner";

export default function Home() {
  // Example usage
  const imageArray = [
    { src: "/images/random/1.jpg", alt: "Image 1" },
    { src: "/images/random/15.jpg", alt: "Image 2" },
    { src: "/images/random/3.jpeg", alt: "Image 3" },
    { src: "/images/random/11.jpg", alt: "Image 4" },
    { src: "/images/random/14.jpg", alt: "Image 5" },
    { src: "/images/random/6.jpg", alt: "Image 6" },
    { src: "/images/random/7.jpg", alt: "Image 7" },
    { src: "/images/random/8.jpeg", alt: "Image 8" },
  ];

  return (
    <>
      <div className="bg-[#0A0D08] font-satoshi flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full min-h-[566px] relative grid grid-cols-1 md:grid-cols-3">
          {/* Left side - Dark */}
          <div className="flex-1 bg-[#171E12] flex flex-col h-full p-10 md:p-15 lg:p-20 min-h-[480px] col-span-1 md:col-span-2">
            <div className="max-w-[750px] mt-60 md:mt-auto">
              <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
                I guess this is another intro?
              </p>
              <h1 className="text-[#B1B1B1] font-medium text-2xl leading-relaxed font-satoshi">
                Well, you know I'm Callum now (hopefully). Like I said on the homepage I'm a
                designer and developer. I'm not just into this for a career, this is who I am. A
                digital tinkerer, who likes to nerd out over design and code.
              </h1>
            </div>
          </div>

          <div className="col-span-1 h-[400px] md:h-full bg-[#000] bg-[url('/images/random/46.jpg')] bg-cover bg-center overflow-hidden p-10 md:p-15 lg:p-20 items-end flex">
            <div className="flex flex-col gap-1">
              <p className="text-white text-[12px] font-departure-mono uppercase">
                A pic from Holiday
              </p>
              <p className="text-white text-[16px] font-departure-mono uppercase">
                Markarska, Croatia
              </p>
            </div>
          </div>
        </section>
        {/* WIP Banner */}
        <WipBanner />
        {/* Second row */}
        <section className="bg-[linear-gradient(to_right,#1D211B_0%,#1D211B_50%,#1D241A_50%,#1D241A_100%)] w-full">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Why I started coding */}
            <div className="flex flex-col justify-end bg-[#222920] min-h-[600px] p-10 md:p-15 lg:p-20">
              <div className="flex flex-col gap-1">
                <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
                  What i’m doing in my free time
                </p>
                <div className="flex flex-col gap-4">
                  <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
                    In my free time I spend a good amount of time with friends and family. Whether
                    this is meeting up for food, playing games together, or just going to explore.
                  </p>
                  <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
                    I’m an avid video gamer, watch far too many TV series, and read a good chunk of
                    fantasy books.
                  </p>
                  <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
                    If I’m not doing the above, I’m probably working on a side project. Typically
                    they end up being book/reading related, or something to do with design.
                  </p>
                </div>
              </div>
            </div>

            {/* Why I started designing */}
            <div className="flex flex-col justify-end bg-[#2E312C] min-h-[600px] p-10 md:p-15 lg:p-20">
              <div className="flex flex-col gap-1">
                <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
                  My love for design
                </p>
                <div className="flex flex-col gap-4">
                  <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
                    Honestly, the reason I wanted to learn design is because I didn’t want to make
                    things that looked crap.
                  </p>
                  <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
                    I’ve always appreciated good design, I’m constantly seeking stunning UI or great
                    experiences, because it’s what brings joy to an area that is becoming
                    increasingly mundane.
                  </p>
                  <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
                    I’ve constantly been on a journey to better myself as a designer, whether that
                    be reading articles, watching tutorials or making something as a side project.
                  </p>
                </div>
              </div>
            </div>

            {/* Why I started coding */}
            <div className="flex flex-col justify-end bg-[#1D241A] min-h-[600px] p-10 md:p-15 lg:p-20">
              <div className="flex flex-col gap-1">
                <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
                  Why I started coding
                </p>
                <div className="flex flex-col gap-4">
                  <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
                    I’ve been making websites since I was around 11 years old. There I was sitting
                    in my room with a laptop, making crappy HTML sites to host my videos.
                  </p>
                  <p className="text-[#B1B1B1] leading-[150%] text-[16px] font-satoshi font-medium">
                    It all stemmed from my love of gaming, that got me interested in tech, and a
                    curiosity for how to make things in a digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Grid Section */}
        <section className="w-full bg-[#0A0D08]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border-none border-transparent">
            {imageArray.map((image, index) => (
              <div key={index} className="min-h-[380px] w-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full border-image-none"
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

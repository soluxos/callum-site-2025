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
      {/* Recent Projects Section */}
      <section className="w-full bg-[#11160E] px-10 md:px-15 lg:px-20 pb-10 md:pb-15 lg:pb-20 flex flex-col pt-[310px] xs:pt-[310px]">
        <div className="w-full flex flex-col gap-10">
          {/* Title Section */}
          <div className="gap-1">
            <p className="text-[#626262] text-[12px] tracking-wide font-departure-mono uppercase">
              These are just some
            </p>
            <h2 className="text-[#B1B1B1] text-3xl md:text-2xl sm:text-xl font-satoshi font-medium">
              Recent projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {/* Project 1 - Experience builder */}
            <div className="w-full flex flex-col gap-5">
              <div className="w-full h-[40vh] md:h-96 lg:h-[400px] xl:h-[40vh] bg-[#191E16] rounded-lg flex items-center justify-center">
                <Image
                  src="/images/projects/experience-builder.svg"
                  alt="Experience Builder"
                  width={120}
                  height={120}
                  unoptimized="true"
                  priority
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#626262] text-[12px] tracking-wide font-departure-mono uppercase">
                  Link coming soon...
                </p>
                <h3 className="text-[#B1B1B1] text-lg font-satoshi font-medium">
                  Experience builder
                </h3>
                <p className="text-[#626262] text-sm font-satoshi">
                  The low code site builder for Drupal.
                </p>
              </div>
            </div>

            {/* Project 3 - Wzis.dog */}
            <div className="w-full flex flex-col gap-5">
              <div className="w-full h-[40vh] md:h-96 lg:h-[400px] xl:h-[40vh] bg-[#191E16] rounded-lg flex items-center justify-center">
                <Image
                  src="/images/projects/wzis.png"
                  alt="Experience Builder"
                  width={120}
                  height={120}
                  unoptimized="true"
                  priority
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#626262] text-[12px] tracking-wide font-departure-mono uppercase">
                  Link coming soon...
                </p>
                <h3 className="text-[#B1B1B1] text-lg font-satoshi font-medium">Wzis.dog</h3>
                <p className="text-[#626262] text-sm font-satoshi">
                  The trendiest dog treat company going.
                </p>
              </div>
            </div>

            {/* Project 2 - Site Studio */}
            <div className="w-full flex flex-col gap-5">
              <div className="w-full h-[40vh] md:h-96 lg:h-[400px] xl:h-[40vh] bg-[#191E16] rounded-lg flex items-center justify-center">
                <Image
                  src="/images/projects/site-studio.png"
                  alt="Experience Builder"
                  width={120}
                  height={120}
                  unoptimized="true"
                  priority
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#626262] text-[12px] tracking-wide font-departure-mono uppercase">
                  Link coming soon...
                </p>
                <h3 className="text-[#B1B1B1] text-lg font-satoshi font-medium">Site Studio</h3>
                <p className="text-[#626262] text-sm font-satoshi">
                  A low code site builder used by the likes of Bayer Pharmaceutical.
                </p>
              </div>
            </div>

            {/* Project 4 - Union Roasted */}
            <div className="w-full flex flex-col gap-5">
              <div className="w-full h-[40vh] md:h-96 lg:h-[400px] xl:h-[40vh] bg-[#191E16] rounded-lg flex items-center justify-center">
                <Image
                  src="/images/projects/union.png"
                  alt="Experience Builder"
                  width={120}
                  height={120}
                  unoptimized="true"
                  priority
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#626262] text-[12px] tracking-wide font-departure-mono uppercase">
                  Link coming soon...
                </p>
                <h3 className="text-[#B1B1B1] text-lg font-satoshi font-medium">Union Roasted</h3>
                <p className="text-[#626262] text-sm font-satoshi">
                  A website for one of the best coffee roasters around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

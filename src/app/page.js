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
          Work in progress, rapidly building because I want to work at Plain.com
        </p>
      </div>
      <div className="bg-[#0A0D08] font-satoshi flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="flex w-full h-[900px] relative flex-row">
          {/* Left side - Dark */}
          <div className="flex-1 bg-[#0A0D08] flex flex-col h-full p-10 md:p-15 lg:p-20">
            <div className="max-w-[750px] mt-auto">
              <p className="text-[#626262] text-[12px] mb-4 font-departure-mono uppercase">
                A lovely little intro
              </p>
              <h1 className="text-[#B1B1B1] font-medium text-4xl md:text-3xl sm:text-2xl leading-relaxed font-satoshi">
                Hey, I’m Callum. I’m a designer & developer based in the south-east of the UK. I
                currently work at Acquia as a Senior Product Designer.
              </h1>
            </div>
          </div>

          <div className="lg:w-[41.75%] md:w-[41.75%] sm:w-full h-full bg-[#000] bg-[url('/images/hero-2.png')] bg-cover bg-center overflow-hidden p-10 md:p-15 lg:p-20 items-end flex">
            <div className="flex flex-col gap-1">
              <p className="text-white text-[12px] mb-4 font-departure-mono uppercase">
                One of my happy places
              </p>
              <p className="text-white text-[16px] mb-4 font-departure-mono uppercase">
                waterstones cafe, lewes
              </p>
            </div>
          </div>
        </section>

        {/* <ImageGrid images={imageArray} className="w-64 h-64" /> */}

        {/* Recent Projects Section */}
        <section className="w-full bg-[#11160E] p-10 md:p-15 lg:p-20 flex flex-col">
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
                <div className="w-full h-90 md:h-96 lg:h-[400px] xl:h-[440px] bg-[#191E16] rounded-lg flex items-center justify-center">
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
                <div className="w-full h-90 md:h-96 lg:h-[400px] xl:h-[440px] bg-[#191E16] rounded-lg flex items-center justify-center">
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
                <div className="w-full h-90 md:h-96 lg:h-[400px] xl:h-[440px] bg-[#191E16] rounded-lg flex items-center justify-center">
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
                <div className="w-full h-90 md:h-96 lg:h-[400px] xl:h-[440px] bg-[#191E16] rounded-lg flex items-center justify-center">
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

        {/* Currently Reading Section */}
        <section className="bg-[linear-gradient(to_right,#1D211B_0%,#1D211B_50%,#1D241A_50%,#1D241A_100%)] w-full">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Currently Building */}
            <div className="flex flex-col justify-between bg-[#1D211B] min-h-[600px] p-10 md:p-15 lg:p-20">
              <div className="flex flex-col gap-1">
                <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
                  So right now I&apos;m
                </p>
                <h2 className="text-[#B1B1B1] text-[24px] font-satoshi font-medium">Building</h2>
              </div>
              <Image
                src="/images/your-next-tale.png"
                alt="Your Next Tale"
                width={746}
                height={502}
                className="w-full h-auto"
                unoptimized="true"
                priority
              />
              <div>
                <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
                  Your Next Tale
                </p>
                <h4 className="text-[#B1B1B1] text-lg font-satoshi">
                  A digital book case for fantasy and sci-fi novels.
                </h4>
              </div>
            </div>

            {/* Currently Reading */}
            <div className="flex flex-col justify-between bg-[#2E312C] min-h-[600px] p-10 md:p-15 lg:p-20">
              <div className="flex flex-col gap-1">
                <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
                  If you must know I&apos;m
                </p>
                <h2 className="text-[#B1B1B1] text-[24px] font-satoshi font-medium">Reading</h2>
              </div>

              <Image
                src="/images/books/book-group.png"
                alt="Group of books"
                width={380}
                height={409}
                className="w-full h-auto"
                unoptimized="true"
                priority
              />
              <div>
                <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
                  Million Dollar Weekend
                </p>
                <h4 className="text-[#B1B1B1] text-lg font-satoshi">By Noah Kagan</h4>
              </div>
            </div>

            {/* Currently Watching */}
            <div className="flex flex-col justify-between bg-[#1D241A] min-h-[600px] p-10 md:p-15 lg:p-20">
              <div className="flex flex-col gap-1">
                <p className="text-[#626262] text-[12px] font-departure-mono uppercase">
                  This is what I&apos;m
                </p>
                <h2 className="text-[#B1B1B1] text-[24px] font-satoshi font-medium">Watching</h2>
              </div>

              <Image
                src="/images/tv/tv-group.png"
                alt="Your Next Tale"
                width={407}
                height={271}
                className="w-full h-auto"
                unoptimized="true"
                priority
              />

              <div>
                <p className="text-[#626262] text-[12px] font-departure-mono uppercase mb-2">
                  Berserk
                </p>
                <h4 className="text-[#B1B1B1] text-lg font-satoshi">By Kentaro Miura</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects Section */}
        <footer className="w-full bg-[#0A0D08] p-10 md:p-15 lg:p-20 flex flex-col">
          <div className="w-full flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              <div className="w-full flex flex-col gap-15">
                <ul className="w-full flex flex-col gap-[14px]">
                  <p className="text-white text-[12px] font-departure-mono uppercase">
                    Side proejcts
                  </p>
                  <Link
                    href="https://yournexttale.com"
                    className="text-[#626262] text-[14px] font-satoshi font-medium"
                  >
                    Your Next Tale
                  </Link>
                  <Link
                    href="https://nifty.lemonsqueezy.com/buy/aa932696-fbd1-4f33-8f7d-24a06a237ab0"
                    className="text-[#626262] text-[14px] font-satoshi font-medium"
                  >
                    Maybe Framer Template
                  </Link>
                  <Link href="/" className="text-[#626262] text-[14px] font-satoshi font-medium">
                    Nifty Framer Template
                  </Link>
                </ul>
                <ul className="w-full flex flex-col gap-[14px]">
                  <p className="text-white text-[12px] font-departure-mono uppercase">
                    Work Case Studies
                  </p>
                  <Link
                    href="https://yournexttale.com"
                    className="text-[#626262] text-[14px] font-satoshi font-medium"
                  >
                    Your Next Tale
                  </Link>
                  <Link
                    href="https://nifty.lemonsqueezy.com/buy/aa932696-fbd1-4f33-8f7d-24a06a237ab0"
                    className="text-[#626262] text-[14px] font-satoshi font-medium"
                  >
                    Maybe Framer Template
                  </Link>
                  <Link href="/" className="text-[#626262] text-[14px] font-satoshi font-medium">
                    Nifty Framer Template
                  </Link>
                </ul>
              </div>
              {/* Column 2*/}
              {/* <div className="w-full flex flex-col gap-5 items-end">
                <ul className="w-full flex flex-col gap-[14px]">
                  <p className="text-white text-[12px] font-departure-mono uppercase">
                    Side proejcts
                  </p>
                  <Link href="/" className="text-[#626262] text-[14px] font-satoshi font-medium">
                    Your Next Tale
                  </Link>
                  <Link href="/" className="text-[#626262] text-[14px] font-satoshi font-medium">
                    Bookerino (Closed)
                  </Link>
                  <Link href="/" className="text-[#626262] text-[14px] font-satoshi font-medium">
                    Can you tip there?
                  </Link>
                </ul>
              </div> */}

              {/* Column 3*/}
              <div className="w-full flex flex-col gap-5">
                <ul className="w-full flex flex-col gap-[14px]">
                  <p className="text-white text-[12px] font-departure-mono uppercase">
                    Quick links
                  </p>
                  <Link href="/" className="text-[#626262] text-[14px] font-satoshi font-medium">
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-[#626262] text-[14px] font-satoshi font-medium"
                  >
                    About
                  </Link>
                  <Link
                    href="/work"
                    className="text-[#626262] text-[14px] font-satoshi font-medium"
                  >
                    Work
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[#626262] text-[14px] font-satoshi font-medium"
                  >
                    Contact
                  </Link>
                </ul>
              </div>

              {/* Column 4*/}
              <div className="w-full flex flex-col gap-5">
                <ul className="w-full xl:w-auto flex flex-col gap-[14px] xl:text-right">
                  <p className="text-white text-[20px] font-departure-mono uppercase">
                    Callum Harrod
                  </p>
                  <Link
                    href="https://yournexttale.com"
                    className="text-[#626262] text-[14px] font-satoshi font-medium"
                  >
                    Your Next Tale
                  </Link>
                  <Link href="/" className="text-[#626262] text-[14px] font-satoshi font-medium">
                    Bookerino (Closed)
                  </Link>
                  <Link href="/" className="text-[#626262] text-[14px] font-satoshi font-medium">
                    Can you tip there?
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

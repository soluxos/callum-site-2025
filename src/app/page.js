import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[#0A0D08] font-satoshi">
        {/* Hero Section */}
        <section className="flex h-[900px] mt-12">
          {/* Left side - Dark */}
          <div className="flex-1 bg-[#0A0D08] px-[40px] md:px-[60px] lg:px-[80px] py-[40px] md:py-[60px] lg:py-[80px] flex items-end">
            <div className="max-w-[750px]">
              <p className="text-[#626262] text-[12px] mb-4 tracking-wide font-departure-mono uppercase">
                A lovely little intro
              </p>
              <h1 className="text-[#B1B1B1] font-medium text-4xl md:text-3xl sm:text-2xl leading-relaxed mb-6 font-satoshi">
                Hey, I’m Callum. I’m a designer & developer based in the south-east of the UK. I
                currently work at Acquia as a Senior Product Designer.
              </h1>
            </div>
          </div>

          <div className="lg:w-[658px] md:w-[400px] sm:w-full bg-[#8b6f47] bg-[url('/images/hero.png')] bg-cover bg-center relative overflow-hidden"></div>
        </section>

        {/* Recent Projects Section */}
        <section className="bg-[#11160E] px-[40px] md:px-[60px] lg:px-[80px] py-[40px] md:py-[60px] lg:py-[80px] flex flex-col">
          <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-10">
            {/* Title Section */}
            <div className="gap-2 mb-12">
              <p className="text-[#626262] text-[12px] tracking-wide font-departure-mono uppercase">
                These are just some
              </p>
              <h2 className="text-[#B1B1B1] text-3xl md:text-2xl sm:text-xl font-satoshi">
                Recent projects
              </h2>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {/* Project 1 - Experience builder */}
              <div className="w-full flex flex-col gap-5">
                <div className="w-full h-90 md:h-96 lg:h-[440px] bg-[#191E16] rounded-lg mb-4">
                  {/* Placeholder for project image */}
                </div>
                <h3 className="text-[#B1B1B1] text-lg font-satoshi mb-2">Experience builder</h3>
                <p className="text-[#626262] text-sm font-satoshi">
                  The low code site builder for Drupal.
                </p>
              </div>

              {/* Project 2 - Site Studio */}
              <div className="w-full flex flex-col gap-5">
                <div className="w-full h-90 md:h-96 lg:h-[440px] bg-[#191E16] rounded-lg mb-4">
                  {/* Placeholder for project image */}
                </div>
                <h3 className="text-[#B1B1B1] text-lg font-satoshi mb-2">Site Studio</h3>
                <p className="text-[#626262] text-sm font-satoshi">
                  A low code site builder used by the likes of Bayer Pharmaceutical.
                </p>
              </div>

              {/* Project 3 - Wzis.dog */}
              <div className="w-full flex flex-col gap-5">
                <div className="w-full h-90 md:h-96 lg:h-[440px] bg-[#191E16] rounded-lg mb-4">
                  {/* Placeholder for project image */}
                </div>
                <h3 className="text-[#B1B1B1] text-lg font-satoshi mb-2">Wzis.dog</h3>
                <p className="text-[#626262] text-sm font-satoshi">
                  The trendiest dog treat company going.
                </p>
              </div>

              {/* Project 4 - Union Roasted */}
              <div className="w-full flex flex-col gap-5">
                <div className="w-full h-90 md:h-96 lg:h-[440px] bg-[#191E16] rounded-lg mb-4">
                  {/* Placeholder for project image */}
                </div>
                <h3 className="text-[#B1B1B1] text-lg font-satoshi mb-2">Union Roasted</h3>
                <p className="text-[#626262] text-sm font-satoshi">
                  A website for one of the best coffee roasters around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Currently Reading Section */}
        <section className="bg-[#0A0D08] px-[40px] md:px-[60px] lg:px-[80px] py-[40px] md:py-[60px] lg:py-[80px]">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-1 gap-8">
              <div className="bg-[#2a2a2a] rounded-lg p-8 md:p-6 sm:p-6">
                <div className="aspect-[3/4] bg-[#3a3a3a] rounded mb-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-4xl">📚</div>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2 font-departure-mono">
                  Currently reading
                </h3>
              </div>

              <div className="bg-[#2a2a2a] rounded-lg p-8 md:p-6 sm:p-6">
                <div className="aspect-[3/4] bg-[#3a3a3a] rounded mb-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-4xl">📖</div>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2 font-departure-mono">
                  Currently reading
                </h3>
              </div>

              <div className="bg-[#2a2a2a] rounded-lg p-8 md:p-6 sm:p-6">
                <div className="aspect-[3/4] bg-[#3a3a3a] rounded mb-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-4xl">📘</div>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2 font-departure-mono">
                  Currently reading
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import Image from "next/image";
import FadeInUp from "@/components/FadeInUp/FadeInUp";
import AboutChat from "@/components/about/AboutChat";
import SkillBadges from "@/components/SkillBadges/SkillBadges";

export default function About() {
  return (
    <main className="flex flex-col gap-[120px]">
      <FadeInUp>
        <section className="flex flex-col gap-10">
          <div className="w-full md:w-[588px] flex flex-col gap-5">
            <h1 className="font-ppmondwest text-[24px] leading-[1.25]">About me</h1>
            <AboutChat />
          </div>
        </section>
      </FadeInUp>

      <FadeInUp>
        <section className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            {/* Experience column */}
            <div className="w-full md:w-[588px] md:shrink-0 flex flex-col gap-5">
              <h2 className="font-ppmondwest text-[24px] leading-[1.25]">Experience</h2>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <p className="font-ppmondwest text-[20px] leading-[1.25]">
                    Lead Product Designer
                  </p>
                  <p className="font-ppmondwest text-[16px] leading-[1.25] text-[#929292]">
                    Acquia /1 year, 3 Months
                  </p>
                  <div className="text-[14px] font-medium leading-[1.5] text-[#929292]">
                    Leading design across two of Acquia's most ambitious initiatives: an AI-powered
                    product experience and a full unification of Acquia's product suite. Before
                    these, I led the design of Drupal Canvas, the largest Drupal initiative in
                    years.
                    <br />
                    <br />
                    This role demands a systems-level perspective. I work across every product in
                    the portfolio, designing solutions that hold together at scale while staying
                    coherent for the people using them. Alongside my IC work, I mentor and train
                    designers across teams, setting the bar for quality and consistency.
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-ppmondwest text-[20px] leading-[1.25]">
                    Senior Software Engineer
                  </p>
                  <p className="font-ppmondwest text-[16px] leading-[1.25] text-[#929292]">
                    Acquia / 6 years, 3 Months
                  </p>
                  <div className="text-[14px] font-medium leading-[1.5] text-[#929292]">
                    <p className="mb-0">
                      One of two engineers who built the entire frontend of Site Studio, a product
                      that grew to $50m ARR. The core of the work was a visual building and editing
                      interface for content editors and site builders -- complex, stateful,
                      interaction-heavy UI built in React.
                      <br />
                      <br />
                      Before moving into engineering, I was Senior Frontend Designer for Site
                      Studio. It was an unusual role that spanned design, development, and customer
                      success, and it was instrumental in the acquisition by Acquia. A few
                      highlights from that period: shipped a proof-of-concept over a weekend that
                      directly contributed to the acquisition, built a full website live on stage at
                      Acquia Engage, and recorded a soup-to-nuts site build in a single day to close
                      a major customer.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-ppmondwest text-[20px] leading-[1.25]">
                    Front-end Web Designer
                  </p>
                  <p className="font-ppmondwest text-[16px] leading-[1.25] text-[#929292]">
                    We Make Websites / 4 Months
                  </p>
                  <div className="text-[14px] font-medium leading-[1.5] text-[#929292]">
                    In this role I was responsible for designing and building websites for a variety
                    of very cool clients (at least I thought they were cool). It may look like
                    I&apos;ve not stuck at this job long, but it didn&apos;t stop me having a
                    brilliant impact. In this job I worked on multiple Shopify websites. I helped
                    design new features, and I worked on developing them too.
                    <br /> <br />I designed{" "}
                    <a href="https://unionroasted.com" className="underline">
                      one of my favourite sites I&apos;ve ever worked on
                    </a>{" "}
                    , before leaving I was awarded with employee of the month (I still have the
                    trophy to prove it), they desperately wanted to keep me, but at the time I
                    wasn&apos;t able to keeo commuting 5 hours a day.
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-ppmondwest text-[20px] leading-[1.25]">
                    UI/UX Designer &amp; Developer
                  </p>
                  <p className="font-ppmondwest text-[16px] leading-[1.25] text-[#929292]">
                    Pragmatic / 1 year, 11 Months
                  </p>
                  <div className="text-[14px] font-medium leading-[1.5] text-[#929292]">
                    I moved to this company originally as a developer. I was experience with
                    WordPress, and I helped create some brilliant websites using PHP, Advanced
                    Custom Fields, and good ol&apos; front-end development. After for doing this for
                    around a year, I moved to the design team, as I worked with design outside of my
                    day job. From here I worked with the likes of Bacardi on some fundamental UX
                    work, still used today on all of their websites.
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-ppmondwest text-[20px] leading-[1.25]">Web Developer</p>
                  <p className="font-ppmondwest text-[16px] leading-[1.25] text-[#929292]">
                    UnitedUS / 1 years, 2 Months
                  </p>
                  <div className="text-[14px] font-medium leading-[1.5] text-[#929292]">
                    My first job out of University! Here I worked on some incredible sites for small
                    and large businesses alike. Here I worked on full-stack WordPress development
                    (not divi builder, don&apos;t worry). Here I was shown how important good design
                    was in making brilliant websites. This was a perfect place to start my career.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInUp>

      <FadeInUp>
        <SkillBadges />
      </FadeInUp>

      <FadeInUp>
        <section className="flex flex-col gap-6">
          <h2 className="font-ppmondwest text-[24px] leading-[1.25]">Some extra pics</h2>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "/images/random/37.jpg",
              "/images/about/image-2.jpg",
              "/images/random/38.jpg",
              "/images/random/11.jpg",
              "/images/about/image-4.jpg",
              "/images/random/1.jpg",
              "/images/random/2.jpg",
              "/images/random/6.jpg",
            ].map((src, index) => (
              <div
                key={`about-card-${index}`}
                className="relative h-[480px] w-full rounded-[16px] overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`About image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </section>
      </FadeInUp>
    </main>
  );
}

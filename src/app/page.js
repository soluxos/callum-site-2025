import DitherBackground from "@/components/DitherBackground/DitherBackground";
import ImageSlideshow from "@/components/ImageSlideshow/ImageSlideshow";
import Image from "next/image";
import Link from "next/link";
import ImageMarquee from "@/components/ImageMarquee/ImageMarquee";
import HeroBubbles from "@/components/HeroBubbles/HeroBubbles";
import FadeInUp from "@/components/FadeInUp/FadeInUp";
import HomeStickyNotes from "@/components/HomeStickyNotes/HomeStickyNotes";
import CaseStudyPreviewCard from "@/components/case-study/CaseStudyPreviewCard";
import { CASE_STUDIES } from "@/data/caseStudies";

export default function Home() {
  return (
    <main className="flex flex-col gap-[120px]">
      <div className="flex flex-col gap-[120px] md:gap-[240px]">
        <FadeInUp>
          <section className="flex w-full flex-col gap-2 items-center justify-center text-center pb-[120px]">
            <div className="hero-text-container w-full flex flex-col gap-2 items-center justify-start">
              <HeroBubbles
                messages={[
                  "I'm currently leading design at Acquia",
                  "Oh, I'm also building a neat bookshelf web app on the side",
                  "I'm designing an AI tool for Acquia at the moment",
                  "One of two engineers that created the frontend of Site Studio, a product with $50m ARR",
                  "I'm also building a platform for all Acquia products",
                  "Created the new editor for Drupal",
                  "Currently utilising AI tools to speed up my design process",
                  "I worked at a small startup that got acquired by Acquia",
                  "Made a website in a day to land a new customer",
                  "Creating design systems for incredibly complex products",
                  "I wonder if you've stayed around for this?",
                ]}
              />
              <h1 className="font-ppmondwest text-[64px] leading-[1.25]">Hey, I&apos;m Callum.</h1>
              <p className="max-w-[480px] text-[14px] font-medium leading-[1.5] text-[#929292]">
                I&apos;m a designer and developer with over ten years of experience in solving
                difficult problems in tech. Versed in design systems, AI tooling, and more.
              </p>
            </div>
          </section>
        </FadeInUp>
      </div>

      {/* Case studies section */}
      <FadeInUp delay={0.1}>
        <section className="flex flex-col gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            {CASE_STUDIES.map(cs => (
              <CaseStudyPreviewCard key={cs.slug} {...cs} />
            ))}
          </div>
        </section>
      </FadeInUp>

      {/* Side projects section */}
      <FadeInUp>
        <section className="flex flex-col gap-6">
          <h2 className="font-ppmondwest text-[24px] leading-[1.25]">Some side projects</h2>
          <div className="grid gap-5 md:grid-cols-4">
            <a
              href="https://yournexttale.com"
              className="relative h-auto w-full flex flex-col gap-2 overflow-hidden"
            >
              <video
                className="h-[240px] w-full object-cover overflow-hidden rounded-[8px]"
                autoPlay
                loop
                muted
              >
                <source src="/videos/ynt.mp4" type="video/mp4" />
              </video>
              <p className="font-satoshi text-[14px] text-[#929292] leading-[1.5] font-medium">
                Your Next Tale
              </p>
            </a>
            <a
              href="https://crisp.framer.website"
              className="relative h-auto w-full flex flex-col gap-2 overflow-hidden"
            >
              <video
                className="h-[240px] w-full object-cover overflow-hidden rounded-[8px]"
                autoPlay
                loop
                muted
              >
                <source src="/videos/crisp.mp4" type="video/mp4" />
              </video>
              <p className="font-satoshi text-[14px] text-[#929292] leading-[1.5] font-medium">
                Crisp Framer Template
              </p>
            </a>
            <a
              href="https://nifty.framer.website"
              className="relative h-auto w-full flex flex-col gap-2 overflow-hidden"
            >
              <video
                className="h-[240px] w-full object-cover overflow-hidden rounded-[8px]"
                autoPlay
                loop
                muted
              >
                <source src="/videos/nifty.mp4" type="video/mp4" />
              </video>
              <p className="font-satoshi text-[14px] text-[#929292] leading-[1.5] font-medium">
                Nifty Framer Template
              </p>
            </a>
            <a
              href="https://maybe.framer.website"
              className="relative h-auto w-full flex flex-col gap-2 overflow-hidden"
            >
              <video
                className="h-[240px] w-full object-cover overflow-hidden rounded-[8px]"
                autoPlay
                loop
                muted
              >
                <source src="/videos/maybe.mp4" type="video/mp4" />
              </video>
              <p className="font-satoshi text-[14px] text-[#929292] leading-[1.5] font-medium">
                Maybe Framer Template
              </p>
            </a>
          </div>
        </section>
      </FadeInUp>

      {/* Notes section */}
      <FadeInUp>
        <HomeStickyNotes />
      </FadeInUp>
    </main>
  );
}

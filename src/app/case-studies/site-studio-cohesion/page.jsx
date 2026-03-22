import CaseStudyBentoGrid from "@/components/case-study/CaseStudyBentoGrid";
import CaseStudyFullHero from "@/components/case-study/CaseStudyFullHero";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import CaseStudySection from "@/components/case-study/CaseStudySection";
import CaseStudySlider from "@/components/case-study/CaseStudySlider";
import FadeInUp from "@/components/FadeInUp/FadeInUp";
import CaseStudyCards from "@/components/case-study/CaseStudyCards";
import CaseStudyCard from "@/components/case-study/CaseStudyCard";

export default function DrupalCanvasCaseStudy() {
  const sections = [
    { label: "Overview", id: "overview" },
    "The problem",
    "Becoming an expert",
    "Teaching and pitching",
    "Landing our largest customer",
    "Being acquired",
    "Results",
    "End notes",
  ];

  const metaItems = [
    {
      label: "Role",
      value: "Head of Training",
    },
    {
      label: "Outcome",
      value: "Landing a customer with £1m ARR, and being acquired.",
    },
    {
      label: "Deliverables",
      value: "Tutorial Videos, Webinars, Live Demos, Customer Training, Front-end, Site designs",
    },
    {
      label: "Timeline",
      value: " Sep 2018 - May 2020",
    },
  ];

  const sliderImages = [
    {
      src: "/images/case-studies/site-studio-cohesion/hero-4.png",
      alt: "Drupal Canvas design system nodes screen",
    },
    {
      src: "/images/case-studies/site-studio-cohesion/hero-1.png",
      alt: "Drupal Canvas main interface",
    },
    {
      src: "/images/case-studies/site-studio-cohesion/hero-2.png",
      alt: "Drupal Canvas content management screen",
    },
    {
      src: "/images/case-studies/site-studio-cohesion/hero-3.png",
      alt: "Drupal Canvas code editor screen",
    },
  ];

  return (
    <>
      <CaseStudyFullHero
        title="Site Studio / Cohesion"
        description="The story of taking a product with no customers, and landing a customer at £1m ARR that led to us being acquired."
        logo="/images/logos/acquia-logo.svg"
        logoAlt="Acquia logo"
        preset="forest"
        metaItems={metaItems}
      />
      <CaseStudyLayout sections={sections}>
        <main className="flex flex-col gap-[120px] mt-20">
          <FadeInUp delay={0.1}>
            <section className="w-full">
              <CaseStudySlider images={sliderImages} />
            </section>
          </FadeInUp>

          <FadeInUp>
            <CaseStudySection title="The problem">
              <p className="max-w-[588px] text-[14px] font-medium leading-[1.5] text-[#656565]">
                I joined Site Studio, formerly known as Cohesion, with a new title: Head of
                Training. The problem I was hired to solve was simple on the surface, teach
                individuals and entire companies how to build websites with our product.
              </p>
              <p className="max-w-[588px] text-[14px] font-medium leading-[1.5] text-[#656565]">
                Site Studio was solving a real problem within the Drupal ecosystem. Good Drupal
                developers are hard to find, and building websites on Drupal is equally difficult.
                Site Studio offered a low-code site building solution built on top of Drupal.
                However, it was still a technically complex product. Users needed to understand how
                to build component libraries sensibly, and still required a solid grasp of front-end
                UI development. My job was to bridge that gap.
              </p>
            </CaseStudySection>
          </FadeInUp>

          <FadeInUp>
            <CaseStudySection title="Becoming an expert">
              <p className="max-w-[588px] text-[14px] font-medium leading-[1.5] text-[#656565]">
                One of my first challenges was creating a self-serve tutorial video series. These
                videos would form the foundation for teaching users how to build an entire website
                with our product. To do this properly, I needed to become an expert myself. I
                designed and then developed an entire site using Site Studio from scratch, so I
                could teach others to do the same from a place of genuine experience.
              </p>
              <p className="max-w-[588px] text-[14px] font-medium leading-[1.5] text-[#656565]">
                Once I had that depth of knowledge, I created a full suite of tutorial videos
                covering everything a new user would need to go from zero to shipping a site with
                confidence.
              </p>
            </CaseStudySection>
          </FadeInUp>

          <FadeInUp>
            <CaseStudySection title="Teaching and pitching">
              <p className="max-w-[588px] text-[14px] font-medium leading-[1.5] text-[#656565]">
                Becoming a product expert opened up opportunities well beyond creating training
                materials. At the time I joined, our only customers were our partner agency. We
                needed to find and land customers outside of that. To build traction, I visited
                companies alongside our Head of Marketing to demonstrate the product in person, ran
                webinars to hundreds of prospective users, and even built entire websites for
                prospects over the course of a single day to demonstrate the speed and power of Site
                Studio. These sessions were recorded and sent directly to the prospects afterwards.
              </p>
              <p className="max-w-[588px] text-[14px] font-medium leading-[1.5] text-[#656565]">
                This combination of education and live demonstration became one of our most
                effective tools for showing the value of the product to people who had never seen
                anything like it before.
              </p>
              <CaseStudyCards>
                <CaseStudyCard
                  width="full"
                  image="/images/case-studies/site-studio-cohesion/the-team.png"
                  imageAlt="Description"
                  objectFit="cover"
                />
              </CaseStudyCards>
            </CaseStudySection>
          </FadeInUp>

          <FadeInUp>
            <CaseStudySection title="Landing our largest customer">
              <p className="max-w-[588px] text-[14px] font-medium leading-[1.5] text-[#656565]">
                As time went on we had discussions with two of the largest pharmaceutical companies
                on the planet, but nothing had converted. Then on a Friday evening, a Senior
                Director of Solutions Architecture at Acquia told us that one of these very large
                pharma companies was close to buying licences for Site Studio. We just needed to
                show them the value. Monday morning.
              </p>
              <p className="max-w-[588px] text-[14px] font-medium leading-[1.5] text-[#656565]">
                The Product Design Director and I got to work immediately. Over the course of the
                weekend we designed and built a prototype representing the pharmaceutical company's
                brand, using Site Studio. We knew what was at stake. For a 12 person startup, a £1m
                deal was enormous.
              </p>
              <p className="max-w-[588px] text-[14px] font-medium leading-[1.5] text-[#656565]">
                Monday morning, what we had built stopped the room. The pharmaceutical company were
                blown away, and so was the rest of our own team. We landed the deal. The client had
                over 1,000 websites to migrate to our product over the course of the following year,
                and we helped them do that too.
              </p>
            </CaseStudySection>
          </FadeInUp>

          <FadeInUp>
            <CaseStudySection title="Being acquired">
              <p className="max-w-[588px] text-[14px] font-medium leading-[1.5] text-[#656565]">
                Landing that customer changed everything. Very quickly after, our directors entered
                discussions with Acquia and we were acquired. Acquia recognised the revenue
                potential of our customer base and understood that Site Studio was a genuinely
                unique product in the Drupal ecosystem. Acquiring us meant their competitors had no
                foothold for Drupal hosting deals. It was a clean and logical outcome to what had
                been a remarkable few months.
              </p>
            </CaseStudySection>
          </FadeInUp>

          <FadeInUp>
            <CaseStudySection title="Results">
              <div className="max-w-[588px] space-y-4 text-[14px] font-medium leading-[1.5] text-[#656565]">
                <p>
                  The work I did in this role contributed directly to two significant outcomes. We
                  landed a £1m ARR deal with one of the world's largest pharmaceutical companies,
                  and the business was acquired by Acquia. The pharmaceutical client went on to
                  migrate over 1,000 websites to Site Studio, validating both the product and the
                  training infrastructure built to support it.
                </p>
              </div>
              <CaseStudyCards>
                <CaseStudyCard
                  width="full"
                  image="/images/case-studies/site-studio-cohesion/the-team-2.png"
                  imageAlt="Description"
                  objectFit="cover"
                />
              </CaseStudyCards>
            </CaseStudySection>
          </FadeInUp>

          <FadeInUp>
            <CaseStudySection title="End notes">
              <div className="max-w-[588px] space-y-4 text-[14px] font-medium leading-[1.5] text-[#656565]">
                <p>
                  I have left out a lot of detail from my time in this role. There is honestly
                  enough for its own book. Visiting other countries to train teams, designing and
                  building sites on stage at live events, and pitching the product to some of the
                  biggest companies in the world. No two days were the same.
                </p>
                <p>
                  As much as my title was Head of Training, the role demanded far more than that. I
                  was a designer, teaching companies how to build proper design systems. I was a
                  developer, demonstrating front-end best practices. And I was a salesperson,
                  pitching a product I genuinely believed in to customers who needed it. It remains
                  one of the most rewarding periods of my career.
                </p>
              </div>
            </CaseStudySection>
          </FadeInUp>
        </main>
      </CaseStudyLayout>
    </>
  );
}

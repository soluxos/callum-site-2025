/** @type {Record<string, {situation: string, task: string, action: string, result: string}>} */
const STAR_CONTENT = {
  "drupal-canvas": {
    situation:
      "Drupal is one of the web's most powerful CMS platforms but it has a long reputation for being difficult to use. Acquia set out to build a new editing and site-building experience called Drupal Canvas. I joined mid-project as a Senior Product Designer and Senior Software Engineer, after core engineering decisions had already been made but before a design system existed. The team spanned engineers, other designers, and stakeholders across Acquia.",
    task: "Lead the design of Drupal Canvas: build the design system, redesign the UI, design new features, and stay close to engineering to make sure what shipped matched the intent. Jan 2025 to present.",
    action:
      "- Audited the existing design work and built an atomic design system on top of Radix UI, the component library the engineers had already chosen\n- Stripped out options that shouldn't be used, so it was impossible to produce inconsistent UI\n- Redesigned components to be more intuitive and built new ones where gaps existed\n- Wrote documentation, usage guides, and rules for icons, colours, and typography\n- Designed the product shell: a context-sensitive panel system that stays compact but expands based on what the user is doing\n- Worked closely with engineers on interaction design throughout, bridging design intent and technical constraints\n- Broke every new feature down into detailed user flows so engineers and other designers could follow the logic\n- Trained and mentored junior designers on the project",
    result:
      "Drupal Canvas was adopted by over 4,500 websites in the three and a half months after its 1.0 release. For a product built to modernise one of the oldest CMS platforms on the web, that's a strong early signal.",
  },

  "site-studio-cohesion": {
    situation:
      "I joined Site Studio, formerly Cohesion, as a Senior Frontend Designer in September 2018. It was a 12-person startup building a low-code Drupal site builder that was technically complex to use well. When I joined, the only customers were a single partner agency. Good Drupal developers are hard to find, and the product still required solid front-end knowledge to get results.",
    task: "Help the business find and land customers by becoming a product expert, building educational content, running demos, and supporting sales. The company had no enterprise clients when I started. Sep 2018 to May 2020.",
    action:
      "- Became a proper product expert by designing and building a full website in Site Studio before teaching anyone else\n- Produced a self-serve tutorial video series covering everything a new user needed from zero to a shipped site\n- Visited companies alongside the Head of Marketing to demonstrate the product in person\n- Ran webinars to hundreds of prospective users\n- Built complete websites for prospects in a single day to show what the product could do; sessions were recorded and sent to them afterwards\n- On a Friday evening, got the call that a large pharmaceutical company was close to buying. Spent the weekend with the Product Design Director building a branded prototype in Site Studio\n- Delivered the Monday morning demo that closed the deal",
    result:
      "Landed a £1m ARR deal with one of the world's largest pharmaceutical companies. The client migrated over 1,000 websites to Site Studio. Shortly after, Acquia acquired us.",
  },

  "union-roasted": {
    situation:
      "In 2018 I was a designer and developer at WeMakeWebsites. Union Roasted, one of the UK's biggest specialty coffee brands, came to us for a new Shopify site. They were very clear: it could not look like a generic Shopify template. I was the only designer on the project, working alongside a Project Manager. The whole thing ran August to September 2018, roughly one month.",
    task: "Design and build a Shopify e-commerce site that actually felt like Union Roasted: their sourcing story, their process, their team. Deliver the whole thing from kick-off to launch in a month.",
    action:
      "- Attended a kick-off with the client and visited their roastery to properly understand the brand, the people, and how they make coffee\n- Identified what the site needed to say: the farmer partnerships, the roasting process, and the team behind it\n- Designed wireframes then high-fidelity designs, translating the brand into something visually distinct\n- Built the full site on Shopify\n- Delivered the complete project, from brief to launch, in approximately one month",
    result:
      "The client was genuinely delighted. They had expected a standard Shopify build and got something that really looked and felt like them. I was awarded Employee of the Month at WeMakeWebsites.",
  },

  "acquia-unification": {
    situation:
      "Acquia's products had been built separately over years: hosted Drupal, SaaS Drupal, digital asset management, and others. They operated as disconnected tools with no unified interface. Acquia's goal was to bring them all together under one product called Command Center. I joined as Senior Product Designer (Lead) in January 2026, stepping into a project already in motion with no design system and Figma files that were all over the place.",
    task: "Take ownership of the design system and the overall quality of the UI across Command Center. Organise the existing design work, improve consistency, lead the visual and interaction design, and get it to MVP. Jan 2026 to present.",
    action:
      "- Spotted the missing design system on day one and started auditing and collating all existing work\n- Built everything into a clear atomic design system and brought order to the Figma files\n- Improved the UI of components across the board, fixing things that were unclear or didn't suit the product\n- Redesigned the entire product UI and worked closely with developers on interactions\n- Designed new features that made complex cross-product workflows feel straightforward\n- Built a full working prototype using nearly 1,000 prompts, giving engineers and designers a solid reference to work from\n- Ran user testing and used the findings to improve the product\n- Helped new designers understand the engineering constraints when contributing features\n- Did QA throughout to make sure what shipped matched the designs",
    result:
      "Shipped the MVP of Acquia Command Center, bringing multiple separate Acquia products into a single interface for the first time.",
  },

  "acquia-ai": {
    situation:
      "Acquia Prospero is an AI product where businesses use synthetic digital teammates to get work done rather than routing tasks to people. I joined as Senior Product Designer in August 2025, mid-project. There was no design system and a developer-built prototype that needed a lot of design work. The project ran from August to December 2025.",
    task: "Own the design of Acquia Prospero: create the design system, redesign the product from the developer prototype up, run user testing, shape the product requirements, and ship the MVP in four months.",
    action:
      "- Audited the project and organised all available design work into an atomic design system in Figma\n- Redesigned the entire UI from the developer prototype into something people actually enjoyed using\n- Worked closely with engineers on interactions and checked implementation throughout\n- Ran user testing, identified what wasn't working, and updated the designs\n- Got involved in product requirements early to make sure features were solving user problems, not just technical ones\n- Designed new features that made complex AI agent workflows feel understandable\n- Did QA throughout to make sure the shipped product matched what was designed",
    result:
      "Shipped the MVP of Acquia Prospero by December 2025, on schedule and within a four-month window.",
  },
};

export default STAR_CONTENT;

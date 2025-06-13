import {
    Sprout,
    Rocket,
    CalendarDays,
    BarChart3,
    AlertTriangle,
    Presentation,
    Mic,
    Flag,
    Shield,
    Lightbulb,
    BadgeDollarSign,
    PieChart,
    Scale,
    Handshake,
    Workflow,
    ListChecks,
    MessageCircle,
    Calculator,
    Timer,
    LineChart,
    Target,
  } from "lucide-react";


  const navigationLinks = [
    {
      id: 1,
      link: "Home",
      href: "#",
    },
    {
      id: 2,
      link: "Startups",
      href: "#",
    },
    {
      id: 3,
      link: "Funding Rounds",
      href: "#",
    },
    {
      id: 4,
      link: "Valuation",
      href: "#",
    },
   {
      id: 5,
      link: "Resource Hub",
      href: "#",
    },
   {
      id: 6,
      link: "Apply",
      href: "#",
    },
  
  ];
  
  
  
  const frequentlyAskedQuestions = [
    {
      category: "Basics",
      id: 1,
      questions: [
        {
          id: 1,
          alt: "Seed Icon",
          Icon: Sprout,
          question: "What is a seed round?",
          answer:
            "A seed round is the first formal round of venture capital funding, typically used to validate a startup’s idea, build a product, and gain initial traction before scaling.",
        },
        {
          id: 2,
          alt: "Rocket Icon",
          Icon: Rocket,
          question: "What is the value of an accelerator?",
          answer:
            "Accelerators offer mentorship, resources, and investor access in exchange for equity. They can fast-track your fundraising, refine your pitch, and connect you with key players in the startup ecosystem.",
        },
        {
          id: 3,
          alt: "Calendar Icon",
          Icon: CalendarDays,
          question: "Can I raise money pre-product?",
          answer:
            "Yes, it's possible to raise a pre-product seed round, especially if you have a compelling vision, strong team, or domain expertise. However, it’s more challenging and usually involves raising from angels or early believers.",
        },
        {
          id: 4,
          alt: "Graph Icon",
          Icon: BarChart3,
          question: "What metrics should I hit to raise a round?",
          answer:
            "Metrics vary by sector, but early signs of product-market fit—such as user growth, retention, engagement, and revenue—can help justify a seed round. Pre-seed rounds may not require hard metrics but should show strong narrative and team potential.",
        },
        {
          id: 5,
          alt: "Warning Icon",
          Icon: AlertTriangle,
          question: "When should I not fundraise?",
          answer:
            "Avoid fundraising if your product isn’t validated, your story isn’t clear, or if you're doing it purely out of fear of missing out (FOMO). Fundraising is time-consuming—timing and focus matter.",
        },
      ],
    },
  
    {
      category: "The Pitch",
      id: 2,
      questions: [
        {
          id: 6,
          alt: "Deck Icon",
          Icon: Presentation,
          question: "How do I craft an effective pitch deck?",
          answer:
            "An effective pitch deck clearly explains your problem, solution, market size, business model, traction, team, and vision. Keep it under 15 slides and focus on storytelling over fluff.",
        },
        {
          id: 7,
          alt: "Mic Icon",
          Icon: Mic,
          question: "How do I pitch my company?",
          answer:
            "Focus on clarity, conviction, and momentum. Begin with the problem, tell a story, and show why your team is uniquely suited to solve it. Investors invest in belief as much as data.",
        },
        {
          id: 8,
          alt: "Flag Icon",
          Icon: Flag,
          question: "How do you pitch a big mission?",
          answer:
            "Start with a relatable pain point and then zoom out to the global impact. Show how your early product is a wedge into something transformative. Make the investor feel part of something bigger.",
        },
        {
          id: 9,
          alt: "Shield Icon",
          Icon: Shield,
          question: "How do I build a product moat & communicate it to an investor?",
          answer:
            "Product moats include network effects, data advantages, brand, or unique tech. Show how your approach compounds over time and becomes defensible as you scale.",
        },
        {
          id: 10,
          alt: "Inspiration Icon",
          Icon: Lightbulb,
          question: "What were the early pitches from Figma, Replit, and Instagram?",
          answer:
            "Each had concise pitches focused on big visions: Figma emphasized collaboration, Replit highlighted accessibility in coding, and Instagram focused on simple photo sharing with social virality. Study their decks to understand how narrative, clarity, and momentum shaped investor interest.",
        },
      ],
    },
  
    {
      category: "Terms of the Round",
      id: 3,
      questions: [
        {
          id: 11,
          alt: "Valuation Icon",
          Icon: BadgeDollarSign,
          question: "How do I value my company at the seed stage?",
          answer:
            "Valuation at seed is more art than science. It's based on team strength, market size, traction, and investor interest. Use benchmarks, but focus more on what the round enables than just the number.",
        },
        {
          id: 12,
          alt: "Pie Icon",
          Icon: PieChart,
          question: "How should I think about equity and dilution?",
          answer:
            "Expect to give up 10–25% in a seed round. Balance short-term valuation with long-term ownership. Prioritize high-quality investors over maximizing valuation at all costs.",
        },
        {
          id: 13,
          alt: "Balance Icon",
          Icon: Scale,
          question: "Should I optimize for valuation or the right investor?",
          answer:
            "Pick investors who will help you win, not just those offering the highest valuation. Great partners add long-term value and can be pivotal in future rounds and hiring.",
        },
      ],
    },
  
    {
      category: "The Fundraising Process",
      id: 4,
      questions: [
        {
          id: 14,
          alt: "Handshake Icon",
          Icon: Handshake,
          question: "Is it better to raise from a founder or a VC?",
          answer:
            "Founders can offer tactical advice and empathy; VCs bring capital, networks, and signaling. Ideally, get both—a few strong founders on your cap table and a lead VC to anchor the round.",
        },
        {
          id: 15,
          alt: "Timer Icon",
          Icon: Timer,
          question: "How should I split time between fundraising and building?",
          answer:
            "Fundraising is a sprint. Block off 4–6 weeks, go all-in, and avoid dragging it out. Balance by having one cofounder stay heads-down on product while the other leads fundraising.",
        },
        {
          id: 16,
          alt: "Workflow Icon",
          Icon: Workflow,
          question: "How do I logistically go about fundraising?",
          answer:
            "Create a list of ~50 target investors, warm intro where possible, send a concise deck, and schedule first calls in a tight window. Use a CRM tool or spreadsheet to track progress and follow-ups.",
        },
        {
          id: 17,
          alt: "Checklist Icon",
          Icon: ListChecks,
          question: "What questions should I ask VCs in first meetings?",
          answer:
            "Ask how they support founders, what their check size and process is, and what recent investments they’ve made. You're evaluating them as much as they’re evaluating you.",
        },
        {
          id: 18,
          alt: "Timeline Icon",
          Icon: LineChart,
          question: "What does a typical seed round timeline look like?",
          answer:
            "Seed rounds often involve 30–100 investor conversations over 4–8 weeks. Warm intros and early commitments speed things up. You’ll typically close within 6–10 weeks if things go well.",
        },
        {
          id: 19,
          alt: "Message Icon",
          Icon: MessageCircle,
          question: "This is my first VC meeting. What should I expect?",
          answer:
            "Expect a 30-minute conversation focused on your story, traction, and market. Come prepared, stay concise, and bring energy. They'll likely test your vision, product insight, and team dynamics.",
        },
      ],
    },
  
    {
      category: "Understanding Venture",
      id: 5,
      questions: [
        {
          id: 20,
          alt: "Calculator Icon",
          Icon: Calculator,
          question: "What is the math of venture capital?",
          answer:
            "VCs invest knowing most companies will fail. They seek outsized returns from a few breakout winners. This means they optimize for potential scale and massive markets.",
        },
        {
          id: 21,
          alt: "Strategy Icon",
          Icon: Target,
          question: "What is the underlying game of venture capital?",
          answer:
            "Venture is a power-law game. VCs need to believe your startup has the chance to return their entire fund. Understanding this helps you tailor your pitch and target the right investors.",
        },
      ],
    },
  ];
  
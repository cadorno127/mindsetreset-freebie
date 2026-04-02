"use client";

import { useState, useEffect } from "react";
import EmailGate from "@/components/EmailGate";
import WayCard from "@/components/WayCard";
import Checklist from "@/components/Checklist";
import IdeaFinder from "@/components/IdeaFinder";

const ways = [
  {
    number: 1,
    title: "AI for Creating Digital Products",
    paragraphs: [
      "One of the biggest things holding people back from selling online is thinking they need to create everything themselves from scratch. That used to be me too.",
      "AI changed the game. Instead of spending weeks on one product, I can test multiple ideas quickly and double down on what sells.",
      "This is exactly what I learned inside Sara Finance's Inner Circle, a step-by-step system for creating digital products and using social media to sell them. It removed all the guesswork for me.",
    ],
    bullets: [
      "Find something you're passionate about and turn it into a digital product",
      "As long as your product solves a problem and is something you care about, this can work",
      "Build your business on the side while working your job. So many people have done it",
    ],
    affiliateLabel: "Check Out Sara Finance's Inner Circle",
    affiliateUrl: "https://financesimple.co/?ref=zxhorajb",
  },
  {
    number: 2,
    title: "AI for Content Creation",
    paragraphs: [
      "Here's what most people don't realize: you don't need to be on camera 24/7 to build a brand on social media.",
      "I use an AI twin (a digital version of me) to create Instagram content. It looks like me, sounds like me, and delivers value to my audience while I'm at my desk job.",
      "I'm not talking about some creepy deepfake. I'm talking about a professional AI-powered avatar that represents my brand and shares my message consistently.",
      "The result? Daily content. Zero burnout. Full creative control.",
    ],
    affiliateLabel: "Start Creating Content Without Being On Camera",
    affiliateUrl: "https://stan.store/affiliates/a09259e3-1e52-4360-8926-18c42d099708",
  },
  {
    number: 3,
    title: "AI for Social Media Automation",
    paragraphs: [
      "Creating content is one thing. Posting consistently across platforms is another.",
      "I literally set up my content for the week and let the automation handle the rest. While I'm answering help desk tickets at work, my content is going out and reaching new people.",
      "Consistency is what builds trust, and automation is what makes consistency possible when you have a full-time job.",
    ],
    bullets: [
      "Schedule and publish posts to Instagram and Pinterest automatically",
      "Repurpose one piece of content across multiple platforms",
      "Stay consistent even during my busiest work weeks",
    ],
  },
  {
    number: 4,
    title: "AI for Market Research",
    paragraphs: [
      "Before AI, figuring out what to sell felt like guessing. I'd spend time creating a product and just hope people would buy it.",
      "This is how I went from random product ideas to intentionally creating things people were already looking for. It's the difference between hoping for sales and engineering them.",
    ],
    bullets: [
      "Analyze trending niches and keywords before I create anything",
      "Research what my ideal customer is already searching for",
      "Spot gaps in the market that I can fill with a simple product",
    ],
  },
  {
    number: 5,
    title: "AI for Scaling: Without Quitting Your Job (Yet)",
    paragraphs: [
      "Here's the mindset shift that changed everything for me: you don't need to quit your 9-to-5 to start building wealth. But you do need to stop guessing and start making decisions based on research.",
      "My first year selling on Etsy, I made $28K. Not bad, but I was throwing things at the wall and hoping they'd stick. Then I invested in a print-on-demand coach and everything changed. I stopped guessing what would sell and started basing every decision on data and research.",
      "The result? My next year I did $98K in revenue, nearly 4x what I made before.",
      "Now I use AI to do that research even faster. AI handles the repetitive work so I can focus on strategy, creativity, and growth, all while still collecting my 9-to-5 paycheck.",
      "You can start today. Even if you've never sold anything online. Even if you have no audience. Even if you only have 1 hour a day. The key is investing in the right guidance and letting AI do the heavy lifting.",
    ],
    affiliateLabel: "Join Arlan's First 5K Community",
    affiliateUrl: "https://www.skool.com/yourfirst5k/about?ref=7b45eb39857c45d2b1e2f9f08591e102",
  },
];

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("mr_unlocked");
    if (saved === "true") setUnlocked(true);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!unlocked) {
    return <EmailGate onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <main className="bg-surface min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-brand to-surface">
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest">
            Free Guide by @mindsetreset
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            5 Ways I Use AI to Run My Business While Working a 9&#8209;to&#8209;5
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl">
            How I Built a $98K Side Business Without Burning Out
          </p>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            I Was Stuck at a Desk Job&hellip; So I Built a Business in the
            Margins of My Day
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Two and a half years ago, I was clocking in and clocking out,
            trading my time for a paycheck and feeling like there had to be
            more.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            So I started an Etsy shop selling print-on-demand baby onesies and
            kid t-shirts. No inventory. No warehouse. Just a laptop, some
            creativity, and a decision to bet on myself.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            My first year I made $28K. Then I invested in a coach, started
            making decisions based on research instead of guessing, and hit{" "}
            <span className="text-white font-semibold">$98K in my second year</span>.
            And I still work my 9-to-5.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            The secret? I stopped guessing, got the right guidance, and started
            working smarter with AI. Here are the 5 ways AI helps me run and
            grow my business without sacrificing my sleep, my sanity, or my
            full-time job.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto border-t border-white/5" />

      {/* 5 Ways */}
      {ways.map((way, i) => (
        <div key={way.number}>
          <WayCard {...way} />
          {i < ways.length - 1 && (
            <div className="max-w-2xl mx-auto border-t border-white/5" />
          )}
        </div>
      ))}

      {/* AI Idea Finder */}
      <IdeaFinder />

      {/* Divider before checklist */}
      <div className="max-w-2xl mx-auto border-t border-white/5" />

      {/* 7-Day Checklist */}
      <Checklist />

      {/* Footer CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-t from-brand to-surface border-t border-white/5">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            You Have the Guide. You Have the Checklist. Now Make the Decision.
          </h2>
          <p className="text-text-secondary text-lg">
            This isn&rsquo;t just information; it&rsquo;s a starting line.
            Everything you need to take your first step is in your hands right
            now.
          </p>
          <a
            href="https://instagram.com/mindsetreset"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-lg transition-colors"
          >
            Follow @mindsetreset on Instagram
          </a>
          <p className="text-text-secondary text-sm">
            The only difference between where you are and where you want to be
            is a decision. Make it today.
          </p>
        </div>
      </section>
    </main>
  );
}

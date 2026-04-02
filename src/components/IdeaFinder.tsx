"use client";

import { useState } from "react";

interface Idea {
  idea: string;
  description: string;
  firstStep: string;
}

interface IdeaTemplate {
  idea: string;
  description: (skill: string) => string;
  firstStep: string;
  time: string[];
  goal: string[];
  style: string[];
}

const timeOptions = [
  { value: "1-2 hours", label: "1–2 hrs/week" },
  { value: "3-5 hours", label: "3–5 hrs/week" },
  { value: "5-10 hours", label: "5–10 hrs/week" },
  { value: "10+ hours", label: "10+ hrs/week" },
];

const goalOptions = [
  { value: "earn extra spending money", label: "Extra spending money" },
  { value: "build a $1K–$5K/month side income", label: "$1K–$5K/month side income" },
  { value: "eventually replace my 9-to-5 income", label: "Replace my 9-to-5" },
  { value: "build a long-term passive income stream", label: "Passive income stream" },
];

const styleOptions = [
  { value: "creating original content and products", label: "Creating original things" },
  { value: "curating and organizing info for others", label: "Curating & organizing info" },
  { value: "a mix of both", label: "A mix of both" },
];

const ideaPool: IdeaTemplate[] = [
  {
    idea: "Digital Printables Shop on Etsy",
    description: (skill) =>
      `Use your knowledge of ${skill} to create downloadable planners, checklists, or worksheets on Etsy. Once listed, they sell while you sleep with zero inventory or shipping.`,
    firstStep:
      "Open Canva for free, search 'planner template,' customize one around your topic, and list it on Etsy for $3–$9.",
    time: ["1-2 hours", "3-5 hours", "5-10 hours", "10+ hours"],
    goal: ["earn extra spending money", "build a $1K–$5K/month side income", "eventually replace my 9-to-5 income", "build a long-term passive income stream"],
    style: ["creating original content and products", "a mix of both"],
  },
  {
    idea: "AI Prompt Pack",
    description: (skill) =>
      `Create a pack of ready-to-use ChatGPT or Claude prompts for people interested in ${skill}. This is one of the fastest digital products to make and easy to sell for $7–$17.`,
    firstStep:
      "Write 20 useful prompts related to your topic, paste them into a Canva PDF, and list it on Gumroad or Etsy.",
    time: ["1-2 hours", "3-5 hours", "5-10 hours", "10+ hours"],
    goal: ["earn extra spending money", "build a $1K–$5K/month side income", "build a long-term passive income stream"],
    style: ["creating original content and products", "curating and organizing info for others", "a mix of both"],
  },
  {
    idea: "Pinterest Affiliate Marketing",
    description: (skill) =>
      `Pin content related to ${skill} on Pinterest and link to affiliate products you already use and trust. No product creation needed — just curate helpful resources and earn commissions.`,
    firstStep:
      "Create a free Pinterest business account, join one affiliate program in your niche (Amazon, ShareASale, etc.), and pin 5 images this week linking to products.",
    time: ["1-2 hours", "3-5 hours"],
    goal: ["earn extra spending money", "build a long-term passive income stream"],
    style: ["curating and organizing info for others", "a mix of both"],
  },
  {
    idea: "Short eBook or Digital Guide",
    description: (skill) =>
      `Package what you know about ${skill} into a 10–20 page PDF guide. People pay for organized, actionable information that saves them hours of research.`,
    firstStep:
      "Outline 5 key lessons or tips from your skill, write one page per tip using AI to help, and sell it on Gumroad for $7–$27.",
    time: ["3-5 hours", "5-10 hours", "10+ hours"],
    goal: ["earn extra spending money", "build a $1K–$5K/month side income", "eventually replace my 9-to-5 income"],
    style: ["creating original content and products", "a mix of both"],
  },
  {
    idea: "Resource Curation Bundle",
    description: (skill) =>
      `Compile the best free tools, links, templates, and tips related to ${skill} into one organized bundle. Buyers pay for the curation work you've already done.`,
    firstStep:
      "Spend one hour collecting the 20 best free resources in your niche, organize them in a Notion page or PDF, and sell access for $5–$15 on Gumroad.",
    time: ["1-2 hours", "3-5 hours"],
    goal: ["earn extra spending money", "build a long-term passive income stream"],
    style: ["curating and organizing info for others", "a mix of both"],
  },
  {
    idea: "Print-on-Demand Etsy Shop",
    description: (skill) =>
      `Design t-shirts, mugs, or tote bags themed around ${skill} and sell them on Etsy with zero upfront cost. A print partner handles printing and shipping for every order.`,
    firstStep:
      "Sign up for Printify (free), connect it to an Etsy shop, and upload your first 3 designs using Canva.",
    time: ["3-5 hours", "5-10 hours", "10+ hours"],
    goal: ["earn extra spending money", "build a $1K–$5K/month side income", "eventually replace my 9-to-5 income"],
    style: ["creating original content and products", "a mix of both"],
  },
  {
    idea: "Notion or Canva Template Shop",
    description: (skill) =>
      `Create ready-to-use Notion dashboards or Canva templates based on ${skill}. Buyers pay once and you earn repeatedly from the same product with no extra work.`,
    firstStep:
      "Build one Notion template or Canva design around your topic, upload it to Gumroad for free, and share it on Pinterest.",
    time: ["1-2 hours", "3-5 hours", "5-10 hours"],
    goal: ["earn extra spending money", "build a $1K–$5K/month side income", "build a long-term passive income stream"],
    style: ["creating original content and products", "a mix of both"],
  },
  {
    idea: "Curated Newsletter",
    description: (skill) =>
      `Send a weekly email rounding up the best news, tips, and tools related to ${skill}. Build an audience over time and monetize with affiliate links or a paid tier.`,
    firstStep:
      "Start a free Beehiiv newsletter, write your first issue with 3–5 curated links and one tip, and share it on social media to get your first 10 subscribers.",
    time: ["3-5 hours", "5-10 hours"],
    goal: ["build a $1K–$5K/month side income", "eventually replace my 9-to-5 income", "build a long-term passive income stream"],
    style: ["curating and organizing info for others", "a mix of both"],
  },
  {
    idea: "Social Media Content Templates",
    description: (skill) =>
      `Design a pack of Instagram or Pinterest post templates around ${skill} that other creators or small businesses can customize. Templates sell over and over from one upload.`,
    firstStep:
      "Create 10 matching Canva templates in your niche, bundle them as a Canva template pack, and list on Etsy or Gumroad.",
    time: ["3-5 hours", "5-10 hours"],
    goal: ["earn extra spending money", "build a $1K–$5K/month side income", "build a long-term passive income stream"],
    style: ["creating original content and products", "a mix of both"],
  },
  {
    idea: "Online Mini Course",
    description: (skill) =>
      `Teach what you know about ${skill} in a short 3–5 lesson video or text course. Even a $27 course sold to 50 people is over $1,000 from content you create once.`,
    firstStep:
      "Outline 3–5 lessons you could teach, record them on your phone or as a screen recording, and host for free on Gumroad or Teachable.",
    time: ["5-10 hours", "10+ hours"],
    goal: ["build a $1K–$5K/month side income", "eventually replace my 9-to-5 income"],
    style: ["creating original content and products", "a mix of both"],
  },
];

function getIdeas(skill: string, time: string, goal: string, style: string): Idea[] {
  const scored = ideaPool.map((item) => {
    let score = 0;
    if (item.time.includes(time)) score += 2;
    if (item.goal.includes(goal)) score += 2;
    if (item.style.includes(style)) score += 2;
    return { item, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ item }) => ({
      idea: item.idea,
      description: item.description(skill),
      firstStep: item.firstStep,
    }));
}

export default function IdeaFinder() {
  const [skill, setSkill] = useState("");
  const [time, setTime] = useState("");
  const [goal, setGoal] = useState("");
  const [style, setStyle] = useState("");
  const [ideas, setIdeas] = useState<Idea[] | null>(null);

  const canSubmit = skill.trim().length > 2 && time && goal && style;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setIdeas(getIdeas(skill.trim(), time, goal, style));
  };

  const handleReset = () => {
    setIdeas(null);
    setSkill("");
    setTime("");
    setGoal("");
    setStyle("");
  };

  return (
    <section className="py-16 px-6 border-t border-white/5" id="idea-finder">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Bonus Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Find Your Perfect Side Hustle
          </h2>
          <p className="text-text-secondary text-lg">
            Answer 4 quick questions and get personalized product ideas with a
            clear first step, built around your life.
          </p>
        </div>

        {!ideas ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                1. What&rsquo;s a skill, hobby, or topic you know well?
                <span className="text-accent ml-1">*</span>
              </label>
              <input
                type="text"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                placeholder="e.g. fitness, personal finance, parenting, cooking, Canva design…"
                className="w-full px-4 py-3 rounded-lg bg-surface-light border border-white/10 text-white placeholder-text-secondary focus:outline-none focus:border-accent transition-colors text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                2. How much time can you realistically dedicate per week?
                <span className="text-accent ml-1">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {timeOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setTime(opt.value)}
                    className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                      time === opt.value
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-white/10 bg-surface-light text-text-secondary hover:border-white/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                3. What&rsquo;s your main goal?
                <span className="text-accent ml-1">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goalOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setGoal(opt.value)}
                    className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all text-left ${
                      goal === opt.value
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-white/10 bg-surface-light text-text-secondary hover:border-white/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white">
                4. Do you prefer creating or curating?
                <span className="text-accent ml-1">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {styleOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setStyle(opt.value)}
                    className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                      style === opt.value
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-white/10 bg-surface-light text-text-secondary hover:border-white/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full py-4 rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-lg transition-colors"
            >
              Show Me My Ideas →
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <p className="text-text-secondary text-center">
              Based on your answers, here are your personalized starting points:
            </p>

            <div className="space-y-4">
              {ideas.map((idea, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-surface-light p-5 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/20 text-accent text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {idea.idea}
                    </h3>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed pl-10">
                    {idea.description}
                  </p>

                  <div className="ml-10 bg-accent/5 border border-accent/20 rounded-lg px-4 py-3">
                    <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
                      Your first step
                    </p>
                    <p className="text-sm text-white leading-relaxed">
                      {idea.firstStep}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-lg border border-white/10 bg-surface-light hover:border-white/30 text-text-secondary hover:text-white text-sm font-medium transition-all"
            >
              ← Try different answers
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

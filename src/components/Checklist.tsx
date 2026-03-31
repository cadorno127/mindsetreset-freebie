"use client";

import { useState, useEffect } from "react";

interface ChecklistDay {
  day: number;
  title: string;
  description: string;
  affiliateLabel?: string;
  affiliateUrl?: string;
}

const days: ChecklistDay[] = [
  {
    day: 1,
    title: "Get Clear on Your Why",
    description:
      "Grab a notebook or open your notes app. Write down why you want to build income outside your 9-to-5. Be specific. \"I want freedom\" isn't enough. What does freedom look like for you? This is your anchor for the days when it gets hard.",
  },
  {
    day: 2,
    title: "Pick Your Niche",
    description:
      "Open ChatGPT or Claude and type: \"Give me 10 digital product ideas for [your interest/audience].\" Don't overthink it. Pick the one that excites you most. You can always pivot later, but you can't steer a parked car.",
  },
  {
    day: 3,
    title: "Research Before You Create",
    description:
      "Ask AI: \"What are the top trending keywords and gaps in the [your niche] market?\" Look at what's already selling on Etsy, Amazon, or Gumroad. This one step is what took me from $28K to $98K. I stopped guessing and started researching.",
  },
  {
    day: 4,
    title: "Create Your First Digital Product Draft",
    description:
      "Use AI to help you create a simple product like a planner, checklist, guide, or template. It doesn't need to be perfect. Done beats perfect every time. If you want a step-by-step system for this, Sara Finance's Inner Circle walks you through the entire process.",
    affiliateLabel: "Check Out Sara Finance's Inner Circle",
    affiliateUrl: "#AFFILIATE_LINK_SARA_FINANCE",
  },
  {
    day: 5,
    title: "Set Up Your Brand Account",
    description:
      "Pick one platform (Instagram, TikTok, or Threads) and create an account for your brand. Fill out your bio, add a profile photo, and post one introduction. If filming content feels overwhelming, look into building an AI twin to create content for you.",
    affiliateLabel: "Learn About AI Creator Studio",
    affiliateUrl: "https://stan.store/affiliates/a09259e3-1e52-4360-8926-18c42d099708",
  },
  {
    day: 6,
    title: "Create and Schedule 3 Posts",
    description:
      "Use AI to write 3 posts: one about your story, one tip for your audience, and one about the problem your product solves. Schedule them using a free tool so they go out automatically. You're now more consistent than 90% of people who \"want to start a business.\"",
  },
  {
    day: 7,
    title: "Join a Community",
    description:
      "You don't have to do this alone. Surround yourself with people who are on the same journey. Having support, accountability, and a clear path makes the difference between quitting at week two and building real income.",
    affiliateLabel: "Join Arlan's First 5K Community",
    affiliateUrl: "https://www.skool.com/yourfirst5k/about?ref=7b45eb39857c45d2b1e2f9f08591e102",
  },
];

export default function Checklist() {
  const [checked, setChecked] = useState<boolean[]>(new Array(7).fill(false));

  useEffect(() => {
    const saved = localStorage.getItem("mr_checklist");
    if (saved) {
      try {
        setChecked(JSON.parse(saved));
      } catch {
        // ignore
      }
    }
  }, []);

  const toggle = (index: number) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
    localStorage.setItem("mr_checklist", JSON.stringify(updated));
  };

  const completedCount = checked.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 7) * 100);

  return (
    <section className="py-16 px-6" id="checklist">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Your 7-Day AI Side Hustle Kickstart
          </h2>
          <p className="text-text-secondary text-lg">
            Stop scrolling. Start building. One action per day.
          </p>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary">
              {completedCount} of 7 days completed
            </span>
            <span className="text-accent font-semibold">{progressPercent}%</span>
          </div>
          <div className="w-full h-3 bg-surface-light rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-gold rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Checklist items */}
        <div className="space-y-4">
          {days.map((item, i) => (
            <div
              key={item.day}
              className={`rounded-xl border p-5 transition-all duration-300 ${
                checked[i]
                  ? "border-accent/30 bg-accent/5"
                  : "border-white/10 bg-surface-light"
              }`}
            >
              <div className="checklist-item flex items-start gap-4">
                <input
                  type="checkbox"
                  id={`day-${item.day}`}
                  checked={checked[i]}
                  onChange={() => toggle(i)}
                  className="mt-1.5 w-5 h-5 rounded accent-accent cursor-pointer flex-shrink-0"
                />
                <label
                  htmlFor={`day-${item.day}`}
                  className="cursor-pointer space-y-2 flex-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-bold text-sm">
                      DAY {item.day}
                    </span>
                    {checked[i] && (
                      <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                        Done!
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </label>
              </div>

              {item.affiliateUrl && (
                <a
                  href={item.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 ml-9 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
                >
                  {item.affiliateLabel}
                </a>
              )}
            </div>
          ))}
        </div>

        {completedCount === 7 && (
          <div className="text-center p-6 rounded-xl bg-gradient-to-r from-accent/20 to-gold/20 border border-accent/30 space-y-3">
            <p className="text-2xl font-bold">
              You did it!
            </p>
            <p className="text-text-secondary text-lg">
              You just accomplished more in 7 days than most people do in a
              month of &ldquo;thinking about it.&rdquo; Keep going. This is
              just the beginning.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

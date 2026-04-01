"use client";

import { useState } from "react";

interface Idea {
  idea: string;
  description: string;
  firstStep: string;
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

export default function IdeaFinder() {
  const [skill, setSkill] = useState("");
  const [time, setTime] = useState("");
  const [goal, setGoal] = useState("");
  const [style, setStyle] = useState("");
  const [ideas, setIdeas] = useState<Idea[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canSubmit = skill.trim().length > 2 && time && goal && style;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setError("");
    setIdeas(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skill, time, goal, style }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setIdeas(data.ideas);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setIdeas(null);
    setError("");
  };

  return (
    <section className="py-16 px-6 border-t border-white/5" id="idea-finder">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Powered by AI
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
            {/* Q1 */}
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

            {/* Q2 */}
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

            {/* Q3 */}
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

            {/* Q4 */}
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

            {error && (
              <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!canSubmit || loading}
              className="w-full py-4 rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-lg transition-colors"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Building your ideas…
                </span>
              ) : (
                "Show Me My Ideas →"
              )}
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

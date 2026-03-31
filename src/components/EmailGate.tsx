"use client";

import { useState } from "react";

export default function EmailGate({
  onUnlock,
}: {
  onUnlock: () => void;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store locally so we know they opted in
    localStorage.setItem("mr_unlocked", "true");
    localStorage.setItem("mr_email", email);
    localStorage.setItem("mr_name", name);
    onUnlock();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-surface via-brand to-surface-light">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-2">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest">
            Free Guide
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            5 Ways I Use AI to Run My Business While Working a 9&#8209;to&#8209;5
          </h1>
          <p className="text-text-secondary text-lg mt-4">
            How I went from $28K to $98K in one year without quitting my day
            job.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Your first name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-surface-light border border-white/10 text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            required
            placeholder="Your best email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-surface-light border border-white/10 text-white placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-bold text-lg transition-colors cursor-pointer"
          >
            Get Free Access
          </button>
          <p className="text-text-secondary text-xs">
            No spam. Unsubscribe anytime.
          </p>
        </form>

        <p className="text-text-secondary text-sm">
          by <span className="text-white font-medium">@mindsetreset</span>
        </p>
      </div>
    </div>
  );
}

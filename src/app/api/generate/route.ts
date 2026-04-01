import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { skill, time, goal, style } = await req.json();

    if (!skill || !time || !goal || !style) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: "API key not configured." }, { status: 500 });
    }

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const prompt = `You are a digital product business coach helping someone who works a 9-to-5 job start a side income using AI tools.

Based on their answers below, give them 4 personalized business/product ideas with a specific first action step for each. Be encouraging, specific, and practical. Format your response EXACTLY as a JSON array with this structure:
[
  {
    "idea": "short idea name",
    "description": "2-3 sentence explanation of what this is and why it fits them",
    "firstStep": "one very specific action they can take today or this week"
  }
]

Their answers:
- Skill or passion: ${skill}
- Hours available per week: ${time}
- Main goal: ${goal}
- Prefer creating or curating: ${style}

Return ONLY the JSON array, no other text.`;

    const response = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    });

    const text =
      response.content[0].type === "text" ? response.content[0].text : "";

    const ideas = JSON.parse(text);
    return NextResponse.json({ ideas });
  } catch (err) {
    console.error("generate error:", err);
    return NextResponse.json(
      { error: "Failed to generate ideas. Please try again." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;
const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
    }

    const results = await Promise.allSettled([
      addToResend(email),
      addToNotion(email),
    ]);

    const resendOk = results[0].status === "fulfilled";
    const notionOk = results[1].status === "fulfilled";

    if (!resendOk) console.error("[waitlist] Resend failed:", (results[0] as PromiseRejectedResult).reason);
    if (!notionOk) console.error("[waitlist] Notion failed:", (results[1] as PromiseRejectedResult).reason);

    return NextResponse.json({ ok: true, resend: resendOk, notion: notionOk });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

async function addToResend(email: string) {
  if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) return;

  const res = await fetch(
    `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend ${res.status}: ${text}`);
  }
}

async function addToNotion(email: string) {
  if (!NOTION_API_KEY || !NOTION_DATABASE_ID) return;

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_API_KEY}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        Email: { title: [{ text: { content: email } }] },
        Data: { date: { start: new Date().toISOString() } },
        Status: { select: { name: "Novo" } },
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Notion ${res.status}: ${text}`);
  }
}

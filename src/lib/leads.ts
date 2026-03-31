import { supabase } from "./supabase";
import type { B2CLeadData } from "./schemas";
import type { B2BContactData } from "./schemas";

function getUTMParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
  };
}

function getOriginPage(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

export async function submitB2CLead(data: B2CLeadData) {
  const utms = getUTMParams();
  const payload = {
    nome: data.nome,
    email: data.email,
    tipo_lead: "b2c",
    origem_pagina: getOriginPage(),
    consent_email: data.consent_newsletter || false,
    ...utms,
  };

  if (supabase) {
    const { error } = await supabase.from("leads").insert(payload);
    if (error) console.error("Supabase error:", error);
  }

  return payload;
}

export async function submitB2BContact(data: B2BContactData) {
  const payload = {
    nome: data.nome,
    email: data.email,
    telefone: data.telefone || null,
    empresa_escola: data.empresa,
    cargo: data.cargo || null,
    mensagem: data.mensagem,
    tipo_solicitacao: "contato_b2b",
  };

  if (supabase) {
    const { error } = await supabase.from("contact_requests").insert(payload);
    if (error) console.error("Supabase error:", error);
  }

  return payload;
}

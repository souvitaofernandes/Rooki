"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { b2cLeadSchema, type B2CLeadData } from "@/lib/schemas";
import { submitB2CLead } from "@/lib/leads";
import { getWhatsAppUrl } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";

export function B2CForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<B2CLeadData>({
    resolver: zodResolver(b2cLeadSchema),
  });

  const onSubmit = async (data: B2CLeadData) => {
    setStatus("loading");
    try {
      await submitB2CLead(data);
      trackEvent("form_submit", { form_type: "b2c_lead" });
      trackEvent("cta_whatsapp_click", { source: "b2c_form" });
      setStatus("success");
      // Redirect to WhatsApp
      setTimeout(() => {
        window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer");
      }, 500);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-lime/30 bg-brand-lime/5 p-8 text-center">
        <CheckCircle className="mx-auto mb-4 h-10 w-10 text-brand-lime" />
        <h3 className="text-lg font-semibold text-brand-olive">Pronto!</h3>
        <p className="mt-2 text-sm text-brand-grey">
          Você será redirecionado para o WhatsApp da Rooki.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        id="nome"
        label="Nome"
        placeholder="Seu nome"
        error={errors.nome?.message}
        {...register("nome")}
      />
      <Input
        id="email"
        label="E-mail"
        type="email"
        placeholder="seu@email.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <div className="space-y-3 pt-2">
        <Checkbox
          id="consent_newsletter"
          label="Quero receber alertas e dicas sobre golpes por e-mail"
          {...register("consent_newsletter")}
        />
        <Checkbox
          id="consent_privacy"
          label={
            <span>
              Li e aceito a{" "}
              <Link href="/politica-de-privacidade" className="underline hover:text-brand-olive">
                Política de Privacidade
              </Link>
            </span>
          }
          error={errors.consent_privacy?.message}
          {...register("consent_privacy")}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Ocorreu um erro. Tente novamente.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
        {status === "loading" ? "Enviando..." : "Continuar para o WhatsApp"}
      </Button>
    </form>
  );
}

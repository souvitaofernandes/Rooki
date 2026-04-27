"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { b2bContactSchema, type B2BContactData } from "@/lib/schemas";
import { submitB2BContact } from "@/lib/leads";
import { trackEvent } from "@/lib/analytics";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { Send, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";

export function B2BForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<B2BContactData>({
    resolver: zodResolver(b2bContactSchema),
  });

  const onSubmit = async (data: B2BContactData) => {
    setStatus("loading");
    try {
      await submitB2BContact(data);
      trackEvent("form_submit", { form_type: "b2b_contact" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-accent/30 bg-brand-accent/5 p-8 text-center">
        <CheckCircle className="mx-auto mb-4 h-10 w-10 text-brand-accent" />
        <h3 className="text-lg font-semibold text-white">Mensagem enviada!</h3>
        <p className="mt-2 text-sm text-brand-muted">
          Nosso time entrará em contato em até 48h úteis.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
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
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          id="telefone"
          label="Telefone"
          placeholder="(11) 99999-9999"
          error={errors.telefone?.message}
          {...register("telefone")}
        />
        <Input
          id="empresa"
          label="Empresa / Escola"
          placeholder="Nome da instituição"
          error={errors.empresa?.message}
          {...register("empresa")}
        />
      </div>

      <Input
        id="cargo"
        label="Cargo (opcional)"
        placeholder="Seu cargo"
        {...register("cargo")}
      />

      <Textarea
        id="mensagem"
        label="Mensagem"
        placeholder="Descreva como podemos ajudar..."
        error={errors.mensagem?.message}
        {...register("mensagem")}
      />

      <Checkbox
        id="consent_privacy"
        label={
          <span>
            Li e aceito a{" "}
            <Link href="/politica-de-privacidade" className="underline hover:text-white">
              Política de Privacidade
            </Link>
          </span>
        }
        error={errors.consent_privacy?.message}
        {...register("consent_privacy")}
      />

      {status === "error" && (
        <p className="text-sm text-red-500">
          Ocorreu um erro. Tente novamente.
        </p>
      )}

      <Button
        type="submit"
        variant="secondary"
        size="lg"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Send className="h-5 w-5" />
        )}
        {status === "loading" ? "Enviando..." : "Solicitar contato"}
      </Button>
    </form>
  );
}

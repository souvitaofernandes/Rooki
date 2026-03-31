import { z } from "zod";

export const b2cLeadSchema = z.object({
  nome: z.string().min(2, "Digite seu nome"),
  email: z.string().email("Digite um e-mail válido"),
  consent_newsletter: z.boolean().optional(),
  consent_privacy: z.literal(true, {
    message: "Você precisa aceitar a política de privacidade",
  }),
});

export type B2CLeadData = z.infer<typeof b2cLeadSchema>;

export const b2bContactSchema = z.object({
  nome: z.string().min(2, "Digite seu nome"),
  email: z.string().email("Digite um e-mail válido"),
  telefone: z.string().min(10, "Digite um telefone válido").optional().or(z.literal("")),
  empresa: z.string().min(2, "Digite o nome da empresa ou escola"),
  cargo: z.string().optional().or(z.literal("")),
  mensagem: z.string().min(10, "Descreva brevemente o que precisa"),
  consent_privacy: z.literal(true, {
    message: "Você precisa aceitar a política de privacidade",
  }),
});

export type B2BContactData = z.infer<typeof b2bContactSchema>;

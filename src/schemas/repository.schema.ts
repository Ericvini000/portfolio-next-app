import { z } from "zod";

const repositorySchema = z.object({
  name: z.string(),
  html_url: z.string(),
  description: z.string().nullable(),
  language: z.string().nullable(),
  app_url: z.string().nullish(),
});

const repositorySchemaArray = repositorySchema.array();

export type TRepository = z.infer<typeof repositorySchema>;

export type TRepositoryArray = z.infer<typeof repositorySchemaArray>;

export { repositorySchema, repositorySchemaArray };

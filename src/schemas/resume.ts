import { z } from "zod";

// const mmYyyyDateSchema = z.string().describe(`Date in 'MM/YYYY' format`);
const monthYearSchema = z.object({
  month: z
    .number()
    .describe(
      "In 'M' format, for example: 1 for January, 2 for February, and so on."
    ),
  year: z.number(),
});

const endDateSchema = monthYearSchema
  .nullable()
  .describe("Null if it is a 'present'.");

export const resumeSchema = z.object({
  personalDetails: z.object({
    name: z.string(),
    phoneNumber: z.string(),
    location: z.string(),
  }),
  summary: z.string(),
  experiences: z.array(
    z.object({
      jobTitle: z.string(),
      entity_name: z.string().describe("Company or project name."),
      startDate: monthYearSchema,
      endDate: endDateSchema,
      accomplishments: z.array(z.string()),
    })
  ),
  educations: z.array(
    z.object({
      institution_name: z.string().describe("University or school."),
      degree: z.string(),
      fieldOfStudy: z.string(),
      startDate: monthYearSchema,
      endDate: endDateSchema,
      achievement: z.array(z.string()),
    })
  ),
  skills: z.array(z.string()),
  certifications: z.array(
    z.object({ name: z.string(), issuingOrganization: z.string() })
  ),
});

export type Resume = z.infer<typeof resumeSchema>;

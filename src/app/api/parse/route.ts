import { generateObject } from "ai";
import { z } from "zod";
import { groq } from "@ai-sdk/groq";
import { resumeSchema } from "@/schemas/resume";

const requestSchema = z.object({ resume: z.string() });

export async function POST(request: Request) {
  const payload = requestSchema.parse(await request.json());

  const { object } = await generateObject({
    model: groq("llama-3.1-8b-instant"),
    schema: resumeSchema,
    prompt: `Generate a resume based on below extracted text from PDF file:\n${payload.resume}`,
  });

  console.log(object);

  return Response.json(object);
}

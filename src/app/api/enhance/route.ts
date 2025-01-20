import { generateObject } from "ai";
import { z } from "zod";
import { groq } from "@ai-sdk/groq";
import { resumeSchema } from "@/schemas/resume";

const requestSchema = z.object({ resume: z.string() });

// lanjut consume api ini
// extract text resume dri previewer atau kasih json aja
// kirimm ke api ini

export async function POST(request: Request) {
  // const payload = requestSchema.parse(await request.json());

  const { object } = await generateObject({
    model: groq("llama-3.1-8b-instant"),
    schema: resumeSchema,
    prompt: `Make below resume better:\n${JSON.stringify(
      await request.json()
    )}`,
    // prompt: `Translate below resume to Indonesian languange:\n${JSON.stringify(
    //   await request.json()
    // )}`,
  });

  console.log(object);

  return Response.json(object);
}

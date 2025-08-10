import { NextResponse } from "next/server";
import {pestControlProducts} from "@/utils/products"
import Cerebras from "@cerebras/cerebras_cloud_sdk";

type Message =
  | { role: "system"; content: string }
  | { role: "user"; content: string }
  | { role: "assistant"; content: string };

const cerebras = new Cerebras({
  apiKey: process.env["CEREBRAS_API_KEY"],
  // This is the default and can be omitted
});

type Chunk = {
  choices?: { delta?: { content?: string } }[];
};


export async function POST(req: Request) {
    try {
        const payload = await req.json();
        if (!payload.message) {
          return NextResponse.json(
            { error: "Message is required" },
            { status: 400 }
          );
        }
        const prompt = `
          You have the following products available in your store:
          ${pestControlProducts
            .map(
              (p) =>
                `Product Name: ${p.productName}
          Price: $${p.price}
          Category: ${p.category}
          Rating: ${p.rating} stars
          Description: ${p.description}
          Image URL: ${p.imageUrl}
          `
            )
            .join("\n")}

          A customer asks: "${payload.message}"

          Please recommend the best products based on all the details above, including price, rating, category, and description. Provide a short explanation for your recommendation.
          `;

          const messages: Message[] = [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt },
          ];
          
          const stream = await cerebras.chat.completions.create({
            messages,
            model: "gpt-oss-120b",
            stream: true,
            max_completion_tokens: 65536,
            temperature: 1,
            top_p: 1,
            reasoning_effort: "medium",
          });

          let fullResponse = "";

          for await (const chunk of stream) {
            const data = chunk as Chunk;
            fullResponse += data.choices?.[0]?.delta?.content || "";
          }

        return NextResponse.json({ success: fullResponse }, { status: 200 });
    } catch (error) {
        return NextResponse.json({error: error}, {status: 400})
    }
}


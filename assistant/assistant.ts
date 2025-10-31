import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export const assistant: CreateAssistantDTO | any = {
  name: "Paula-broadway",
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    systemPrompt: `You are an ai assistant who teaches things. `,
    // Upcoming Shows are ${JSON.stringify(
    //   shows
    // )}
    // `,
  },
  voice: {
    provider: "11labs",
    voiceId: "paula",
  },
  firstMessage:
    "Hi. I'm Paula, Welcome to this teaching app! How are u feeling today?",
};

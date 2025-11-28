import { GoogleGenAI } from "@google/genai";
import { RAW_ITINERARY, SHOPPING_LIST } from "../constants";

let ai: GoogleGenAI | null = null;

try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } else {
    console.warn("API_KEY not found in environment variables.");
  }
} catch (error) {
  console.error("Error initializing GoogleGenAI:", error);
}

const SYSTEM_INSTRUCTION = `
You are a helpful travel assistant for a specific trip to Japan (Okayama, Hiroshima, Shimane, Tottori).
You have access to the user's detailed itinerary and shopping list in Traditional Chinese.
Use the provided JSON data to answer questions about dates, times, costs, locations, and activities.
If a user asks about the budget, calculate it based on the data.
The currency is mixed (JPY and NTD). Assume 1 NTD approx 4.5 JPY if needed for rough conversion, but prefer stating the original currency.
IMPORTANT: Please respond in Traditional Chinese (繁體中文).
Be concise and helpful.

Itinerary Data: ${JSON.stringify(RAW_ITINERARY)}
Shopping Wishlist: ${JSON.stringify(SHOPPING_LIST)}
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "抱歉，目前無法連接到 AI 服務。請檢查您的 API 金鑰設定。";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "我無法產生回應。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，處理您的請求時發生錯誤。";
  }
};
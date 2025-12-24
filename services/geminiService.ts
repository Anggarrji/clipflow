
import { GoogleGenAI, Type } from "@google/genai";
import { AiClipSuggestion } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getClipSuggestions = async (videoTitle: string, duration: number): Promise<AiClipSuggestion[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest 3 viral short-form clip ideas for a video titled "${videoTitle}" that is ${duration} seconds long. 
      Identify high-energy hooks and key moments. Focus on TikTok/Shorts style formatting.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              start: { type: Type.STRING, description: "Format: MM:SS" },
              end: { type: Type.STRING, description: "Format: MM:SS" },
              reason: { type: Type.STRING },
              hook: { type: Type.STRING, description: "The visual or verbal hook to start the clip" },
              caption: { type: Type.STRING, description: "Engaging social media caption" }
            },
            required: ["start", "end", "reason", "hook", "caption"]
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};

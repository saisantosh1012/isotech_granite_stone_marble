'use server';
/**
 * @fileOverview An AI flow to visualize a user's dream space.
 *
 * - visualizeDreamSpace - A function that takes an image and description and returns a new image.
 * - VisualizeDreamSpaceInput - The input type for the visualizeDreamSpace function.
 * - VisualizeDreamSpaceOutput - The return type for the visualizeDreamSpace function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VisualizeDreamSpaceInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a user's room, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  description: z.string().describe('A description of how the user wants to transform the space with stone, granite, or tile.'),
});
export type VisualizeDreamSpaceInput = z.infer<typeof VisualizeDreamSpaceInputSchema>;

const VisualizeDreamSpaceOutputSchema = z.object({
  imageDataUri: z.string().optional().describe('The generated image of the transformed space, as a data URI.'),
});
export type VisualizeDreamSpaceOutput = z.infer<typeof VisualizeDreamSpaceOutputSchema>;

export async function visualizeDreamSpace(input: VisualizeDreamSpaceInput): Promise<VisualizeDreamSpaceOutput> {
  return visualizeDreamSpaceFlow(input);
}

const visualizeDreamSpaceFlow = ai.defineFlow(
  {
    name: 'visualizeDreamSpaceFlow',
    inputSchema: VisualizeDreamSpaceInputSchema,
    outputSchema: VisualizeDreamSpaceOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: [
        { media: { url: input.photoDataUri } },
        {
          text: `You are an expert interior designer specializing in stone and tile work for a company called IsoTech.
A user has provided a photo of their space and a description of what they want.
Your task is to generate a new, photorealistic image of their space, transformed according to their description.
Focus on elegantly and realistically integrating high-quality granite, stone, or tile as requested.
The generated image should maintain the original room's layout and perspective but showcase the new materials.

User's Description: "${input.description}"

Generate the transformed image now.`,
        },
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });
    
    return { imageDataUri: media?.url };
  }
);

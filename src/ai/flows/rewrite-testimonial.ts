// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview Rewrites customer testimonials in different styles.
 *
 * - rewriteTestimonial - A function that rewrites a testimonial.
 * - RewriteTestimonialInput - The input type for the rewriteTestimonial function.
 * - RewriteTestimonialOutput - The return type for the rewriteTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteTestimonialInputSchema = z.object({
  testimonial: z.string().describe('The testimonial to rewrite.'),
  style: z
    .string()
    .default('professional')
    .describe(
      'The style to rewrite the testimonial in. Examples: professional, casual, enthusiastic, concise.'
    ),
});
export type RewriteTestimonialInput = z.infer<typeof RewriteTestimonialInputSchema>;

const RewriteTestimonialOutputSchema = z.object({
  rewrittenTestimonial: z.string().describe('The rewritten testimonial.'),
});
export type RewriteTestimonialOutput = z.infer<typeof RewriteTestimonialOutputSchema>;

export async function rewriteTestimonial(input: RewriteTestimonialInput): Promise<RewriteTestimonialOutput> {
  return rewriteTestimonialFlow(input);
}

const rewriteTestimonialPrompt = ai.definePrompt({
  name: 'rewriteTestimonialPrompt',
  input: {schema: RewriteTestimonialInputSchema},
  output: {schema: RewriteTestimonialOutputSchema},
  prompt: `Rewrite the following testimonial in a {{{style}}} style:\n\nOriginal Testimonial: {{{testimonial}}}`,
});

const rewriteTestimonialFlow = ai.defineFlow(
  {
    name: 'rewriteTestimonialFlow',
    inputSchema: RewriteTestimonialInputSchema,
    outputSchema: RewriteTestimonialOutputSchema,
  },
  async input => {
    const {output} = await rewriteTestimonialPrompt(input);
    return output!;
  }
);

// src/app/api/visualize/route.ts
import { NextResponse } from 'next/server';
import { visualizeDreamSpace } from '@/ai/flows/visualize-dream-space';

// Handle CORS preflight requests
export async function OPTIONS() {
  const headers = {
    'Access-Control-Allow-Origin': '*', // Allow any origin
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  return new Response(null, { status: 204, headers });
}

export async function POST(request: Request) {
  const headers = {
    'Access-Control-Allow-Origin': '*', // Allow any origin
  };

  try {
    const body = await request.json();
    const { photoDataUri, description } = body;

    if (!photoDataUri || !description) {
      return NextResponse.json(
        { error: 'Missing photoDataUri or description' },
        { status: 400, headers }
      );
    }

    const result = await visualizeDreamSpace({ photoDataUri, description });

    if (result.imageDataUri) {
      return NextResponse.json(result, { headers });
    } else {
      return NextResponse.json(
        { error: "Failed to generate image. The result may have been blocked by safety filters." },
        { status: 500, headers }
      );
    }
  } catch (error) {
    console.error('API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { error: 'An internal server error occurred.', details: errorMessage },
      { status: 500, headers }
    );
  }
}

'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Upload, Wand2, Loader2, AlertCircle, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from './animated-section';

export default function DreamSpaceVisualizer() {
  const [isPending, startTransition] = useTransition();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [description, setDescription] = useState('A modern kitchen with a luxurious marble countertop and elegant tile backsplash.');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [resultImageUrl, setResultImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) { // 4MB limit
        toast({
          title: 'File too large',
          description: 'Please select an image smaller than 4MB.',
          variant: 'destructive',
        });
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      setResultImageUrl(null);
      setError(null);
    }
  };

  const fileToDataUri = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleVisualize = () => {
    if (!imageFile) {
      toast({
        title: 'No image selected',
        description: 'Please upload an image of your space.',
        variant: 'destructive',
      });
      return;
    }
    setError(null);
    setResultImageUrl(null);

    startTransition(async () => {
      try {
        const photoDataUri = await fileToDataUri(imageFile);
        
        const response = await fetch('/api/visualize', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photoDataUri,
            description,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
           if (response.status === 500 && errorData.error?.includes('API key')) {
             setError('The AI service is missing an API key. Please ask the developer to set the GEMINI_API_KEY environment variable.');
           } else {
             throw new Error(errorData.error || 'An unexpected error occurred.');
           }
           return;
        }

        const result = await response.json();

        if (result.imageDataUri) {
          setResultImageUrl(result.imageDataUri);
        } else {
            setError("Sorry, we couldn't generate a new image. The result might have been blocked by safety filters. Please try a different image or description.");
        }
      } catch (e) {
        console.error(e);
        const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
        setError(`An unexpected error occurred. Please try again. Details: ${errorMessage}`);
      }
    });
  };

  return (
    <section id="visualizer" className="w-full py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
              Dream Space Visualizer
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-muted-foreground md:text-xl">
              Upload a photo of your room, describe your vision, and let our AI bring it to life! See how our materials can transform your space.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="zoom-in">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardContent className="p-6 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="image-upload" className="font-semibold">1. Upload a Photo</Label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 dark:border-gray-100/25">
                    <div className="text-center">
                      {previewUrl ? (
                        <div className="relative">
                          <Image src={previewUrl} alt="Image preview" width={400} height={300} className="mx-auto h-48 w-auto rounded-md object-contain" />
                          <Button variant="link" size="sm" className="mt-2" onClick={() => {
                              setImageFile(null);
                              setPreviewUrl(null);
                          }}>
                              Change image
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="image-upload"
                              className="relative cursor-pointer rounded-md font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary/80"
                            >
                              <span>Upload a file</span>
                              <Input id="image-upload" name="image-upload" type="file" className="sr-only" onChange={handleFileChange} accept="image/png, image/jpeg" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-500">PNG, JPG up to 4MB</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="description" className="font-semibold">2. Describe Your Vision</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="e.g., 'A cozy bathroom with rustic stone walls and a slate tile floor.'"
                    className="mt-2 min-h-[100px]"
                  />
                </div>
                <Button onClick={handleVisualize} disabled={isPending || !imageFile} className="w-full" size="lg">
                  {isPending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Wand2 className="mr-2 h-5 w-5" />}
                  Visualize My Dream Space
                </Button>
              </div>
              
              <div className="flex flex-col items-center justify-center bg-muted rounded-lg p-4 min-h-[300px] lg:min-h-full">
                <div className="space-y-2 text-center w-full">
                  <h3 className="text-xl font-semibold tracking-tight">Your Transformed Space</h3>
                  <p className="text-sm text-muted-foreground">The AI-generated image will appear here.</p>
                </div>
                 {isPending && (
                    <div className="flex flex-col items-center justify-center h-full w-full mt-4">
                      <Sparkles className="h-16 w-16 text-primary animate-pulse" />
                      <p className="mt-4 text-muted-foreground">Generating your vision...</p>
                    </div>
                  )}
                  {error && (
                     <Alert variant="destructive" className="mt-4">
                       <AlertCircle className="h-4 w-4" />
                       <AlertTitle>Generation Failed</AlertTitle>
                       <AlertDescription>{error}</AlertDescription>
                     </Alert>
                   )}
                  {resultImageUrl && (
                    <div className="mt-4 w-full">
                      <Image src={resultImageUrl} alt="AI generated dream space" width={600} height={400} className="rounded-lg shadow-md w-full h-auto object-cover" />
                    </div>
                  )}
                  {!isPending && !resultImageUrl && !error && (
                       <div className="flex flex-col items-center justify-center text-muted-foreground/50 mt-4 h-full">
                          <Sparkles className="h-16 w-16 " />
                       </div>
                  )}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}

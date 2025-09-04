'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import AnimatedSection from './animated-section';

export default function Calculator() {
  const [projectType, setProjectType] = useState('');
  const [materialType, setMaterialType] = useState('');
  const [squareFootage, setSquareFootage] = useState('');
  const [estimate, setEstimate] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateEstimate = () => {
    if (!projectType || !materialType || !squareFootage) {
      toast({
        title: 'Missing Information',
        description: 'Please fill out all fields to get an estimate.',
        variant: 'destructive',
      });
      return;
    }

    // Prices adjusted for Rupee estimates per sq. ft.
    const materialPrices: Record<string, number> = {
      granite: 950, 
      marble: 1500, 
      quartz: 1300, 
      porcelain: 600,
    };
    const complexityFactors: Record<string, number> = {
      kitchen: 1.2, bathroom: 1.0, flooring: 1.1, backsplash: 1.3,
    };

    const basePrice = materialPrices[materialType];
    const complexityFactor = complexityFactors[projectType];
    const calculatedEstimate = basePrice * complexityFactor * Number(squareFootage);
    setEstimate(Math.round(calculatedEstimate));
  };

  return (
    <section id="calculator" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
              Project Estimator
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
              Get a rough estimate for your project
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection animationType="zoom-in">
          <Card className="max-w-2xl mx-auto p-8 shadow-lg">
            <div className="space-y-4">
              <div className="form-group">
                <Label htmlFor="project-type">Project Type</Label>
                <Select onValueChange={setProjectType}>
                  <SelectTrigger id="project-type"><SelectValue placeholder="Select Project Type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kitchen">Kitchen Countertops</SelectItem>
                    <SelectItem value="bathroom">Bathroom Vanity</SelectItem>
                    <SelectItem value="flooring">Flooring</SelectItem>
                    <SelectItem value="backsplash">Backsplash</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="form-group">
                <Label htmlFor="material-type">Material</Label>
                <Select onValueChange={setMaterialType}>
                  <SelectTrigger id="material-type"><SelectValue placeholder="Select Material" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="granite">Granite</SelectItem>
                    <SelectItem value="marble">Marble</SelectItem>
                    <SelectItem value="quartz">Quartz</SelectItem>
                    <SelectItem value="porcelain">Porcelain Tile</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="form-group">
                <Label htmlFor="square-footage">Approximate Square Footage</Label>
                <Input
                  type="number"
                  id="square-footage"
                  placeholder="Enter square footage"
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(e.target.value)}
                />
              </div>
              <Button onClick={calculateEstimate} className="w-full" size="lg">Calculate Estimate</Button>
            </div>
            {estimate !== null && (
              <div className="mt-6 p-4 bg-muted rounded-md text-center">
                <h3 className="text-xl font-bold">Estimated Cost: <span className="text-primary">₹{estimate.toLocaleString('en-IN')}</span></h3>
                <p className="text-sm text-muted-foreground">This is a rough estimate. Contact us for a precise quote.</p>
              </div>
            )}
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}

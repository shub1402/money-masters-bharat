import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, User, Mail, Calendar } from 'lucide-react';

const TrialSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    childName: '',
    childAge: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store trial data in localStorage for demo purposes
    localStorage.setItem('trialUser', JSON.stringify(formData));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 text-white hover:bg-white/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-card border-white/20">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">₹</span>
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Start Your Free Trial</CardTitle>
              <Badge variant="secondary" className="mt-2">
                7 Days Free • No Card Required
              </Badge>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="parentName" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Parent Name
                </Label>
                <Input
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@gmail.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="childName">Child's Name</Label>
                <Input
                  id="childName"
                  name="childName"
                  value={formData.childName}
                  onChange={handleInputChange}
                  placeholder="Your child's name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="childAge" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Child's Age
                </Label>
                <Input
                  id="childAge"
                  name="childAge"
                  type="number"
                  min="6"
                  max="18"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  placeholder="10"
                  required
                />
              </div>

              <Button type="submit" variant="hero" className="w-full">
                Start Learning Journey
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy.
                Cancel anytime during your free trial.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrialSignup;
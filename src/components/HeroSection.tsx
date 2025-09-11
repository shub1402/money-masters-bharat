import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, Star, Users, Award, TrendingUp } from 'lucide-react';
import heroFamily from '@/assets/hero-family.jpg';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-accent/10 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                Trusted by 25,000+ Indian families
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                सीखिए पैसे की{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  समझ
                </span>
                {" "}मज़ेदार तरीके से!
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                30 interactive lessons + money management game for kids aged 10-14. 
                Learn Indian banking, UPI, SIP, and smart money habits.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">25K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Schools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">4.9★</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={() => navigate('/trial-signup')}>
                Start 7-Day Free Trial
                <span className="text-sm opacity-90">(No card needed)</span>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Pricing Preview */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Starting at ₹299/month</span>
              <span>•</span>
              <span>60-day money-back guarantee</span>
              <span>•</span>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-hero">
              <img
                src={heroFamily}
                alt="Indian family learning financial literacy together"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay Elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating Achievement */}
              <div className="absolute top-6 right-6 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium shadow-card">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  ₹50,000 saved!
                </div>
              </div>

              {/* Floating Lesson Complete */}
              <div className="absolute bottom-6 left-6 bg-card text-card-foreground px-4 py-3 rounded-2xl shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-primary-foreground fill-current" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Lesson Complete!</div>
                    <div className="text-xs text-muted-foreground">UPI & Digital Payments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Smartphone, Shield, Zap } from "lucide-react";

const features = [
  "30 Interactive Financial Lessons",
  "Money Management Game",
  "Parent Dashboard & Reports",
  "Progress Tracking & Badges",
  "Indian Banking & UPI Content",
  "Mobile App & Offline Access",
  "Multiple Child Accounts",
  "60-Day Money Back Guarantee"
];

const paymentMethods = [
  { name: "UPI", icon: "🔄" },
  { name: "Cards", icon: "💳" },
  { name: "Net Banking", icon: "🏦" },
  { name: "PhonePe", icon: "📱" },
  { name: "GPay", icon: "💰" }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Simple,{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Affordable
            </span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Start your child's financial education journey today. 
            Less than the cost of one movie ticket per month.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Monthly Plan */}
          <Card className="relative border-2 border-border hover:shadow-card transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Monthly Plan</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-4xl font-bold text-primary">₹299</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfect for trying out</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {features.slice(0, 6).map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" className="w-full" size="lg">
                Start Monthly Plan
              </Button>
            </CardContent>
          </Card>

          {/* Annual Plan */}
          <Card className="relative border-2 border-primary bg-gradient-card hover:shadow-hero transition-all duration-300">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
              <Zap className="w-3 h-3 mr-1" />
              Most Popular
            </Badge>
            <CardHeader className="text-center pb-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Annual Plan</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg text-muted-foreground line-through">₹3,588</span>
                  <span className="text-4xl font-bold text-primary">₹2,999</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <div className="inline-flex items-center gap-1 bg-success/20 text-success px-3 py-1 rounded-full text-xs font-medium">
                  Save ₹589 (16% off)
                </div>
                <p className="text-sm text-muted-foreground">Just ₹250 per month</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" className="w-full" size="lg">
                Start Annual Plan
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-success" />
            <span className="font-medium text-foreground">Secure Indian Payment Methods</span>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-6 p-4 bg-muted/50 rounded-2xl">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="text-lg">{method.icon}</span>
                <span className="text-muted-foreground">{method.name}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-success" />
              7-day free trial • No card required
            </p>
            <p className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-success" />
              60-day money-back guarantee
            </p>
            <p className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-success" />
              Cancel anytime • No hidden fees
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8 rounded-3xl border">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Still Not Sure? Try It Free!
            </h3>
            <p className="text-muted-foreground mb-6">
              Start with our 7-day free trial. No commitment, no card required.
            </p>
            <Button variant="cta" size="lg" className="text-lg px-8">
              Start Free Trial Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
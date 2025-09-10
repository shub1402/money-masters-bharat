import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Gamepad2, 
  TrendingUp, 
  Shield, 
  Users, 
  Smartphone,
  Award,
  Target,
  Globe
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "30 Interactive Lessons",
    description: "From basic rupee understanding to SIP investments, UPI payments, and EMI basics",
    badge: "Self-paced",
    color: "text-primary"
  },
  {
    icon: Gamepad2,
    title: "Money Management Game",
    description: "Earn virtual ₹, make decisions, see consequences. Learn by doing, not just reading",
    badge: "Gamified",
    color: "text-secondary"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Learning",
    description: "Works perfectly on phones, tablets. Learn anywhere with offline lesson caching",
    badge: "PWA Ready",
    color: "text-accent"
  },
  {
    icon: Users,
    title: "Parent Dashboard",
    description: "Track multiple children's progress, view achievements, manage subscriptions easily",
    badge: "Family-friendly",
    color: "text-success"
  },
  {
    icon: Shield,
    title: "Indian Banking Focus",
    description: "UPI, Fixed Deposits, SIP, EMI - all explained with Indian examples and context",
    badge: "100% Local",
    color: "text-warning"
  },
  {
    icon: Award,
    title: "Progress Tracking",
    description: "Badges, leaderboards, certificates. Keep kids motivated throughout their journey",
    badge: "Achievements",
    color: "text-primary"
  }
];

const stats = [
  { number: "25K+", label: "Students", subtext: "across India" },
  { number: "500+", label: "Schools", subtext: "using our curriculum" },
  { number: "4.9★", label: "Rating", subtext: "from parents" },
  { number: "₹50L+", label: "Virtual Money", subtext: "managed by students" }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <Globe className="w-3 h-3 mr-1" />
            Made for India
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Financial Education{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Made Easy
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything your child needs to become money-smart in today's digital India. 
            From UPI to SIP, we cover it all with interactive lessons and real-world practice.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-2xl bg-background ${feature.color} shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero text-primary-foreground p-8 rounded-3xl shadow-hero">
            <h3 className="text-2xl font-bold mb-2">Ready to Start Learning?</h3>
            <p className="text-primary-foreground/90 mb-6">
              Join thousands of Indian families building financial literacy together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-background/20 backdrop-blur-sm rounded-2xl p-4 text-primary-foreground">
                <div className="flex items-center gap-2 mb-1">
                  <Target className="w-4 h-4" />
                  <span className="font-medium">7-Day Free Trial</span>
                </div>
                <div className="text-sm opacity-90">No card required • Cancel anytime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
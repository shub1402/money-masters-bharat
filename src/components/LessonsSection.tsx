import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Clock, 
  Star, 
  TrendingUp,
  Smartphone,
  PiggyBank,
  CreditCard,
  Building2,
  Trophy,
  Target
} from "lucide-react";

const lessonCategories = [
  {
    title: "Basic Money Concepts",
    icon: PiggyBank,
    color: "text-primary",
    bgColor: "bg-primary/10",
    lessons: [
      "Understanding INR: From Paisa to Rupees",
      "Needs vs Wants: Making Smart Choices", 
      "The Power of Saving: Your First Piggy Bank",
      "Pocket Money Management 101"
    ],
    duration: "4 lessons • 2 hours"
  },
  {
    title: "Digital India Banking",
    icon: Smartphone,
    color: "text-secondary", 
    bgColor: "bg-secondary/10",
    lessons: [
      "What is UPI? Digital Payments Made Easy",
      "Banking Basics: Savings vs Current Account",
      "ATM Cards and Online Banking Safety",
      "Digital Wallets: PhonePe, GPay & More"
    ],
    duration: "4 lessons • 2.5 hours"
  },
  {
    title: "Smart Investing",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10", 
    lessons: [
      "What is SIP? The Indian Way to Invest",
      "Fixed Deposits vs Recurring Deposits",
      "Understanding Mutual Funds Basics",
      "Power of Compound Interest"
    ],
    duration: "4 lessons • 3 hours"
  },
  {
    title: "Real World Skills",
    icon: Building2,
    color: "text-success",
    bgColor: "bg-success/10",
    lessons: [
      "EMI and Loan Basics Explained", 
      "Insurance: Health, Life & Property",
      "Starting Your First Business",
      "Career Planning & Salary Expectations"
    ],
    duration: "4 lessons • 3.5 hours"
  }
];

const sampleLesson = {
  title: "What is UPI? Digital Payments Made Easy",
  description: "Learn how UPI revolutionized Indian payments, from QR codes to instant transfers",
  duration: "25 mins",
  activities: 6,
  reward: "₹500"
};

const LessonsSection = () => {
  return (
    <section id="lessons" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <BookOpen className="w-3 h-3 mr-1" />
            Curriculum Overview
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            30 Lessons Designed for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Indian Kids
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From basic rupee concepts to advanced SIP investing. 
            Each lesson includes interactive activities and real-world Indian examples.
          </p>
        </div>

        {/* Lesson Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {lessonCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl ${category.bgColor}`}>
                        <Icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {category.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {category.duration}
                        </div>
                      </div>
                    </div>

                    {/* Lessons List */}
                    <div className="space-y-2">
                      {category.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium text-muted-foreground">
                            {lessonIndex + 1}
                          </div>
                          <span className="text-sm text-foreground">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Sample Lesson Preview */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Sample Lesson Preview
            </h3>
            <p className="text-muted-foreground">
              See how our interactive lessons work with real Indian examples
            </p>
          </div>

          <Card className="bg-gradient-card border-2 border-primary/20 shadow-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Lesson Info */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Lesson 5</Badge>
                      <Badge variant="outline">Digital Payments</Badge>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-foreground">
                      {sampleLesson.title}
                    </h4>
                    
                    <p className="text-muted-foreground">
                      {sampleLesson.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                      <div className="text-sm font-medium">{sampleLesson.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <Target className="w-5 h-5 text-accent mx-auto mb-1" />
                      <div className="text-sm font-medium">{sampleLesson.activities}</div>
                      <div className="text-xs text-muted-foreground">Activities</div>
                    </div>
                    
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <Trophy className="w-5 h-5 text-success mx-auto mb-1" />
                      <div className="text-sm font-medium">{sampleLesson.reward}</div>
                      <div className="text-xs text-muted-foreground">Reward</div>
                    </div>
                  </div>

                  <Button variant="hero" className="w-full md:w-auto">
                    <Star className="w-4 h-4" />
                    Try This Lesson Free
                  </Button>
                </div>

                {/* Lesson Preview */}
                <div className="relative">
                  <div className="bg-background rounded-2xl border-2 border-border p-6 shadow-card">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h5 className="font-semibold">Interactive Question</h5>
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">2/6</span>
                      </div>
                      
                      <div className="text-sm text-foreground">
                        Ravi wants to send ₹500 to his friend using UPI. Which app can he use?
                      </div>
                      
                      <div className="space-y-2">
                        <button className="w-full p-3 text-left bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors text-sm">
                          📱 Google Pay (GPay)
                        </button>
                        <button className="w-full p-3 text-left bg-primary/10 border border-primary/20 rounded-lg text-sm">
                          🔄 PhonePe
                        </button>
                        <button className="w-full p-3 text-left bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors text-sm">
                          💰 Paytm
                        </button>
                        <button className="w-full p-3 text-left bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors text-sm">
                          ✅ All of the above
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
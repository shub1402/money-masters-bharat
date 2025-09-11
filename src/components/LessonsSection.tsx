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
import InteractiveLesson from "./InteractiveLesson";

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

        {/* Interactive Sample Lesson */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Try Our Interactive Lesson
            </h3>
            <p className="text-muted-foreground">
              Experience how our lessons work with this fully interactive UPI lesson
            </p>
          </div>

          <InteractiveLesson />
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  Star,
  ArrowRight,
  User,
  LogOut,
  PiggyBank,
  Smartphone,
  TrendingUp,
  Building2
} from 'lucide-react';

interface TrialUser {
  parentName: string;
  email: string;
  childName: string;
  childAge: string;
}

const lessonModules = [
  {
    id: 1,
    title: "Understanding Money",
    description: "Learn what money is and why it exists",
    duration: "20 mins",
    icon: PiggyBank,
    color: "text-primary",
    bgColor: "bg-primary/10",
    completed: false,
    available: true
  },
  {
    id: 2,
    title: "Digital Payments (UPI)",
    description: "Interactive lesson on UPI and digital wallets",
    duration: "25 mins", 
    icon: Smartphone,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    completed: false,
    available: true,
    interactive: true
  },
  {
    id: 3,
    title: "Needs vs Wants",
    description: "Learn to differentiate necessities from desires",
    duration: "18 mins",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10",
    completed: false,
    available: false
  },
  {
    id: 4,
    title: "Saving Money",
    description: "Why and how to save money effectively",
    duration: "22 mins",
    icon: Building2,
    color: "text-success",
    bgColor: "bg-success/10",
    completed: false,
    available: false
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [trialUser, setTrialUser] = useState<TrialUser | null>(null);
  const [completedLessons, setCompletedLessons] = useState(0);

  useEffect(() => {
    const userData = localStorage.getItem('trialUser');
    if (!userData) {
      navigate('/trial-signup');
      return;
    }
    setTrialUser(JSON.parse(userData));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('trialUser');
    navigate('/');
  };

  const handleStartLesson = (lessonId: number) => {
    if (lessonId === 2) {
      // Navigate to interactive UPI lesson
      navigate('/lesson/upi-digital-payments');
    } else {
      // For other lessons, show coming soon
      alert('This lesson will be available soon!');
    }
  };

  if (!trialUser) {
    return <div>Loading...</div>;
  }

  const progressPercentage = (completedLessons / lessonModules.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">₹</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MoneyWise India</h1>
              <p className="text-sm text-muted-foreground">Learning Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium">{trialUser.childName}</p>
              <Badge variant="secondary">Free Trial</Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 space-y-6">
        {/* Welcome Section */}
        <Card className="bg-gradient-card border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Welcome back, {trialUser.childName}! 🎉
                </h2>
                <p className="text-muted-foreground mb-4">
                  Ready to continue your financial literacy journey?
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    <span className="font-medium">{completedLessons} lessons completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="font-medium">6 days left in trial</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">₹{completedLessons * 500}</div>
                <p className="text-sm text-muted-foreground">Virtual earnings</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Learning Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{completedLessons}</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">{lessonModules.filter(l => l.available).length - completedLessons}</div>
                  <div className="text-xs text-muted-foreground">Available</div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-muted-foreground">{lessonModules.filter(l => !l.available).length}</div>
                  <div className="text-xs text-muted-foreground">Locked</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Lessons */}
        <Card>
          <CardHeader>
            <CardTitle>Available Lessons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {lessonModules.map((lesson) => {
                const Icon = lesson.icon;
                return (
                  <Card key={lesson.id} className={`transition-all hover:shadow-md ${
                    lesson.available ? 'opacity-100' : 'opacity-50'
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${lesson.bgColor}`}>
                            <Icon className={`w-6 h-6 ${lesson.color}`} />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold text-foreground">{lesson.title}</h3>
                              {lesson.interactive && (
                                <Badge variant="secondary">Interactive</Badge>
                              )}
                              {lesson.completed && (
                                <Badge variant="default">
                                  <Star className="w-3 h-3 mr-1" />
                                  Completed
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{lesson.description}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {lesson.duration}
                            </div>
                          </div>
                        </div>
                        
                        <Button
                          variant={lesson.available ? "hero" : "ghost"}
                          disabled={!lesson.available}
                          onClick={() => handleStartLesson(lesson.id)}
                          className="flex items-center gap-2"
                        >
                          {lesson.completed ? 'Review' : 'Start'}
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  Clock, 
  Target, 
  Trophy, 
  CheckCircle, 
  XCircle,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

interface Activity {
  type: 'info' | 'quiz';
  content?: string;
  question?: string;
  options?: string[];
  answer?: string;
}

interface LessonData {
  lessonNumber: number;
  category: string;
  title: string;
  description: string;
  durationMinutes: number;
  activitiesCount: number;
  reward: number;
  activities: Activity[];
}

const sampleLessonData: LessonData = {
  lessonNumber: 5,
  category: "Digital Payments",
  title: "What is UPI? Digital Payments Made Easy",
  description: "Learn how UPI revolutionized Indian payments, from QR codes to instant transfers.",
  durationMinutes: 25,
  activitiesCount: 6,
  reward: 500,
  activities: [
    {
      type: "info",
      content: "UPI (Unified Payments Interface) allows instant money transfers using your smartphone. It was launched by NPCI in 2016 and has revolutionized digital payments in India."
    },
    {
      type: "quiz",
      question: "Ravi wants to send ₹500 to his friend using UPI. Which app can he use?",
      options: ["📱 Google Pay (GPay)", "🔄 PhonePe", "💰 Paytm", "✅ All of the above"],
      answer: "✅ All of the above"
    },
    {
      type: "quiz",
      question: "What does UPI stand for?",
      options: ["Unified Payments Interface", "Universal Pay India", "Unique Payment Identifier", "United Payment Initiative"],
      answer: "Unified Payments Interface"
    },
    {
      type: "info",
      content: "With UPI, you don't need to remember bank account details. Just use a UPI ID (like yourname@paytm) or scan a QR code to make payments instantly, 24/7."
    },
    {
      type: "quiz",
      question: "Which of these is required to make a UPI payment?",
      options: ["UPI PIN", "Aadhaar Card", "PAN Card", "Passport"],
      answer: "UPI PIN"
    },
    {
      type: "quiz",
      question: "Which organization created and regulates UPI in India?",
      options: ["NPCI (National Payments Corporation)", "RBI (Reserve Bank of India)", "SEBI (Securities Board)", "Government of India"],
      answer: "NPCI (National Payments Corporation)"
    }
  ]
};

interface InteractiveLessonProps {
  lessonData?: LessonData;
  onComplete?: () => void;
}

const InteractiveLesson: React.FC<InteractiveLessonProps> = ({ 
  lessonData = sampleLessonData,
  onComplete 
}) => {
  const [currentActivity, setCurrentActivity] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [completedActivities, setCompletedActivities] = useState<boolean[]>(
    new Array(lessonData.activities.length).fill(false)
  );

  const currentActivityData = lessonData.activities[currentActivity];
  const isQuiz = currentActivityData.type === 'quiz';
  const totalQuizzes = lessonData.activities.filter(a => a.type === 'quiz').length;
  const isLastActivity = currentActivity === lessonData.activities.length - 1;

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
    setShowResult(false);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;
    
    const correct = selectedAnswer === currentActivityData.answer;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    // Mark activity as completed
    const newCompleted = [...completedActivities];
    newCompleted[currentActivity] = true;
    setCompletedActivities(newCompleted);
  };

  const handleNext = () => {
    if (isLastActivity) {
      onComplete?.();
      return;
    }
    
    setCurrentActivity(prev => prev + 1);
    setSelectedAnswer('');
    setShowResult(false);
    setIsCorrect(false);
  };

  const handlePrevious = () => {
    if (currentActivity > 0) {
      setCurrentActivity(prev => prev - 1);
      setSelectedAnswer('');
      setShowResult(false);
      setIsCorrect(false);
    }
  };

  const progressPercentage = ((currentActivity + 1) / lessonData.activities.length) * 100;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Lesson Header */}
      <Card className="bg-gradient-card border-2 border-primary/20 shadow-card">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Lesson {lessonData.lessonNumber}</Badge>
                <Badge variant="outline">{lessonData.category}</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                {currentActivity + 1}/{lessonData.activities.length}
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-foreground">
              {lessonData.title}
            </h1>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-sm font-medium">{lessonData.durationMinutes} mins</div>
                <div className="text-xs text-muted-foreground">Duration</div>
              </div>
              
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Target className="w-5 h-5 text-accent mx-auto mb-1" />
                <div className="text-sm font-medium">{score}/{totalQuizzes}</div>
                <div className="text-xs text-muted-foreground">Score</div>
              </div>
              
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <Trophy className="w-5 h-5 text-success mx-auto mb-1" />
                <div className="text-sm font-medium">₹{lessonData.reward}</div>
                <div className="text-xs text-muted-foreground">Reward</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                  role="progressbar"
                  aria-valuenow={progressPercentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Lesson progress: ${Math.round(progressPercentage)}%`}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity Content */}
      <Card className="shadow-card">
        <CardContent className="p-8">
          {isQuiz ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  Interactive Question
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    Quiz {currentActivity === 1 ? 1 : currentActivity === 2 ? 2 : currentActivity === 4 ? 3 : 4}/4
                  </span>
                </h2>
                
                <p className="text-foreground text-base leading-relaxed">
                  {currentActivityData.question}
                </p>
              </div>
              
              <div className="space-y-4">
                <RadioGroup 
                  value={selectedAnswer} 
                  onValueChange={handleAnswerSelect}
                  className="space-y-3"
                  aria-label="Answer options"
                >
                  {currentActivityData.options?.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <RadioGroupItem 
                        value={option} 
                        id={`option-${index}`}
                        disabled={showResult}
                        className="mt-0.5"
                      />
                      <Label 
                        htmlFor={`option-${index}`}
                        className={`flex-1 p-3 rounded-lg border cursor-pointer transition-all ${
                          selectedAnswer === option 
                            ? 'bg-primary/10 border-primary/20 text-foreground' 
                            : 'bg-muted/30 border-border hover:bg-muted/50'
                        } ${showResult && option === currentActivityData.answer 
                            ? 'bg-success/10 border-success/20' 
                            : ''
                        } ${showResult && selectedAnswer === option && option !== currentActivityData.answer 
                            ? 'bg-destructive/10 border-destructive/20' 
                            : ''
                        }`}
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {showResult && (
                  <div className={`p-4 rounded-lg border-2 ${
                    isCorrect 
                      ? 'bg-success/10 border-success/20 text-success-foreground' 
                      : 'bg-destructive/10 border-destructive/20 text-destructive-foreground'
                  }`} role="alert" aria-live="polite">
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive" />
                      )}
                      <span className="font-medium">
                        {isCorrect ? 'Correct!' : 'Incorrect'}
                      </span>
                    </div>
                    {!isCorrect && (
                      <p className="mt-2 text-sm">
                        The correct answer is: <strong>{currentActivityData.answer}</strong>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">
                Key Learning
              </h2>
              <div className="bg-gradient-subtle p-6 rounded-lg border-l-4 border-primary">
                <p className="text-foreground text-base leading-relaxed">
                  {currentActivityData.content}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentActivity === 0}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </Button>

        <div className="flex gap-2">
          {isQuiz && !showResult ? (
            <Button
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer}
              variant="hero"
              className="flex items-center gap-2"
            >
              Submit Answer
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              variant="hero"
              className="flex items-center gap-2"
            >
              {isLastActivity ? 'Complete Lesson' : 'Next'}
              {!isLastActivity && <ArrowRight className="w-4 h-4" />}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveLesson;
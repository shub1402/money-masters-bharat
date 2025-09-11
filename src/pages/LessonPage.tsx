import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import InteractiveLesson from '@/components/InteractiveLesson';

const LessonPage = () => {
  const navigate = useNavigate();
  const { lessonId } = useParams();

  const handleLessonComplete = () => {
    // For demo purposes, just navigate back to dashboard
    alert('🎉 Lesson completed! You earned ₹500 virtual coins.');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">₹</span>
            </div>
            <span className="font-semibold">MoneyWise India</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 py-8">
        <InteractiveLesson onComplete={handleLessonComplete} />
      </div>
    </div>
  );
};

export default LessonPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Globe, Menu } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">₹</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">MoneyWise India</h1>
              <p className="text-xs text-muted-foreground">पैसे की समझ</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#lessons" className="text-foreground hover:text-primary transition-colors">
              Lessons
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Globe className="w-3 h-3" />
              <span>हिंदी</span>
            </div>
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Login
            </Button>
            <Button variant="hero" size="sm" onClick={() => navigate('/trial-signup')}>
              Free Trial
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Globe, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">₹</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">MoneyWise India</h3>
                <p className="text-sm opacity-75">पैसे की समझ</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              Empowering the next generation of Indians with financial literacy. 
              From UPI to SIP, we make money education fun and engaging.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4" />
              <span className="opacity-75">Made in India, for India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#features" className="block opacity-75 hover:opacity-100 transition-opacity">
                Features
              </a>
              <a href="#lessons" className="block opacity-75 hover:opacity-100 transition-opacity">
                Curriculum
              </a>
              <a href="#pricing" className="block opacity-75 hover:opacity-100 transition-opacity">
                Pricing
              </a>
              <a href="#about" className="block opacity-75 hover:opacity-100 transition-opacity">
                About Us
              </a>
              <a href="/login" className="block opacity-75 hover:opacity-100 transition-opacity">
                Parent Login
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2 text-sm">
              <a href="/help" className="block opacity-75 hover:opacity-100 transition-opacity">
                Help Center
              </a>
              <a href="/contact" className="block opacity-75 hover:opacity-100 transition-opacity">
                Contact Us
              </a>
              <a href="/privacy" className="block opacity-75 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="/terms" className="block opacity-75 hover:opacity-100 transition-opacity">
                Terms of Service
              </a>
              <a href="/schools" className="block opacity-75 hover:opacity-100 transition-opacity">
                For Schools
              </a>
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get Started Today</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm opacity-75">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-75">
                <Mail className="w-4 h-4" />
                <span>hello@moneywiseindia.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-75">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
            
            <div className="pt-2">
              <Button 
                variant="secondary" 
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm opacity-75">
            © 2024 MoneyWise India. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-sm opacity-75">
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-current text-red-400" />
              <span>for Indian families</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs opacity-75">Secured payments by</div>
            <div className="flex items-center gap-2">
              <span className="text-lg">🔄</span>
              <span className="text-xs">Razorpay</span>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-background/20">
          <div className="flex items-center gap-2 text-xs opacity-75">
            <span>🛡️</span>
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-xs opacity-75">
            <span>🇮🇳</span>
            <span>Made in India</span>
          </div>
          <div className="flex items-center gap-2 text-xs opacity-75">
            <span>✅</span>
            <span>CBSE Recommended</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "@/components/ui/button";
import { Play, Book, Trophy, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="hero-gradient py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4 smooth-entrance">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Achieve Your
                <span className="gradient-text"> Dream IELTS</span>
                Score
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Master all four IELTS skills with our expert-designed courses, AI-powered practice tests, and personalized feedback. Join thousands who've achieved their target scores.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 smooth-entrance" style={{animationDelay: "0.3s"}}>
              <Button 
                size="lg"
                className="button-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg border-0"
                data-testid="button-start-trial"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="button-secondary text-primary px-8 py-4 rounded-xl font-semibold text-lg"
                data-testid="button-watch-demo"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 smooth-entrance" style={{animationDelay: "0.6s"}}>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary" data-testid="text-students-count">15K+</div>
                <div className="text-sm text-muted-foreground">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary" data-testid="text-average-score">8.5</div>
                <div className="text-sm text-muted-foreground">Average Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary" data-testid="text-success-rate">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            {/* Dynamic floating elements around the main image */}
            <div className="absolute -top-4 -left-4 bg-primary/10 p-4 rounded-full floating-animation">
              <Book className="text-primary text-2xl" />
            </div>
            <div className="absolute -top-6 -right-6 bg-secondary/20 p-3 rounded-full floating-animation" style={{ animationDelay: "2s" }}>
              <Trophy className="text-primary text-xl" />
            </div>
            <div className="absolute -bottom-4 -left-6 bg-accent/20 p-3 rounded-full floating-animation" style={{ animationDelay: "4s" }}>
              <Star className="text-primary text-xl" />
            </div>
            
            {/* Professional student studying with books and laptop */}
            <img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Student studying for IELTS exam with books and laptop" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

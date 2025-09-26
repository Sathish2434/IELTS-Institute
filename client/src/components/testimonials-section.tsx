import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      score: "8.5",
      purpose: "Canada Immigration",
      quote: "The AI-powered practice tests were incredibly accurate. I scored exactly what the system predicted - 8.5 overall! The speaking practice sessions really boosted my confidence.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c87c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Ahmed Patel",
      score: "7.5",
      purpose: "UK University",
      quote: "Expert guidance made all the difference. My instructor helped me improve from 6.0 to 7.5 in just 6 weeks. The personalized feedback was incredibly detailed and helpful.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Maria Rodriguez",
      score: "8.0",
      purpose: "Australia PR",
      quote: "The mock tests felt exactly like the real exam. I was so well-prepared that I actually felt confident on test day. Achieved my target score of 8.0 on the first attempt!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
    }
  ];

  const trustIndicators = [
    { value: "4.9/5", label: "Student Rating" },
    { value: "15,000+", label: "Success Stories" },
    { value: "50+", label: "Countries" },
    { value: "8 Years", label: "Experience" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 smooth-entrance">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Student <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our students who achieved their dream IELTS scores and transformed their futures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="testimonial-card p-8 rounded-xl smooth-entrance"
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-lg flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} - IELTS student testimonial`}
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid={`img-testimonial-${index}`}
                />
                <div>
                  <div className="font-semibold text-foreground" data-testid={`text-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Score: {testimonial.score} | {testimonial.purpose}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center smooth-entrance" style={{animationDelay: "0.6s"}}>
          <Card className="testimonial-card rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="space-y-2" data-testid={`indicator-${index}`}>
                  <div className="text-3xl font-bold gradient-text">{indicator.value}</div>
                  <div className="text-sm text-muted-foreground">{indicator.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Mic, ClipboardCheck, Bot, GraduationCap, Clock, Award, Headphones } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Mic className="text-primary text-2xl" />,
      title: "Speaking Practice",
      description: "Interactive speaking sessions with native English speakers and AI-powered pronunciation analysis."
    },
    {
      icon: <ClipboardCheck className="text-primary text-2xl" />,
      title: "Mock Tests",
      description: "Full-length practice tests that simulate real IELTS conditions with detailed performance analytics."
    },
    {
      icon: <Bot className="text-primary text-2xl" />,
      title: "AI Band Score",
      description: "Advanced AI technology provides instant band score predictions and personalized improvement suggestions."
    },
    {
      icon: <GraduationCap className="text-primary text-2xl" />,
      title: "Expert Guidance",
      description: "Certified IELTS instructors provide one-on-one coaching and strategic exam preparation guidance."
    }
  ];

  const additionalFeatures = [
    {
      icon: <Clock className="text-primary" />,
      title: "Flexible Scheduling",
      description: "Study at your own pace with 24/7 access to all course materials"
    },
    {
      icon: <Award className="text-primary" />,
      title: "Score Guarantee",
      description: "Achieve your target score or get additional coaching free"
    },
    {
      icon: <Headphones className="text-primary" />,
      title: "24/7 Support",
      description: "Get help whenever you need it from our dedicated support team"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 smooth-entrance">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why Choose <span className="gradient-text">Excellence IELTS</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach combines expert instruction, cutting-edge technology, and personalized feedback to ensure your IELTS success.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="feature-card p-8 rounded-xl cursor-pointer smooth-entrance"
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
              data-testid={`card-feature-${index}`}
            >
              <div className="bg-gradient-to-br from-primary/20 to-secondary/30 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-6">
                <span className="gradient-text font-semibold hover:underline cursor-pointer transition-all duration-300">Learn More →</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="text-center space-y-4" data-testid={`additional-feature-${index}`}>
              <div className="bg-secondary/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

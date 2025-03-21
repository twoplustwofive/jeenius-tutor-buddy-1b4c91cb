
import React, { useEffect, useRef } from "react";
import FeatureCard from "./FeatureCard";
import { Brain, BookOpen, Target, BarChart3, MessageCircle, Zap } from "lucide-react";

const FeatureSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll(".feature-card");
            cards?.forEach((card) => {
              card.classList.add("animate-fade-in");
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Our intelligent system adapts to your learning style and pace, providing personalized content recommendations.",
      iconClassName: "bg-primary-indigo/10 text-primary-indigo"
    },
    {
      icon: BookOpen,
      title: "Interactive Study Materials",
      description: "Engage with dynamic content including concept maps, visual simulations, and interactive problem sets.",
      iconClassName: "bg-primary-teal/10 text-primary-teal"
    },
    {
      icon: Target,
      title: "Intelligent Test Generation",
      description: "Practice with tests that automatically adapt to your skill level and focus on areas needing improvement.",
      iconClassName: "bg-secondary-amber/10 text-secondary-amber"
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description: "Track your progress with detailed insights on performance, study patterns, and predicted outcomes.",
      iconClassName: "bg-secondary-coral/10 text-secondary-coral"
    },
    {
      icon: MessageCircle,
      title: "24/7 Doubt Resolution",
      description: "Get instant help with difficult concepts from our AI tutor, with step-by-step explanations.",
      iconClassName: "bg-primary-indigo/10 text-primary-indigo"
    },
    {
      icon: Zap,
      title: "Efficient Learning Paths",
      description: "Follow optimized study routes that prioritize concepts based on your goals and timeline.",
      iconClassName: "bg-primary-teal/10 text-primary-teal"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-primary-teal/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-primary-indigo/5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Powerful Features for JEE Success</h2>
          <p className="subtitle max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with proven learning methodologies to maximize your preparation efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconClassName={feature.iconClassName}
              className="feature-card"
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

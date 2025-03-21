
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/ui/GlassCard";
import { Link } from "react-router-dom";
import { Brain, Cpu, Rocket, BookOpen, Code, Zap, Calendar, BarChart3 } from "lucide-react";

const Features = () => {
  useEffect(() => {
    // Animate cards on page load
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-fade-in');
      }, index * 150);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Powerful Features for <span className="text-primary-indigo">JEE Success</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Discover how Jeenius combines cutting-edge AI technology with expert pedagogy to create the perfect JEE preparation companion.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <GlassCard className="feature-card opacity-0 h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary-indigo/10 text-primary-indigo">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Learning</h3>
              <p className="text-muted-foreground mb-4">
                Personalized study plans and recommendations based on your strengths, weaknesses, and learning style.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Adaptive question difficulty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Smart concept connections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Performance prediction</span>
                </li>
              </ul>
            </GlassCard>

            {/* Feature 2 */}
            <GlassCard className="feature-card opacity-0 h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary-indigo/10 text-primary-indigo">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Testing</h3>
              <p className="text-muted-foreground mb-4">
                Create customized tests that adapt in real-time to your performance and focus on areas that need improvement.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Real-time difficulty adjustment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Custom test generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Previous year pattern analysis</span>
                </li>
              </ul>
            </GlassCard>

            {/* Feature 3 */}
            <GlassCard className="feature-card opacity-0 h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary-indigo/10 text-primary-indigo">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Doubt Solving</h3>
              <p className="text-muted-foreground mb-4">
                Get instant answers to your questions with step-by-step explanations, anytime, anywhere.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Detailed explanations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Multiple solution approaches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Concept linking for deeper understanding</span>
                </li>
              </ul>
            </GlassCard>

            {/* Feature 4 */}
            <GlassCard className="feature-card opacity-0 h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary-indigo/10 text-primary-indigo">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Content</h3>
              <p className="text-muted-foreground mb-4">
                Access a vast library of study materials, including notes, videos, practice questions, and more.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Expert-curated content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Interactive simulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Visual concept maps</span>
                </li>
              </ul>
            </GlassCard>

            {/* Feature 5 */}
            <GlassCard className="feature-card opacity-0 h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary-indigo/10 text-primary-indigo">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Structured Study Planner</h3>
              <p className="text-muted-foreground mb-4">
                Organize your preparation with AI-generated study schedules tailored to your goals and available time.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Dynamic schedule adjustment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Optimal topic sequencing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Spaced repetition integration</span>
                </li>
              </ul>
            </GlassCard>

            {/* Feature 6 */}
            <GlassCard className="feature-card opacity-0 h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary-indigo/10 text-primary-indigo">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Detailed Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Track your progress with powerful analytics that help you understand your strengths and weaknesses.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Topic-wise performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Time management insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-indigo mr-2">•</span>
                  <span>Progress trends over time</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-gradient-to-r from-primary-indigo/10 to-primary-teal/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your JEE Preparation?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your journey to JEE success with Jeenius today. Our AI-powered platform will help you achieve your dreams with personalized learning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/free-trial">
                <Button className="bg-primary-indigo hover:bg-primary-indigo/90 text-white px-8 py-6 h-auto text-lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary-indigo text-primary-indigo hover:bg-primary-indigo/10 px-8 py-6 h-auto text-lg">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;

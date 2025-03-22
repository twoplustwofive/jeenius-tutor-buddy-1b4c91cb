
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-primary-indigo/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-primary-teal/10 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-secondary-amber/10 blur-2xl" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="col-span-1 z-10">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-indigo/10 text-primary-indigo text-sm font-medium mb-6">
              <span className="mr-2">🚀</span>
              Revolutionizing JEE Preparation
            </div>
            <h1 className="heading-xl mb-6 text-balance">
              Your 24/7 AI Tutor for{" "}
              <span className="text-primary-indigo">JEE Excellence</span>
            </h1>
            <p className="subtitle mb-8 max-w-xl text-balance">
              Jeenius combines cutting-edge AI with personalized learning to help you master JEE concepts, practice effectively, and achieve your dream rank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center justify-center">
                Start Learning <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="flex items-center justify-center">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">10,000+</span> students already learning
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 z-10">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-indigo to-primary-teal rounded-3xl blur-lg opacity-30 animate-pulse-slow"></div>
            <GlassCard className="h-auto w-full p-6 relative animate-scale-in">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-primary-indigo/20 flex items-center justify-center">
                  <span className="text-primary-indigo font-semibold">AI</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium">Einstein</h4>
                  <p className="text-xs text-muted-foreground">Jeenius AI Tutor</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-100 rounded-lg p-3 rounded-tl-none">
                  Hello! I'm your personal JEE tutor. What would you like to learn today?
                </div>
                
                <div className="bg-primary-indigo/10 rounded-lg p-3 rounded-tr-none ml-auto">
                  I'm struggling with Newton's Laws of Motion. Can you explain?
                </div>
                
                <div className="bg-gray-100 rounded-lg p-3 rounded-tl-none">
                  Of course! Newton's Laws of Motion can be broken down into three key principles:
                  <ol className="mt-2 ml-4 list-decimal">
                    <li className="mb-1">An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.</li>
                    <li className="mb-1">The acceleration of an object is directly proportional to the force applied and inversely proportional to its mass (F=ma).</li>
                    <li>For every action, there is an equal and opposite reaction.</li>
                  </ol>
                  Would you like me to provide some example problems?
                </div>
                
                <div className="flex border-t border-gray-100 pt-4">
                  <input
                    type="text"
                    placeholder="Ask your question..."
                    className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-indigo/30"
                  />
                  <button className="ml-2 bg-primary-indigo text-white rounded-full p-2">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

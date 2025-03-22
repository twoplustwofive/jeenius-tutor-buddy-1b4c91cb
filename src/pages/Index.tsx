
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import FeatureSection from "@/components/features/FeatureSection";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      
      <main>
        <Hero />
        <FeatureSection />
        
        {/* How It Works Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">How Jeenius Works</h2>
              <p className="subtitle max-w-3xl mx-auto">
                A seamless learning experience designed to adapt to your unique needs and goals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="col-span-1 order-2 lg:order-1">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-indigo/10 flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary-indigo">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Personalized Assessment</h3>
                      <p className="text-muted-foreground">
                        We begin by understanding your current knowledge level, learning style, and goals through a comprehensive assessment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-indigo/10 flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary-indigo">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Customized Learning Path</h3>
                      <p className="text-muted-foreground">
                        Our AI creates a tailored study plan that prioritizes topics based on your strengths, weaknesses, and JEE requirements.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-indigo/10 flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary-indigo">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
                      <p className="text-muted-foreground">
                        Engage with our rich content library, practice with adaptive tests, and clarify doubts instantly with our AI tutor.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-indigo/10 flex items-center justify-center mr-4">
                      <span className="font-semibold text-primary-indigo">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                      <p className="text-muted-foreground">
                        Monitor your improvement with detailed analytics that show your progress and identify areas for further focus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-indigo to-primary-teal rounded-3xl blur-lg opacity-30"></div>
                  <GlassCard className="relative">
                    <img 
                      src="https://placehold.co/600x400?text=Learning+Dashboard" 
                      alt="Jeenius Learning Dashboard" 
                      className="w-full rounded-xl shadow-sm"
                    />
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-2">Intelligent Learning Dashboard</h3>
                      <p className="text-muted-foreground mb-4">
                        Your personalized command center that adapts to your learning needs and shows your progress in real-time.
                      </p>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-indigo-50/50 to-blue-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">What Our Students Say</h2>
              <p className="subtitle max-w-3xl mx-auto">
                Success stories from students who transformed their JEE preparation with Jeenius.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <GlassCard key={i} className="relative">
                  <div className="absolute -top-4 -left-4 text-4xl">❝</div>
                  <div className="pt-4">
                    <p className="text-muted-foreground mb-6">
                      Jeenius transformed my JEE preparation. The personalized approach and AI tutor helped me understand complex concepts that I had been struggling with for months.
                    </p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <h4 className="font-semibold">Ravi Kumar</h4>
                        <p className="text-sm text-muted-foreground">JEE Advanced Rank 235</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">Simple, Transparent Pricing</h2>
              <p className="subtitle max-w-3xl mx-auto">
                Choose the plan that fits your preparation needs and timeline.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <GlassCard className="border-t-4 border-t-gray-300">
                <h3 className="text-xl font-semibold mb-2">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Access to basic study materials",
                    "Limited practice tests",
                    "Basic doubt resolution",
                    "Performance tracking"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </GlassCard>
              
              {/* Pro Plan */}
              <GlassCard className="border-t-4 border-t-primary-indigo transform scale-105 z-10">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-indigo text-white text-xs font-semibold py-1 px-3 rounded-full">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-semibold mb-2">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹1,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Full access to study materials",
                    "Unlimited practice tests",
                    "24/7 AI tutor for doubt resolution",
                    "Detailed performance analytics",
                    "Personalized learning path",
                    "Mock JEE exams"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Get Started</Button>
              </GlassCard>
              
              {/* Premium Plan */}
              <GlassCard className="border-t-4 border-t-primary-teal">
                <h3 className="text-xl font-semibold mb-2">Premium</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹2,999</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Pro plan",
                    "Human expert sessions",
                    "Advanced problem solving workshops",
                    "Predictive performance analysis",
                    "Priority support",
                    "Guaranteed results"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </GlassCard>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-indigo/10 to-primary-teal/10 backdrop-blur-sm"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="heading-lg mb-6">Ready to Transform Your JEE Preparation?</h2>
            <p className="subtitle mb-8 max-w-2xl mx-auto">
              Join thousands of students who are achieving their dream ranks with Jeenius' personalized AI tutoring.
            </p>
            <Button size="lg" className="flex items-center mx-auto">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

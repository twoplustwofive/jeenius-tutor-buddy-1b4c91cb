
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Check, ArrowRight, Award } from "lucide-react";

const FreeTrialSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    examTarget: "JEE Main",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate account creation
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your free trial has been activated! Welcome to Jeenius.");
      navigate("/dashboard");
    }, 1500);
  };

  const features = [
    "Full access to all study materials",
    "Unlimited AI doubt solving",
    "Personalized learning path",
    "Adaptive testing system",
    "Progress tracking analytics",
    "No credit card required"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Start Your <span className="text-primary-indigo">Free Trial</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the full power of Jeenius with a 14-day free trial. No credit card required.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trial Info */}
            <div>
              <GlassCard className="h-full">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary-indigo/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary-indigo" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-center mb-6">
                  14-Day Full Access Trial
                </h2>
                
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-primary-indigo/5 p-4 rounded-lg border border-primary-indigo/20 mb-6">
                  <p className="text-sm text-center">
                    "Jeenius helped me improve my JEE Main score by 35 points in just 2 months!"
                  </p>
                  <p className="text-sm text-center font-medium mt-2">
                    — Rahul S., JEE 2023 AIR 342
                  </p>
                </div>
              </GlassCard>
            </div>
            
            {/* Signup Form */}
            <div>
              <GlassCard>
                <h2 className="text-2xl font-bold mb-6">
                  Create Your Free Account
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="examTarget">Target Exam</Label>
                    <select
                      id="examTarget"
                      name="examTarget"
                      value={formData.examTarget}
                      onChange={handleChange}
                      className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary-indigo"
                      required
                    >
                      <option value="JEE Main">JEE Main</option>
                      <option value="JEE Advanced">JEE Advanced</option>
                      <option value="Both">Both JEE Main & Advanced</option>
                    </select>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="h-4 w-4 mt-1 rounded border-gray-300 text-primary-indigo focus:ring-primary-indigo"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-muted-foreground">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary-indigo hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary-indigo hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary-indigo hover:bg-primary-indigo/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating account...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    By signing up, you agree to receive emails from Jeenius. You can unsubscribe at any time.
                  </p>
                </form>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FreeTrialSignup;

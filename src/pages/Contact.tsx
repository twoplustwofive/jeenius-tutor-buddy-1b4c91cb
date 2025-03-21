
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        {/* Hero Section */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get in <span className="text-primary-indigo">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Have questions about Jeenius? Our team is here to help. Reach out to us using the form below or through our contact information.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="px-6 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <GlassCard className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-indigo/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary-indigo" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-muted-foreground">+91 123 456 7890</p>
              <p className="text-muted-foreground">Mon-Fri, 9am-6pm IST</p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-indigo/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary-indigo" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-muted-foreground">info@jeenius.com</p>
              <p className="text-muted-foreground">support@jeenius.com</p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary-indigo/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary-indigo" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Office</h3>
              <p className="text-muted-foreground">123 Education Lane</p>
              <p className="text-muted-foreground">Learning City, India</p>
            </GlassCard>
          </div>
        </section>

        {/* Contact Form */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <GlassCard>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
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
                      placeholder="john@example.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="+91 98765 43210" 
                      value={formData.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Inquiry about Jeenius" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-indigo"
                    placeholder="How can we help you?" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="bg-primary-indigo hover:bg-primary-indigo/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </GlassCard>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16 mt-12 bg-white/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <GlassCard>
                <h3 className="text-xl font-semibold mb-2">What is Jeenius?</h3>
                <p className="text-muted-foreground">
                  Jeenius is an AI-powered platform designed specifically for JEE preparation, providing personalized learning paths, adaptive testing, and 24/7 doubt solving.
                </p>
              </GlassCard>
              
              <GlassCard>
                <h3 className="text-xl font-semibold mb-2">How does the free trial work?</h3>
                <p className="text-muted-foreground">
                  The free trial gives you 14 days of full access to all Jeenius features. No credit card is required to sign up, and you can cancel anytime.
                </p>
              </GlassCard>
              
              <GlassCard>
                <h3 className="text-xl font-semibold mb-2">Can I use Jeenius on mobile devices?</h3>
                <p className="text-muted-foreground">
                  Yes, Jeenius is fully responsive and works seamlessly on smartphones, tablets, and desktop computers.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;


import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, BookOpen, Award, HeartHandshake, Star, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary-indigo">Jeenius</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We're on a mission to revolutionize JEE preparation with cutting-edge AI technology and expert pedagogy.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <GlassCard className="mb-16 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Jeenius was born from a simple observation: JEE preparation shouldn't be about memorizing thousands of problems, but about truly understanding concepts and applying them effectively.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our founders, a team of IIT alumni and AI experts, experienced firsthand the challenges of JEE preparation. They recognized that traditional coaching methods often focus on quantity over quality, and many students struggle to receive personalized attention.
              </p>
              <p className="text-lg text-muted-foreground">
                With advances in artificial intelligence, we saw an opportunity to create a platform that could provide personalized, high-quality guidance to every student - just like having a dedicated tutor available 24/7. Jeenius combines the expertise of top JEE educators with cutting-edge AI to make world-class preparation accessible to all.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-6 py-12 bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At Jeenius, our work is guided by a set of core principles that shape everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary-indigo/10 text-primary-indigo">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of what's possible in education technology, seeking new ways to enhance learning experiences.
                </p>
              </GlassCard>

              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary-indigo/10 text-primary-indigo">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe quality education should be accessible to all, regardless of geographic or economic barriers.
                </p>
              </GlassCard>

              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary-indigo/10 text-primary-indigo">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in all aspects of our platform, from content quality to user experience.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Jeenius brings together experts from education, technology, and AI research to create the future of learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <GlassCard className="text-center h-full">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-indigo to-primary-teal mx-auto mb-6">
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <Users className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Dr. Priya Sharma</h3>
                <p className="text-primary-indigo mb-4">Co-Founder & CEO</p>
                <p className="text-muted-foreground">
                  IIT Delhi alumnus with a PhD in Computer Science, specializing in educational AI systems.
                </p>
              </GlassCard>

              {/* Team Member 2 */}
              <GlassCard className="text-center h-full">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-indigo to-primary-teal mx-auto mb-6">
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <Users className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Rahul Verma</h3>
                <p className="text-primary-indigo mb-4">Co-Founder & CTO</p>
                <p className="text-muted-foreground">
                  Former AI researcher at Google with extensive experience in building adaptive learning systems.
                </p>
              </GlassCard>

              {/* Team Member 3 */}
              <GlassCard className="text-center h-full">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary-indigo to-primary-teal mx-auto mb-6">
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <Users className="h-10 w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">Ananya Patel</h3>
                <p className="text-primary-indigo mb-4">Head of Education</p>
                <p className="text-muted-foreground">
                  JEE top ranker and educator with 15+ years of experience teaching at premier coaching institutes.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-gradient-to-r from-primary-indigo/10 to-primary-teal/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Jeenius Journey</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the educational revolution. Start your JEE preparation with Jeenius and experience the power of AI-enhanced learning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/free-trial">
                <Button className="bg-primary-indigo hover:bg-primary-indigo/90 text-white px-8 py-6 h-auto text-lg">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary-indigo text-primary-indigo hover:bg-primary-indigo/10 px-8 py-6 h-auto text-lg">
                  Contact Us
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

export default About;

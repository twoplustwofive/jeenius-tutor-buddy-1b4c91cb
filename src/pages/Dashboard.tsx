
import React from "react";
import Navbar from "@/components/layout/Navbar";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { 
  BarChart3, 
  BookOpen, 
  Calendar, 
  Clock, 
  MessageCircle, 
  PlayCircle, 
  BookMarked, 
  ArrowRight, 
  CheckCircle2,
  Target,
  BarChart,
  LucideIcon
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change?: string;
  positive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, change, positive }) => (
  <GlassCard className="h-full">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm text-muted-foreground mb-1">{title}</p>
        <h3 className="text-2xl font-semibold">{value}</h3>
        {change && (
          <p className={`text-xs mt-1 ${positive ? 'text-green-500' : 'text-red-500'}`}>
            {positive ? '↑' : '↓'} {change} from last week
          </p>
        )}
      </div>
      <div className="h-10 w-10 rounded-full bg-primary-indigo/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary-indigo" />
      </div>
    </div>
  </GlassCard>
);

interface LearningModuleProps {
  title: string;
  description: string;
  icon: LucideIcon;
  progress?: number;
  className?: string;
}

const LearningModule: React.FC<LearningModuleProps> = ({ title, description, icon: Icon, progress, className }) => (
  <GlassCard className={`h-full ${className}`}>
    <div className="flex items-center space-x-4 mb-4">
      <div className="h-10 w-10 rounded-full bg-primary-indigo/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary-indigo" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-muted-foreground mb-4">{description}</p>
    {progress !== undefined && (
      <div className="mt-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs text-muted-foreground">Progress</span>
          <span className="text-xs font-medium">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-indigo h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    )}
    <Button variant="ghost" className="mt-4 p-0 h-auto">
      Continue <ArrowRight className="ml-1 h-4 w-4" />
    </Button>
  </GlassCard>
);

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      
      <main className="pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
            <div className="lg:col-span-3">
              <GlassCard>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-2xl font-semibold mb-1">Good morning, Rahul</h1>
                    <p className="text-muted-foreground">Here's your study plan for today</p>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="text-sm font-medium">November 10, 2023</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="bg-primary-indigo/10 rounded-xl p-4 flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary-indigo" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-indigo">Next Goal</p>
                      <h3 className="font-medium">JEE Mains - 75 days</h3>
                    </div>
                  </div>
                  
                  <div className="bg-secondary-amber/10 rounded-xl p-4 flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-secondary-amber" />
                    </div>
                    <div>
                      <p className="text-sm text-secondary-amber">Today's Tasks</p>
                      <h3 className="font-medium">3/8 Completed</h3>
                    </div>
                  </div>
                  
                  <div className="bg-primary-teal/10 rounded-xl p-4 flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                      <BarChart className="h-5 w-5 text-primary-teal" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-teal">Weekly Progress</p>
                      <h3 className="font-medium">85% Complete</h3>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
                  <div className="space-y-4">
                    {[
                      {
                        time: "09:00 - 10:30",
                        title: "Physics: Mechanics",
                        description: "Newton's Laws of Motion and Applications",
                        completed: true
                      },
                      {
                        time: "11:00 - 12:30",
                        title: "Practice Test: Mechanics",
                        description: "Test your understanding of Newton's Laws",
                        completed: true
                      },
                      {
                        time: "14:00 - 15:30",
                        title: "Chemistry: Chemical Bonding",
                        description: "Covalent Bonds and Molecular Orbitals",
                        completed: false
                      },
                      {
                        time: "16:00 - 17:30",
                        title: "Mathematics: Calculus",
                        description: "Integration Methods and Applications",
                        completed: false
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 pt-1">
                          <div className={`h-6 w-6 rounded-full flex items-center justify-center border-2 ${item.completed ? 'bg-primary-indigo border-primary-indigo' : 'border-gray-300'}`}>
                            {item.completed && <CheckCircle2 className="h-4 w-4 text-white" />}
                          </div>
                        </div>
                        <div className="flex-1 pb-4 border-b border-gray-100">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className={`font-medium ${item.completed ? 'line-through text-muted-foreground' : ''}`}>{item.title}</h3>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                              <span className="text-sm text-muted-foreground">{item.time}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
            
            <div className="lg:col-span-1">
              <GlassCard className="h-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Performance</h2>
                  <Button variant="ghost" size="sm" className="h-auto px-2 py-1">
                    View All
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Physics</span>
                      <span className="text-sm text-muted-foreground">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-indigo h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Chemistry</span>
                      <span className="text-sm text-muted-foreground">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-teal h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Mathematics</span>
                      <span className="text-sm text-muted-foreground">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-secondary-amber h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-sm font-semibold mb-3">Recent Test Scores</h3>
                    <div className="space-y-3">
                      {[
                        { name: "Physics Test 3", score: "42/50", date: "Nov 8" },
                        { name: "Chemistry Test 2", score: "38/50", date: "Nov 5" },
                        { name: "Mathematics Test 4", score: "45/50", date: "Nov 2" }
                      ].map((test, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <div>
                            <p className="text-sm font-medium">{test.name}</p>
                            <p className="text-xs text-muted-foreground">{test.date}</p>
                          </div>
                          <div className="bg-gray-100 rounded-full px-2 py-1">
                            <span className="text-sm font-medium">{test.score}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard 
              title="Study Hours" 
              value="28.5h" 
              icon={Clock} 
              change="12%" 
              positive={true} 
            />
            <StatCard 
              title="Problems Solved" 
              value="384" 
              icon={CheckCircle2} 
              change="8%" 
              positive={true} 
            />
            <StatCard 
              title="Doubts Resolved" 
              value="42" 
              icon={MessageCircle} 
              change="15%" 
              positive={true} 
            />
            <StatCard 
              title="Tests Completed" 
              value="15" 
              icon={BarChart3} 
              change="5%" 
              positive={false} 
            />
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LearningModule 
                title="Physics: Wave Optics" 
                description="Learn about interference, diffraction, and polarization of light waves."
                icon={BookOpen}
                progress={65}
              />
              <LearningModule 
                title="Chemistry: Organic Reactions" 
                description="Master addition, substitution, and elimination reactions in organic chemistry."
                icon={BookMarked}
                progress={32}
              />
              <LearningModule 
                title="Mathematics: Vectors" 
                description="Explore vector operations, dot product, cross product and applications."
                icon={Target}
                progress={78}
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Recommended for You</h2>
              <Button variant="ghost" className="text-primary-indigo">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GlassCard>
                <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <PlayCircle className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-1">Electrostatics Master Class</h3>
                <p className="text-sm text-muted-foreground mb-3">Learn fundamental concepts of electric charges and fields with interactive simulations.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">45 min</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-auto p-0">
                    Start Learning <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </GlassCard>
              
              <GlassCard>
                <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <BarChart3 className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-1">Mock JEE Test: Mathematics</h3>
                <p className="text-sm text-muted-foreground mb-3">Test your preparation with this full-length JEE-style mathematics assessment.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">3 hours</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-auto p-0">
                    Take Test <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </GlassCard>
              
              <GlassCard>
                <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <MessageCircle className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-1">Problem Solving Workshop</h3>
                <p className="text-sm text-muted-foreground mb-3">Interactive session tackling the most challenging JEE problems with step-by-step solutions.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span className="text-xs text-muted-foreground">90 min</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-auto p-0">
                    Join Workshop <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;


import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Clock, 
  FileText,
  BrainCircuit,
  HelpCircle,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Welcome back, Rahul</h1>
        <p className="text-gray-600">Continue your JEE preparation journey. You've completed 68% of your weekly goals.</p>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <Button className="bg-primary-indigo hover:bg-primary-indigo/90">
            Generate Test
          </Button>
          <Button variant="outline">
            Ask Doubt
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Overall Progress */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-2">Overall Progress</h2>
          <p className="text-sm text-gray-500 mb-4">Your JEE preparation journey</p>
          
          <div className="space-y-5">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Physics</span>
                <span className="text-sm">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Chemistry</span>
                <span className="text-sm">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Mathematics</span>
                <span className="text-sm">58%</span>
              </div>
              <Progress value={58} className="h-2" />
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="mt-6 text-primary-indigo p-0">
            View detailed analytics <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Recommended Topics */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-2">Recommended Topics</h2>
          <p className="text-sm text-gray-500 mb-4">Based on your recent performance</p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Electrostatics</h3>
                <p className="text-xs text-gray-500">Physics • High priority</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Organic Chemistry</h3>
                <p className="text-xs text-gray-500">Chemistry • Medium priority</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="h-9 w-9 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium">Calculus</h3>
                <p className="text-xs text-gray-500">Mathematics • High priority</p>
              </div>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="mt-6 text-primary-indigo p-0">
            View all recommendations <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-2">Today's Schedule</h2>
          <p className="text-sm text-gray-500 mb-4">Your learning plan for today</p>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Physics Test</h3>
                <p className="text-xs text-gray-500">9:00 AM - 10:30 AM</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="h-9 w-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium">Chemistry Study</h3>
                <p className="text-xs text-gray-500">11:00 AM - 12:30 PM</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="h-9 w-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium">Doubt Session</h3>
                <p className="text-xs text-gray-500">3:00 PM - 4:00 PM</p>
              </div>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="mt-6 text-primary-indigo p-0">
            View full schedule <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      {/* Recent Tests and Results */}
      <div className="mb-8">
        <Tabs defaultValue="recent">
          <TabsList className="border-b border-gray-200 w-full justify-start mb-6 bg-transparent p-0 h-auto">
            <TabsTrigger value="recent" className="py-2 px-4 border-b-2 border-transparent data-[state=active]:border-primary-indigo rounded-none data-[state=active]:shadow-none">
              Recent Tests
            </TabsTrigger>
            <TabsTrigger value="progress" className="py-2 px-4 border-b-2 border-transparent data-[state=active]:border-primary-indigo rounded-none data-[state=active]:shadow-none">
              Subject Progress
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="py-2 px-4 border-b-2 border-transparent data-[state=active]:border-primary-indigo rounded-none data-[state=active]:shadow-none">
              Upcoming
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="recent" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold">Physics Weekly Test</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">78%</span>
                      </div>
                      <p className="text-sm text-gray-500">Yesterday</p>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-gray-400" />
                        <span>30 questions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>45 minutes</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button variant="outline" size="sm" className="w-full">
                        Review Test <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold">Chemistry Practice Test</h3>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">65%</span>
                      </div>
                      <p className="text-sm text-gray-500">3 days ago</p>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-gray-400" />
                        <span>25 questions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>35 minutes</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button variant="outline" size="sm" className="w-full">
                        Review Test <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-semibold">Mathematics Mock Test</h3>
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">82%</span>
                      </div>
                      <p className="text-sm text-gray-500">5 days ago</p>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-gray-400" />
                        <span>40 questions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>60 minutes</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button variant="outline" size="sm" className="w-full">
                        Review Test <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="progress" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Physics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Mechanics</span>
                        <span className="text-sm">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Electrostatics</span>
                        <span className="text-sm">64%</span>
                      </div>
                      <Progress value={64} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Optics</span>
                        <span className="text-sm">72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Chemistry</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Organic</span>
                        <span className="text-sm">68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Inorganic</span>
                        <span className="text-sm">59%</span>
                      </div>
                      <Progress value={59} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Physical</span>
                        <span className="text-sm">74%</span>
                      </div>
                      <Progress value={74} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Mathematics</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Calculus</span>
                        <span className="text-sm">62%</span>
                      </div>
                      <Progress value={62} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Algebra</span>
                        <span className="text-sm">77%</span>
                      </div>
                      <Progress value={77} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Coordinate Geometry</span>
                        <span className="text-sm">54%</span>
                      </div>
                      <Progress value={54} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="font-semibold">Physics Full Mock</h3>
                      <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-gray-400" />
                        <span>50 questions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>90 minutes</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button size="sm" className="w-full bg-primary-indigo hover:bg-primary-indigo/90">
                        Start Test
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="font-semibold">JEE Advanced Practice</h3>
                      <p className="text-sm text-gray-500">In 3 days</p>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-2 text-gray-400" />
                        <span>60 questions</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>180 minutes</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button size="sm" variant="outline" className="w-full">
                        Prepare
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <h3 className="font-semibold">Weak Areas Review</h3>
                      <p className="text-sm text-gray-500">In 5 days</p>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Targeted practice</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>120 minutes</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button size="sm" variant="outline" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Quick Actions and AI Tutor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-2">Quick Actions</h2>
          <p className="text-sm text-gray-500 mb-4">Frequently used features</p>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="justify-start h-auto py-3">
              <BrainCircuit className="h-5 w-5 mr-2" />
              Generate Test
            </Button>
            <Button variant="outline" className="justify-start h-auto py-3">
              <BookOpen className="h-5 w-5 mr-2" />
              Study Material
            </Button>
            <Button variant="outline" className="justify-start h-auto py-3">
              <HelpCircle className="h-5 w-5 mr-2" />
              Ask Doubt
            </Button>
            <Button variant="outline" className="justify-start h-auto py-3">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-2">AI Tutor</h2>
          <p className="text-sm text-gray-500 mb-4">Get instant help with your doubts</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-sm">Hello Rahul! How can I help you with your JEE preparation today?</p>
          </div>
          
          <div className="flex space-x-2">
            <Button className="bg-primary-indigo hover:bg-primary-indigo/90">
              Ask a Question
            </Button>
            <Button variant="outline">
              View Previous Chats
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

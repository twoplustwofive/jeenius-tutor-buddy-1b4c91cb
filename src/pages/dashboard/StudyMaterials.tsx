
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const StudyMaterials: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Materials</h1>
        <p className="text-gray-600">Access comprehensive study resources for your JEE preparation.</p>
      </div>

      <Tabs defaultValue="physics">
        <TabsList className="w-full justify-start mb-6 border-b border-gray-200 bg-transparent p-0 h-auto">
          <TabsTrigger 
            value="physics" 
            className="py-2 px-4 border-b-2 border-transparent data-[state=active]:border-primary-indigo rounded-none data-[state=active]:shadow-none"
          >
            Physics
          </TabsTrigger>
          <TabsTrigger 
            value="chemistry" 
            className="py-2 px-4 border-b-2 border-transparent data-[state=active]:border-primary-indigo rounded-none data-[state=active]:shadow-none"
          >
            Chemistry
          </TabsTrigger>
          <TabsTrigger 
            value="mathematics" 
            className="py-2 px-4 border-b-2 border-transparent data-[state=active]:border-primary-indigo rounded-none data-[state=active]:shadow-none"
          >
            Mathematics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="physics" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Mechanics</CardTitle>
                <CardDescription>Laws of motion, Work, Energy, and Power</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Newton's Laws Notes</h3>
                      <p className="text-xs text-gray-500">PDF • 25 pages</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Video className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Work & Energy Lecture</h3>
                      <p className="text-xs text-gray-500">Video • 45 minutes</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Practice Problems</h3>
                      <p className="text-xs text-gray-500">Problems • 50 questions</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Electrostatics</CardTitle>
                <CardDescription>Electric charges, fields, and potentials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Coulomb's Law Notes</h3>
                      <p className="text-xs text-gray-500">PDF • 18 pages</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Video className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Electric Fields</h3>
                      <p className="text-xs text-gray-500">Video • 32 minutes</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Practice Problems</h3>
                      <p className="text-xs text-gray-500">Problems • 35 questions</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Optics</CardTitle>
                <CardDescription>Wave nature of light, reflection, refraction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Wave Optics Notes</h3>
                      <p className="text-xs text-gray-500">PDF • 22 pages</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Video className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Lenses & Mirrors</h3>
                      <p className="text-xs text-gray-500">Video • 40 minutes</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Practice Problems</h3>
                      <p className="text-xs text-gray-500">Problems • 40 questions</p>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="chemistry" className="mt-0">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium mb-2">Chemistry content will be displayed here</h3>
            <p className="text-gray-500">Similar layout to the Physics tab with relevant chemistry topics.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="mathematics" className="mt-0">
          <div className="p-8 text-center">
            <h3 className="text-lg font-medium mb-2">Mathematics content will be displayed here</h3>
            <p className="text-gray-500">Similar layout to the Physics tab with relevant mathematics topics.</p>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default StudyMaterials;


import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AITests: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Tests</h1>
        <p className="text-gray-600">Take personalized tests powered by AI to improve your JEE preparation.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Generate Personalized Test</CardTitle>
            <CardDescription>Our AI will create a test based on your performance history</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-primary-indigo hover:bg-primary-indigo/90">
              Create New Test
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Topic-Specific Test</CardTitle>
            <CardDescription>Create a test focused on specific topics you want to practice</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">
              Select Topics
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-xl font-semibold mb-4">Previous Tests</h2>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
        <h3 className="text-lg font-medium mb-2">AI Tests page is under construction</h3>
        <p className="text-gray-500">The full functionality will be available soon.</p>
      </div>
    </DashboardLayout>
  );
};

export default AITests;

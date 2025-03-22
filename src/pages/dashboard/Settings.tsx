
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences.</p>
      </div>
      
      <Tabs defaultValue="profile">
        <TabsList className="w-full justify-start mb-6 border-b border-gray-200 bg-transparent p-0 h-auto">
          <TabsTrigger 
            value="profile" 
            className="py-2 px-4 border-b-2 border-transparent data-[state=active]:border-primary-indigo rounded-none data-[state=active]:shadow-none"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger 
            value="notifications" 
            className="py-2 px-4 border-b-2 border-transparent data-[state=active]:border-primary-indigo rounded-none data-[state=active]:shadow-none"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger 
            value="preferences" 
            className="py-2 px-4 border-b-2 border-transparent data-[state=active]:border-primary-indigo rounded-none data-[state=active]:shadow-none"
          >
            Preferences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Rahul Sharma" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="rahul.sharma@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+91 9876543210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="institution">Institution</Label>
                  <Input id="institution" defaultValue="Delhi Public School" />
                </div>
              </div>
              <Button className="mt-4 bg-primary-indigo hover:bg-primary-indigo/90">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-0">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-lg font-medium mb-2">Notification settings will be displayed here</h3>
            <p className="text-gray-500">Configure how and when you receive notifications.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="preferences" className="mt-0">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-lg font-medium mb-2">Preference settings will be displayed here</h3>
            <p className="text-gray-500">Configure your study preferences and app appearance.</p>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Settings;

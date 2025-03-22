
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart2, 
  BookOpen, 
  Calendar, 
  HelpCircle, 
  Home, 
  Settings as SettingsIcon,
  BrainCircuit,
  Bell,
  Search,
  Menu,
  X,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();

  const sidebarLinks = [
    { to: "/dashboard", icon: Home, label: "Dashboard" },
    { to: "/dashboard/study-materials", icon: BookOpen, label: "Study Materials" },
    { to: "/dashboard/ai-tests", icon: BrainCircuit, label: "AI Tests" },
    { to: "/dashboard/doubt-resolution", icon: HelpCircle, label: "Doubt Resolution" },
    { to: "/dashboard/ai-chat", icon: MessageSquare, label: "Einstein AI" },
    { to: "/dashboard/analytics", icon: BarChart2, label: "Analytics" },
    { to: "/dashboard/schedule", icon: Calendar, label: "Schedule" },
    { to: "/dashboard/settings", icon: SettingsIcon, label: "Settings" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar>
          <SidebarHeader className="border-b border-gray-200 p-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl text-primary-indigo">JEEnius</span>
            </Link>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarLinks.map((link) => (
                    <SidebarMenuItem key={link.to}>
                      <SidebarMenuButton
                        asChild
                        isActive={location.pathname === link.to}
                        tooltip={link.label}
                      >
                        <Link to={link.to} className="flex items-center">
                          <link.icon />
                          <span>{link.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">R</span>
              </div>
              <div className="text-sm">
                <p className="font-medium">Rahul Singh</p>
                <p className="text-gray-500">JEE 2024</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          {/* Header */}
          <header className="bg-white border-b border-gray-200 py-4 px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <div className="flex items-center w-full max-w-lg">
                  <Search className="h-5 w-5 text-gray-400 absolute ml-3 pointer-events-none" />
                  <Input 
                    placeholder="Search topics, tests, materials..." 
                    className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-200"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-500">
                  <Bell className="h-5 w-5" />
                </Button>
                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">R</span>
                </div>
              </div>
            </div>
          </header>
          
          <div className="py-6 px-6 h-[calc(100vh-64px)] overflow-auto">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;

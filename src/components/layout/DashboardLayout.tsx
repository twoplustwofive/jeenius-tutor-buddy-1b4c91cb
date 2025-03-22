
import React, { useState } from "react";
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

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon: Icon, label, isActive, onClick }) => (
  <Link
    to={to}
    className={cn(
      "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
      isActive
        ? "bg-primary-indigo/10 text-primary-indigo font-medium"
        : "text-gray-600 hover:bg-gray-100"
    )}
    onClick={onClick}
  >
    <Icon className="h-5 w-5" />
    <span>{label}</span>
  </Link>
);

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-primary-indigo">JEEnius</span>
          </Link>
        </div>
        <div className="flex-1 py-6 flex flex-col space-y-1 px-3">
          {sidebarLinks.map((link) => (
            <SidebarLink
              key={link.to}
              to={link.to}
              icon={link.icon}
              label={link.label}
              isActive={location.pathname === link.to}
            />
          ))}
        </div>
      </aside>

      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed bottom-4 left-4 z-50">
        <Button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="rounded-full h-12 w-12 flex items-center justify-center bg-primary-indigo shadow-lg"
        >
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Sidebar - Mobile */}
      {isMobileSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileSidebarOpen(false)}
          ></div>
          <aside className="relative flex flex-col w-64 max-w-xs bg-white">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2">
                <span className="font-bold text-2xl text-primary-indigo">JEEnius</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileSidebarOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex-1 py-6 flex flex-col space-y-1 px-3">
              {sidebarLinks.map((link) => (
                <SidebarLink
                  key={link.to}
                  to={link.to}
                  icon={link.icon}
                  label={link.label}
                  isActive={location.pathname === link.to}
                  onClick={() => setIsMobileSidebarOpen(false)}
                />
              ))}
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center w-full max-w-lg">
              <Search className="h-5 w-5 text-gray-400 absolute ml-3 pointer-events-none" />
              <Input 
                placeholder="Search topics, tests, materials..." 
                className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-200"
              />
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
        
        <div className="max-w-7xl mx-auto py-6 px-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

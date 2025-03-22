
import React, { useState, useRef, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Send, 
  Mic, 
  Plus, 
  Image as ImageIcon, 
  Code,
  FileText,
  Sparkles,
  Brain,
  Wand2,
  Loader2,
  BrainCircuit
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  visualizationType?: "text" | "code" | "canvas" | "image";
  visualizationData?: string;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello Rahul! I'm Einstein, your AI tutor. How can I help with your JEE preparation today?",
      sender: "ai",
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      let responseContent = "";
      let visualizationType: "text" | "code" | "canvas" | "image" | undefined = undefined;
      let visualizationData: string | undefined = undefined;
      
      if (inputValue.toLowerCase().includes("newton") || inputValue.toLowerCase().includes("motion")) {
        responseContent = "Newton's Three Laws of Motion are fundamental principles in classical mechanics. Let me explain each one with a visualization:";
        visualizationType = "canvas";
        visualizationData = "newton_laws";
      } else if (inputValue.toLowerCase().includes("code") || inputValue.toLowerCase().includes("program")) {
        responseContent = "Here's a simple Python function to calculate the kinetic energy of an object:";
        visualizationType = "code";
        visualizationData = `def kinetic_energy(mass, velocity):
    """
    Calculate the kinetic energy of an object.
    
    Parameters:
    mass (float): Mass of the object in kg
    velocity (float): Velocity of the object in m/s
    
    Returns:
    float: Kinetic energy in Joules
    """
    return 0.5 * mass * (velocity ** 2)

# Example usage
mass = 5  # kg
velocity = 10  # m/s
energy = kinetic_energy(mass, velocity)
print(f"The kinetic energy is {energy} Joules")`;
      } else if (inputValue.toLowerCase().includes("graph") || inputValue.toLowerCase().includes("chart")) {
        responseContent = "I've created a graph showing the relationship between force and acceleration according to Newton's Second Law (F = ma):";
        visualizationType = "image";
        visualizationData = "force_acceleration_graph";
      } else {
        responseContent = "I'd be happy to help with your JEE preparation. We can work on physics, chemistry, or mathematics concepts. I can provide explanations, solve problems, create visualizations, or help you with practice questions. What specific topic would you like to explore?";
      }
      
      const newAiMessage: Message = {
        id: Date.now().toString(),
        content: responseContent,
        sender: "ai",
        timestamp: new Date(),
        visualizationType,
        visualizationData
      };
      
      setMessages((prev) => [...prev, newAiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const renderVisualization = (type?: string, data?: string) => {
    if (!type || !data) return null;
    
    switch (type) {
      case "code":
        return (
          <div className="bg-gray-900 text-gray-100 p-4 rounded-md font-mono text-sm overflow-x-auto mt-2">
            <pre className="whitespace-pre-wrap">{data}</pre>
          </div>
        );
      
      case "canvas":
        return (
          <div className="mt-3 border border-gray-200 rounded-lg p-4 bg-gray-50">
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <BrainCircuit className="h-10 w-10 text-primary-indigo mx-auto mb-2" />
                <p className="text-gray-500">Interactive visualization would appear here</p>
                <p className="text-xs text-gray-400 mt-1">Newton's Laws visualization</p>
              </div>
            </div>
          </div>
        );
        
      case "image":
        return (
          <div className="mt-3 border border-gray-200 rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <ImageIcon className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Graph visualization would appear here</p>
                <p className="text-xs text-gray-400 mt-1">Force-Acceleration relationship</p>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  const handleVoiceInput = () => {
    toast({
      title: "Voice Input",
      description: "Voice recognition is initializing...",
    });
    
    // In a real implementation, we would use the Web Speech API here
    setTimeout(() => {
      toast({
        title: "Voice Input",
        description: "What topic would you like to discuss today?",
      });
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-64px)]">
        <div className="flex-none py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Einstein AI Tutor</h1>
              <p className="text-gray-600">Your 24/7 personalized assistant for JEE preparation</p>
            </div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="canvas">Visual Canvas</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className="flex-1 overflow-hidden">
          <TabsContent value="chat" className="h-full flex flex-col data-[state=active]:flex data-[state=inactive]:hidden">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex max-w-[80%]",
                    message.sender === "user" ? "ml-auto justify-end" : "mr-auto"
                  )}
                >
                  {message.sender === "ai" && (
                    <div className="h-8 w-8 rounded-full bg-primary-indigo/10 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <Brain className="h-4 w-4 text-primary-indigo" />
                    </div>
                  )}
                  <div className={cn(
                    "p-3 rounded-xl",
                    message.sender === "user"
                      ? "bg-primary-indigo text-white rounded-tr-none"
                      : "bg-gray-100 border border-gray-200 text-gray-800 rounded-tl-none"
                  )}>
                    <p className="text-sm">{message.content}</p>
                    {renderVisualization(message.visualizationType, message.visualizationData)}
                    <span className="text-xs opacity-70 mt-1 block text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  {message.sender === "user" && (
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center ml-2 flex-shrink-0 mt-1">
                      <span className="text-sm font-medium text-gray-700">R</span>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex max-w-[80%] mr-auto">
                  <div className="h-8 w-8 rounded-full bg-primary-indigo/10 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <Brain className="h-4 w-4 text-primary-indigo" />
                  </div>
                  <div className="p-3 rounded-xl bg-gray-100 border border-gray-200 text-gray-800 rounded-tl-none">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="flex-none p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full h-10 w-10"
                  onClick={() => toast({
                    title: "Upload Files",
                    description: "File upload functionality coming soon!",
                  })}
                >
                  <Plus className="h-5 w-5" />
                </Button>
                <div className="relative flex-1">
                  <Textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything about your JEE preparation..."
                    className="resize-none pr-12 py-2.5 min-h-[2.5rem] h-10"
                  />
                  <Button
                    className="absolute right-1 top-1 h-8 w-8 p-0"
                    onClick={handleSendMessage}
                    disabled={isLoading || inputValue.trim() === ""}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full h-10 w-10"
                  onClick={handleVoiceInput}
                >
                  <Mic className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="inline-flex items-center gap-2 text-xs text-gray-500">
                  <Sparkles className="h-3 w-3" />
                  <span>Einstein can create visual explanations, solve problems, and help with concepts</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="canvas" className="h-full data-[state=active]:block data-[state=inactive]:hidden">
            <div className="h-full flex flex-col">
              <div className="flex-1 p-4 bg-gray-50 overflow-auto">
                <div ref={canvasRef} className="h-full rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <BrainCircuit className="h-12 w-12 text-primary-indigo/50 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Visual Canvas</h3>
                    <p className="text-gray-500 max-w-md mx-auto mb-4">
                      Ask Einstein to create interactive visualizations, diagrams, or explain concepts visually here.
                    </p>
                    <Button onClick={() => setActiveTab("chat")}>
                      Ask a question
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tools" className="h-full data-[state=active]:block data-[state=inactive]:hidden">
            <div className="h-full p-6">
              <h3 className="text-lg font-medium mb-4">Tools & Extensions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: FileText, name: "Test Generator", description: "Create custom practice tests based on your weak areas" },
                  { icon: Brain, name: "Concept Visualizer", description: "Turn complex concepts into easy-to-understand visuals" },
                  { icon: Code, name: "Formula Helper", description: "Get help with mathematical formulas and equations" },
                  { icon: Wand2, name: "Problem Solver", description: "Step-by-step solutions to complex JEE problems" },
                  { icon: ImageIcon, name: "Diagram Creator", description: "Generate clear, accurate scientific diagrams" },
                  { icon: Sparkles, name: "Revision Assistant", description: "Create quick revision notes from your conversations" }
                ].map((tool, index) => (
                  <div 
                    key={index} 
                    className="border rounded-lg p-4 hover:border-primary-indigo/50 hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => {
                      setActiveTab("chat");
                      setInputValue(`@${tool.name.toLowerCase().replace(" ", "_")} `);
                      toast({
                        title: `${tool.name} activated`,
                        description: "This tool is now ready to use in your chat",
                      });
                    }}
                  >
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-lg bg-primary-indigo/10 flex items-center justify-center mr-3">
                        <tool.icon className="h-5 w-5 text-primary-indigo" />
                      </div>
                      <div>
                        <h4 className="font-medium">{tool.name}</h4>
                        <p className="text-sm text-gray-500">{tool.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AIChat;

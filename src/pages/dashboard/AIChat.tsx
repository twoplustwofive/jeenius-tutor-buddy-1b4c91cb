
import React, { useState, useRef, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Send, 
  Mic, 
  Image as ImageIcon, 
  Code,
  FileText,
  Sparkles,
  Brain,
  PanelLeft,
  MoreHorizontal,
  Paperclip,
  Loader2,
  BrainCircuit,
  ArrowDown,
  Share2,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import VisualizationCanvas from "@/components/ai-chat/VisualizationCanvas";
import MentionSuggestions from "@/components/ai-chat/MentionSuggestions";

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
  const [showMentions, setShowMentions] = useState(false);
  const [mentionSearchTerm, setMentionSearchTerm] = useState("");
  const [canvasOpen, setCanvasOpen] = useState(false);
  const [canvasTitle, setCanvasTitle] = useState("Interactive Visualization");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Check for @ symbol to show mention suggestions
    const lastAtIndex = value.lastIndexOf('@');
    if (lastAtIndex !== -1 && (lastAtIndex === 0 || value[lastAtIndex - 1] === ' ')) {
      setShowMentions(true);
      setMentionSearchTerm(value.slice(lastAtIndex + 1));
    } else {
      setShowMentions(false);
      setMentionSearchTerm("");
    }
  };

  const handleSelectMention = (toolId: string) => {
    const lastAtIndex = inputValue.lastIndexOf('@');
    const newValue = inputValue.slice(0, lastAtIndex) + `@${toolId} `;
    setInputValue(newValue);
    setShowMentions(false);
    textareaRef.current?.focus();
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
      let shouldOpenCanvas = false;
      
      if (inputValue.toLowerCase().includes("newton") || 
          inputValue.toLowerCase().includes("motion") || 
          inputValue.toLowerCase().includes("visually") ||
          inputValue.toLowerCase().includes("@visualize")) {
        responseContent = "I'd be happy to explain Newton's laws of motion using visual elements. I've created an interactive visualization to help you understand these fundamental physics principles.";
        visualizationType = "canvas";
        visualizationData = "newton_laws";
        setCanvasTitle("Newton's Laws Interactive Visualizations");
        shouldOpenCanvas = true;
      } else if (inputValue.toLowerCase().includes("code") || 
                inputValue.toLowerCase().includes("program") ||
                inputValue.toLowerCase().includes("@code")) {
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
      } else if (inputValue.toLowerCase().includes("@problem_solver")) {
        responseContent = "I'll help you solve this step-by-step. Let's break down the problem:";
        visualizationType = "text";
        visualizationData = "problem_solution";
      } else if (inputValue.toLowerCase().includes("@formula")) {
        responseContent = "Here's a comprehensive formula sheet for mechanics:";
        visualizationType = "text";
        visualizationData = "formula_sheet";
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
      
      if (shouldOpenCanvas) {
        setCanvasOpen(true);
      }
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
      
      case "text":
        return (
          <div className="border border-gray-200 rounded-md p-4 mt-2 bg-gray-50">
            <p className="text-gray-800">{data}</p>
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
      
      case "canvas":
        return (
          <div className="mt-3 border border-gray-200 rounded-lg p-2 bg-gray-50">
            <button 
              className="w-full p-3 flex items-center gap-3 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => {
                setCanvasTitle("Newton's Laws Interactive Visualizations");
                setCanvasOpen(true);
              }}
            >
              <div className="h-10 w-10 rounded-full bg-primary-indigo/10 flex items-center justify-center">
                <BrainCircuit className="h-5 w-5 text-primary-indigo" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium">Newton's Laws Interactive Visualizations</p>
                <p className="text-xs text-gray-500">Click to open visualization</p>
              </div>
            </button>
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
      <div className="h-[calc(100vh-128px)] bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col relative">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-primary-indigo" />
            <h1 className="font-medium">Einstein AI Tutor</h1>
          </div>
          <div className="flex items-center gap-2">
            {canvasOpen ? (
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setCanvasOpen(false)}
              >
                <PanelLeft className="h-3.5 w-3.5 mr-1" />
                Hide Canvas
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setCanvasOpen(true)}
              >
                Visual Guide to Newton's Laws of Motion
                <ArrowDown className="h-3.5 w-3.5 ml-1" />
              </Button>
            )}
            
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Star className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex max-w-3xl ${
                message.sender === "user" ? "ml-auto" : "mr-auto"
              }`}
            >
              {message.sender === "ai" && (
                <div className="h-8 w-8 rounded-full bg-primary-indigo/10 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                  <Brain className="h-4 w-4 text-primary-indigo" />
                </div>
              )}
              <div className={`
                p-3 rounded-xl
                ${message.sender === "user"
                  ? "bg-primary-indigo text-white rounded-tr-none"
                  : "bg-gray-100 border border-gray-200 text-gray-800 rounded-tl-none"}
              `}>
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
            <div className="flex max-w-3xl mr-auto">
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
        
        {/* Input Area */}
        <div className="border-t border-gray-200 p-4">
          <div className="relative">
            <Textarea
              ref={textareaRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask Einstein AI about your JEE preparation..."
              className="resize-none pr-12 py-3 min-h-[60px] w-full"
            />
            <Button
              className="absolute right-2 bottom-2 h-8 w-8 p-0"
              onClick={handleSendMessage}
              disabled={isLoading || inputValue.trim() === ""}
            >
              <Send className="h-4 w-4" />
            </Button>
            
            <MentionSuggestions 
              isVisible={showMentions} 
              onSelect={handleSelectMention}
              searchTerm={mentionSearchTerm}
            />
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500" onClick={handleVoiceInput}>
                <Mic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                <Paperclip className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              Type @ to access tools like visualizations, formulas, and more
            </div>
          </div>
        </div>
      </div>

      <VisualizationCanvas
        title={canvasTitle}
        isOpen={canvasOpen}
        onClose={() => setCanvasOpen(false)}
      />
    </DashboardLayout>
  );
};

export default AIChat;

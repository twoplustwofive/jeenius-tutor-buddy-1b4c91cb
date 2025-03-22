
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Mic, Plus, X, Minimize2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const features = [
  { name: "Schedule", description: "Create or view your study schedule" },
  { name: "Test", description: "Generate a personalized test based on your weaknesses" },
  { name: "Topics", description: "Get recommended topics to study" },
  { name: "Analyze", description: "Analyze your performance in recent tests" },
  { name: "Doubt", description: "Resolve a doubt on any topic" },
  { name: "Notes", description: "Create or view your notes" }
];

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello Rahul! How can I help you with your JEE preparation today?",
      sender: "ai",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isMinimized]);

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
      
      if (inputValue.toLowerCase().includes("test")) {
        responseContent = "I can help you prepare for a test. What subject would you like to focus on? Physics, Chemistry, or Mathematics?";
      } else if (inputValue.toLowerCase().includes("schedule")) {
        responseContent = "I see you want to discuss your schedule. Your next study session is Chemistry at 11:00 AM. Would you like me to show your full schedule?";
      } else if (inputValue.toLowerCase().includes("weak") || inputValue.toLowerCase().includes("struggling")) {
        responseContent = "Based on your recent tests, you seem to be struggling with Organic Chemistry and Calculus. Would you like me to suggest some practice problems?";
      } else if (inputValue.includes("@")) {
        responseContent = "I see you're trying to use a command. Try @schedule, @test, @topics, @analyze, @doubt, or @notes.";
        setShowFeatures(true);
      } else {
        responseContent = "I'm your personal JEE tutor. Is there a specific topic you'd like to discuss or shall I suggest something based on your recent performance?";
      }
      
      const newAiMessage: Message = {
        id: Date.now().toString(),
        content: responseContent,
        sender: "ai",
        timestamp: new Date()
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

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isMinimized) setIsMinimized(false);
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const insertFeatureCommand = (feature: string) => {
    setInputValue((prev) => prev + `@${feature.toLowerCase()} `);
    setShowFeatures(false);
  };

  const handleSpeechRecognition = () => {
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
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300",
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-primary-indigo hover:bg-primary-indigo/90"
        )}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageIcon />}
      </button>

      {/* Chat interface */}
      <div
        className={cn(
          "fixed z-40 transition-all duration-300 ease-in-out",
          isOpen
            ? "bottom-6 right-6 opacity-100 scale-100"
            : "bottom-6 right-6 opacity-0 scale-95 pointer-events-none",
          isMinimized ? "h-16 w-80" : "w-80 sm:w-96 h-[500px]"
        )}
      >
        <div
          className={cn(
            "relative flex flex-col w-full h-full bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl overflow-hidden",
            isMinimized ? "h-16" : "h-full"
          )}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-primary-indigo/10 flex items-center justify-center mr-3">
                <EinsteinIcon />
              </div>
              <h3 className="font-semibold text-foreground">Einstein - Your JEE Tutor</h3>
            </div>
            <button
              onClick={toggleMinimize}
              className="text-gray-500 hover:text-gray-700"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </button>
          </div>

          {!isMinimized && (
            <>
              {/* Messages container */}
              <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "mb-4 max-w-[80%] p-3 rounded-2xl",
                      message.sender === "user"
                        ? "ml-auto bg-primary-indigo/10 text-foreground rounded-tr-none"
                        : "mr-auto bg-white border border-gray-100 shadow-sm text-foreground rounded-tl-none"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                    <span className="text-xs text-gray-500 mt-1 block text-right">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))}
                {isLoading && (
                  <div className="mr-auto bg-white border border-gray-100 shadow-sm text-foreground rounded-2xl rounded-tl-none mb-4 max-w-[80%] p-3">
                    <div className="flex space-x-2">
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce"></div>
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                      <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Feature suggestions */}
              {showFeatures && (
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-2">
                    {features.map((feature) => (
                      <button
                        key={feature.name}
                        onClick={() => insertFeatureCommand(feature.name)}
                        className="bg-gray-100 hover:bg-gray-200 text-xs rounded-full px-3 py-1.5 flex items-center"
                        title={feature.description}
                      >
                        @{feature.name.toLowerCase()}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input area */}
              <div className="p-4 border-t border-gray-100">
                <div className="relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    className="pr-24 py-6"
                  />
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 flex space-x-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowFeatures(!showFeatures)}
                      className="h-8 w-8 text-gray-500"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleSpeechRecognition}
                      className="h-8 w-8 text-gray-500"
                    >
                      <Mic className="h-4 w-4" />
                    </Button>
                    <Button
                      onClick={handleSendMessage}
                      className="h-8 w-8 bg-primary-indigo hover:bg-primary-indigo/90"
                      size="icon"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

// Custom icons
const MessageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 11.5C21 16.1944 16.9706 20 12 20C10.9481 20 9.93834 19.8436 9 19.5539M12 20C7.02944 20 3 16.1944 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 13C9 13 10 15 12 15C14 15 15 13 15 13"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M9 9H9.01"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 9H15.01"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EinsteinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 18C5.5 16.5 5 14.5 5 12C5 7.02944 9.02944 3 14 3C18.9706 3 23 7.02944 23 12C23 16.9706 18.9706 21 14 21C12.5 21 11.5 20.5 10.5 20L7 22L7 18Z"
      stroke="#5D5FEF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 9.5H10.01"
      stroke="#5D5FEF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 9.5H18.01"
      stroke="#5D5FEF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 17C14 17 16 15 16 14.5C16 14 15.5 13.5 15 13.5C14.5 13.5 14 14 14 14.5C14 15 13.5 15.5 13 15.5C12.5 15.5 12 15 12 14.5C12 14 12 12 14 12"
      stroke="#5D5FEF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChatInterface;


import React from "react";
import { 
  FileText, 
  Image, 
  Code, 
  ChevronRight, 
  Sparkles, 
  Brain, 
  Calculator, 
  BookOpen,
  Lightbulb,
  Ruler
} from "lucide-react";

interface MentionTool {
  id: string;
  icon: React.ElementType;
  name: string;
  description: string;
}

interface MentionSuggestionsProps {
  isVisible: boolean;
  onSelect: (toolId: string) => void;
  searchTerm?: string;
}

const MentionSuggestions: React.FC<MentionSuggestionsProps> = ({
  isVisible,
  onSelect,
  searchTerm = ""
}) => {
  const mentionTools: MentionTool[] = [
    {
      id: "problem_solver",
      icon: Calculator,
      name: "Problem Solver",
      description: "Solve step-by-step math, physics, or chemistry problems"
    },
    {
      id: "concept_explainer",
      icon: Brain,
      name: "Concept Explainer", 
      description: "Get detailed explanations of scientific concepts"
    },
    {
      id: "formula_sheet",
      icon: FileText,
      name: "Formula Sheet",
      description: "Generate a reference sheet of relevant formulas"
    },
    {
      id: "quiz_generator",
      icon: Sparkles,
      name: "Quiz Generator",
      description: "Create practice questions on any topic"
    },
    {
      id: "visualize",
      icon: Image,
      name: "Visualize",
      description: "Create diagrams and interactive visualizations"
    },
    {
      id: "code_simulator",
      icon: Code,
      name: "Code Simulator",
      description: "Simulate scientific principles with code"
    },
    {
      id: "study_plan",
      icon: BookOpen,
      name: "Study Plan",
      description: "Generate a personalized study plan"
    },
    {
      id: "topic_insight",
      icon: Lightbulb,
      name: "Topic Insight",
      description: "Get deeper insights on a specific topic"
    },
    {
      id: "unit_converter",
      icon: Ruler,
      name: "Unit Converter",
      description: "Convert between different units of measurement"
    }
  ];

  if (!isVisible) return null;

  const filteredTools = searchTerm 
    ? mentionTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        tool.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : mentionTools;

  return (
    <div className="absolute bottom-full left-0 w-full bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden max-h-72 overflow-y-auto z-20">
      <div className="p-2 border-b border-gray-100 bg-gray-50">
        <p className="text-xs text-gray-500">Select a tool or continue typing</p>
      </div>
      <div className="p-1">
        {filteredTools.map((tool) => (
          <div 
            key={tool.id}
            className="flex items-center px-3 py-2 hover:bg-gray-50 rounded cursor-pointer"
            onClick={() => onSelect(tool.id)}
          >
            <div className="h-8 w-8 rounded-md bg-primary-indigo/10 flex items-center justify-center mr-3 flex-shrink-0">
              <tool.icon className="h-4 w-4 text-primary-indigo" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{tool.name}</p>
              <p className="text-xs text-gray-500 truncate">{tool.description}</p>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentionSuggestions;

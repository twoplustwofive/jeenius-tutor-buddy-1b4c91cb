
import React from "react";
import { ArrowLeft, X, Code, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VisualizationCanvasProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  visualizationType?: string;
  content?: React.ReactNode;
}

const VisualizationCanvas: React.FC<VisualizationCanvasProps> = ({
  title,
  isOpen,
  onClose,
  visualizationType = "default",
  content
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-2/5 bg-white shadow-lg border-l border-gray-200 z-30 flex flex-col overflow-hidden">
      <div className="flex items-center border-b border-gray-200 p-4">
        <Button variant="ghost" size="icon" onClick={onClose} className="mr-2">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h3 className="font-medium flex-1">{title}</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs">
            <Code className="h-3 w-3" />
            <span>Code</span>
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-1 text-xs">
            <Download className="h-3 w-3" />
            <span>Download</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-6">
        {content || (
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="bg-gray-100 rounded-lg p-8 max-w-md">
              <h2 className="text-xl font-bold mb-4">Newton's Laws Interactive Visualizations</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">First Law: Inertia</h3>
                <p className="text-gray-700 mb-4">An object in motion stays in motion unless acted upon by an external force.</p>
                <div className="bg-blue-50 h-20 rounded-md flex justify-end items-center p-4 relative">
                  <div className="absolute right-4 w-8 h-8 bg-red-500 rounded-full"></div>
                </div>
                <div className="mt-2 flex justify-center">
                  <Button className="bg-blue-500 hover:bg-blue-600">Apply Force</Button>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">Second Law: F = ma</h3>
                <p className="text-gray-700 mb-2">The acceleration of an object depends on the force applied and the object's mass.</p>
                
                <div className="flex items-center mb-2">
                  <span className="mr-2 text-sm">Force:</span>
                  <div className="h-2 bg-blue-200 rounded-full flex-1 mr-2">
                    <div className="h-2 w-1/3 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-sm">6 N</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-100 p-4 rounded-md flex items-center justify-between">
                    <span className="text-sm">Force</span>
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Small Mass</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-md flex items-center justify-between">
                    <span className="text-sm">Force</span>
                    <div className="w-10 h-10 bg-green-700 rounded-full"></div>
                    <span className="text-sm">Large Mass</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Third Law: Action & Reaction</h3>
                <p className="text-gray-700 mb-4">For every action, there is an equal and opposite reaction.</p>
                <div className="bg-gray-800 h-32 rounded-md flex justify-center items-center">
                  <div className="w-16 h-20 bg-gray-400 rounded-md relative">
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-blue-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 p-3 text-xs text-gray-500 flex justify-between items-center">
        <span>Last edited just now</span>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="h-7 text-xs">
            <span>Publish</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VisualizationCanvas;


import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const Analytics: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600">Track your performance and progress over time.</p>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
        <h3 className="text-lg font-medium mb-2">Analytics page is under construction</h3>
        <p className="text-gray-500">The full functionality will be available soon.</p>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;

// Dashboard Page – admin view
// Implements the required sections using mock data from AdminMockData.js

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";


const StatCard = ({ title, value, description, Icon }) => (
  <Card className="bg-surface-container-low rounded-[12px] shadow-[0_4px_20px_rgba(37,99,235,0.04)] hover:shadow-[0_6px_24px_rgba(37,99,235,0.06)]">
    <CardHeader className="flex flex-row items-center justify-between">
      <div>
        <CardTitle className="text-lg font-medium text-gray-900">
          {title}
        </CardTitle>
        <CardDescription className="text-2xl font-bold text-gray-800 mt-1">
          {value}
        </CardDescription>
        {description && (
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        )}
      </div>
      <Icon className="size-8 text-primary" />
    </CardHeader>
  </Card>
);

export default StatCard;

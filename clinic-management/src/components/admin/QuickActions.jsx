// Dashboard Page – admin view
// Implements the required sections using mock data from AdminMockData.js

import { Button } from "@/components/ui/button";

const QuickActions = () => (
  <div className="flex gap-4">
    <Button variant="outline" size="default">
      Add Patient
    </Button>
    <Button variant="outline" size="default">
      Add Doctor
    </Button>
    <Button variant="outline" size="default">
      View Appointments
    </Button>
  </div>
);

export default QuickActions;

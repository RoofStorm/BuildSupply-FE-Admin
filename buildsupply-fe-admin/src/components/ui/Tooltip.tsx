// components/CustomTooltip.tsx

import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../lib/tooltip";

interface CustomTooltipProps {
  children: ReactNode; // Component to wrap
  content: ReactNode;  // Tooltip text or JSX content
}

export default function TooltipUI({ children, content }: CustomTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

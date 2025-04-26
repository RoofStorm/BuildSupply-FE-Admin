import { Button } from "../lib/button"
import { Pencil, Trash2, Eye } from "lucide-react";
import { MouseEventHandler } from "react";
import TooltipUI from "./Tooltip";

type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?:string;
};

export const EditButton = ({ onClick, className }: ButtonProps) => {
  return <TooltipUI content="Edit">
    <Button size="icon" onClick={onClick} className={className}>
      <Pencil />
    </Button>
  </TooltipUI>
}

export const DeleteButton = ({ onClick, className }: ButtonProps) => {
  return <TooltipUI content="Delete">
    <Button size="icon" onClick={onClick} className={className}>
      <Trash2 />
    </Button>
  </TooltipUI>
}

export const ViewButton = ({ onClick, className }: ButtonProps) => {
  return <TooltipUI content="View">
    <Button size="icon" onClick={onClick} className={className}>
      <Eye />
    </Button>
  </TooltipUI>
}
import { LucideIcon } from "lucide-react";

export type InputGroupTypes = {
    type: string;
    required: boolean;
    label: string;
    Icon: LucideIcon;
}

export type ButtonTypes = {
    isLink: boolean;
    content: string;
    navTo?: string;
}
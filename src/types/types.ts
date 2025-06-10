export interface Skip {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

export interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: (skip: Skip) => void;
  viewMode: "card" | "list";
}

export interface SkipSizeHelperProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SkipSummaryProps {
  skip: Skip | null;
  onContinue: () => void;
  onBack: () => void;
}

export interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export interface FAQProps {
  className?: string;
}

export interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

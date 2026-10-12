export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  iconName: 'car' | 'userCheck' | 'plane' | 'package' | 'compass' | 'building';
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  linkText: string;
  iconName: 'pin' | 'check' | 'navigation';
}

export interface RouteItem {
  id: string;
  from: string;
  to: string;
  tag: string;
  linkText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

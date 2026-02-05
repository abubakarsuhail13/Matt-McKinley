
// Import React to resolve React namespace in types
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}
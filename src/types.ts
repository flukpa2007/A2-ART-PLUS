import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string[];
  image: string;
  gallery: string[];
  article: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  images: string[];
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

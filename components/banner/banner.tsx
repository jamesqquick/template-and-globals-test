'use client';
import { useSettings } from '@/contexts/settings';
import React from 'react';

export default function Banner({ content }: { content: React.ReactNode }) {
  const { showBanner } = useSettings();
  return <div>{showBanner && content}</div>;
}

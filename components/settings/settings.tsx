'use client';
import { useSettings } from '@/contexts/settings';
import React, { useEffect } from 'react';

export default function Settings({ showBanner }: { showBanner: boolean }) {
  const { setShowBanner } = useSettings();

  useEffect(() => {
    setShowBanner(showBanner);
  }, [showBanner, setShowBanner]);
  return <div></div>;
}

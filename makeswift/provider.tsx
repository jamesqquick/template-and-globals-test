'use client';

import { runtime } from '@/makeswift/runtime';
import {
  ReactRuntimeProvider,
  RootStyleRegistry,
} from '@makeswift/runtime/next';
import '@/makeswift/components';
import '@/components/banner/banner.makeswift';

export function MakeswiftProvider({
  children,
  previewMode,
}: {
  children: React.ReactNode;
  previewMode: boolean;
}) {
  return (
    <ReactRuntimeProvider runtime={runtime} previewMode={previewMode}>
      <RootStyleRegistry>{children}</RootStyleRegistry>
    </ReactRuntimeProvider>
  );
}

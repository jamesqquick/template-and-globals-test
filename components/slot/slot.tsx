import React from 'react';

export default function MySlot({ content }: { content: React.ReactNode }) {
  return <div className="bg-gray-100">{content}</div>;
}

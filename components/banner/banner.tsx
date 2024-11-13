import React from 'react';

export default function Banner({ content }: { content: React.ReactNode }) {
  return <div className="bg-gray-100">{content}</div>;
}

import { NextRequest } from 'next/server';

import { MakeswiftApiHandler } from '@makeswift/runtime/next/server';
import { getAPIKey } from '@/makeswift/client';
import { runtime } from '@/makeswift/runtime';

type Context = {
  params: {
    [key: string]: string;
  };
};
type MakeswiftApiHandlerArgs = [NextRequest, Context];

const handler = async (...args: MakeswiftApiHandlerArgs) => {
  const host = await args[0].headers.get('host');
  if (!host) {
    throw new Error('Host header is missing');
  }

  return MakeswiftApiHandler(getAPIKey(host), {
    runtime,
  })(...args);
};

export { handler as GET, handler as POST };

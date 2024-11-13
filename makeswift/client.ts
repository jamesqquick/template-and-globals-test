import { Makeswift } from '@makeswift/runtime/next';
import { strict } from 'assert';
import { z } from 'zod';

import { runtime } from './runtime';

export const TEMPLATE_DOMAIN = 'localhost:3001';

export const HOST_API_KEYS = {
  'localhost:3000': process.env.MAKESWIFT_SITE_API_KEY,
  [TEMPLATE_DOMAIN]: process.env.MAKESWIFT_TEMPLATE_API_KEY,
};

const HostSchema = z.enum(
  Object.keys(HOST_API_KEYS) as [keyof typeof HOST_API_KEYS]
);

export function getAPIKey(host: string): string {
  strict(process.env.MAKESWIFT_SITE_API_KEY, 'MAKESWIFT_SITE_API_KEY required');

  const decodedURL = HostSchema.parse(decodeURIComponent(host));

  return HOST_API_KEYS[decodedURL] ?? process.env.MAKESWIFT_SITE_API_KEY;
}

export class MultiTenantMakeswift extends Makeswift {
  constructor(host: string) {
    super(getAPIKey(host), { runtime });
  }
}

strict(
  process.env.MAKESWIFT_TEMPLATE_API_KEY,
  'MAKESWIFT_TEMPLATE_API_KEY required'
);

export const templateClient = new Makeswift(
  process.env.MAKESWIFT_TEMPLATE_API_KEY,
  {
    runtime,
  }
);

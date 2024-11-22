import { Makeswift } from '@makeswift/runtime/next';
import { strict } from 'assert';
import { z } from 'zod';

import { runtime } from './runtime';

export const TEMPLATE_DOMAIN = 'localhost:3010';

export const HOST_API_KEYS = {
  'localhost:3005': process.env.MAKESWIFT_SITE2_API_KEY,
  'localhost:3006': process.env.MAKESWIFT_SITE1_API_KEY,
  [TEMPLATE_DOMAIN]: process.env.MAKESWIFT_TEMPLATE_API_KEY,
};

const HostSchema = z.enum(
  Object.keys(HOST_API_KEYS) as [keyof typeof HOST_API_KEYS]
);

strict(process.env.MAKESWIFT_SITE1_API_KEY, 'MAKESWIFT_SITE1_API_KEY required');
strict(process.env.MAKESWIFT_SITE2_API_KEY, 'MAKESWIFT_SITE2_API_KEY required');
strict(
  process.env.MAKESWIFT_TEMPLATE_API_KEY,
  'MAKESWIFT_TEMPLATE_API_KEY required'
);
export function getAPIKey(host: string): string {
  const decodedURL = HostSchema.parse(decodeURIComponent(host));

  return HOST_API_KEYS[decodedURL] ?? process.env.MAKESWIFT_SITE_API_KEY;
}

export const templateClient = new Makeswift(getAPIKey(TEMPLATE_DOMAIN), {
  runtime,
});

export class MultiTenantMakeswift extends Makeswift {
  constructor(host: string) {
    super(getAPIKey(host), { runtime });
  }
}

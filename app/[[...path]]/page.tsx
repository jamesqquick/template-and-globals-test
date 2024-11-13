import { getSiteVersion } from '@makeswift/runtime/next/server';
import { notFound } from 'next/navigation';
import { Page as MakeswiftPage } from '@makeswift/runtime/next';

import { HOST_API_KEYS, MultiTenantMakeswift } from '@/makeswift/client';
import { headers } from 'next/headers';

// Recommend only generating the most important domains as this could slow down the build
const domains = Object.keys(HOST_API_KEYS);

export async function generateStaticParams() {
  return domains.flatMap(async (domain) => {
    const client = new MultiTenantMakeswift(domain);
    const pages = await client.getPages().toArray();
    return pages.map((page) => {
      return {
        host: domain,
        path: page.path.split('/').filter((segment) => segment !== ''),
      };
    });
  });
}

export default async function Page({
  params,
}: {
  params: { host: string; path?: string[] };
}) {
  const headersList = await headers();
  const host = headersList.get('host');

  if (host == null) return notFound();

  const path = '/' + ((await params)?.path ?? []).join('/');

  const client = new MultiTenantMakeswift(host);
  const snapshot = await client.getPageSnapshot(path, {
    siteVersion: getSiteVersion(),
  });

  if (snapshot == null) return notFound();

  return <MakeswiftPage snapshot={snapshot} />;
}

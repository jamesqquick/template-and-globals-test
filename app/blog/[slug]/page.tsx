import { MY_BANNER_TYPE } from '@/components/banner/banner.makeswift';
import { MultiTenantMakeswift, TEMPLATE_DOMAIN } from '@/makeswift/client';
import { MakeswiftComponent } from '@makeswift/runtime/next';
import { getSiteVersion } from '@makeswift/runtime/next/server';
import React from 'react';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log(slug);

  const templateClient = new MultiTenantMakeswift(TEMPLATE_DOMAIN);
  const myBannerSnapshot = await templateClient.getComponentSnapshot(
    `my-banner-id`,
    {
      siteVersion: await getSiteVersion(),
    }
  );

  return (
    <div>
      <MakeswiftComponent
        snapshot={myBannerSnapshot}
        label={`My Banner`}
        type={MY_BANNER_TYPE}
      />
      <div className="p-40 bg-[#0d022c]">
        <h1 className="text-4xl mb-2 text-white">{slug}</h1>
        <p className="text-white">
          Here's a bunch of stuff I wrote about this topic
        </p>
      </div>
    </div>
  );
}

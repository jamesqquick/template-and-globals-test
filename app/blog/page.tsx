import { MY_BANNER_TYPE } from '@/components/banner/banner.makeswift';
import { templateClient } from '@/makeswift/client';
import { getSiteVersion } from '@makeswift/runtime/next/server';
import { MakeswiftComponent } from '@makeswift/runtime/next';

export default async function page() {
  const myBannerSnapshot = await templateClient.getComponentSnapshot(
    `my-banner-id`,
    {
      siteVersion: await getSiteVersion(),
    }
  );

  return (
    <div>
      <h1>Blog</h1>
      <MakeswiftComponent
        snapshot={myBannerSnapshot}
        label={`My Banner`}
        type={MY_BANNER_TYPE}
      />
    </div>
  );
}

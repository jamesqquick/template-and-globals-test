import { MultiTenantMakeswift, TEMPLATE_DOMAIN } from '@/makeswift/client';
import { getSiteVersion } from '@makeswift/runtime/next/server';
import { MakeswiftComponent } from '@makeswift/runtime/next';
import { MY_BANNER_TYPE } from '@/components/banner/banner.makeswift';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

export default async function Page() {
  const headersList = await headers();
  const host = headersList.get('host');

  if (host == null || host !== TEMPLATE_DOMAIN) return notFound();

  const templateClient = new MultiTenantMakeswift(TEMPLATE_DOMAIN);
  const myBannerSnapshot = await templateClient.getComponentSnapshot(
    `my-banner-id`,
    {
      siteVersion: await getSiteVersion(),
    }
  );
  console.log(myBannerSnapshot);

  return (
    <div>
      <h1>Template Page</h1>
      <MakeswiftComponent
        snapshot={myBannerSnapshot}
        label={`My Banner`}
        type={MY_BANNER_TYPE}
      />
    </div>
  );
}

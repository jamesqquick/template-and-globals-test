import { MultiTenantMakeswift, TEMPLATE_DOMAIN } from '@/makeswift/client';
import { getSiteVersion } from '@makeswift/runtime/next/server';
import { MakeswiftComponent } from '@makeswift/runtime/next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { MY_SLOT_TYPE } from '@/components/slot/slot.makeswift';
import { MY_SETTINGS_TYPE } from '@/components/settings/settings.makeswift';
import { MY_BANNER_TYPE } from '@/components/banner/banner.makeswift';

export default async function page() {
  const templateClient = new MultiTenantMakeswift(TEMPLATE_DOMAIN);
  const myBannerSnapshot = await templateClient.getComponentSnapshot(
    `my-banner-id`,
    {
      siteVersion: await getSiteVersion(),
    }
  );
  const headersList = await headers();
  const host = headersList.get('host');

  if (host == null) return notFound();

  const client = new MultiTenantMakeswift(host);
  const mySlotSnapshot = await client.getComponentSnapshot(`my-slot-id-1`, {
    siteVersion: await getSiteVersion(),
  });

  const mySettings = await client.getComponentSnapshot(`my-settings`, {
    siteVersion: await getSiteVersion(),
  });

  const mySlotSnapshot2 = await client.getComponentSnapshot(`my-slot-id-2`, {
    siteVersion: await getSiteVersion(),
  });
  return (
    <div>
      <MakeswiftComponent
        snapshot={mySettings}
        label={`My Settings`}
        type={MY_SETTINGS_TYPE}
      />
      <MakeswiftComponent
        snapshot={myBannerSnapshot}
        label={`My Banner`}
        type={MY_BANNER_TYPE}
      />

      <MakeswiftComponent
        snapshot={mySlotSnapshot}
        label={`My Slot`}
        type={MY_SLOT_TYPE}
      />
      <MakeswiftComponent
        snapshot={mySlotSnapshot2}
        label={`My Slot 2`}
        type={MY_SLOT_TYPE}
        fallback={
          <p className="p-10 rounded-lg bg-gray-100">My Slot 2 fallback</p>
        }
      />
    </div>
  );
}

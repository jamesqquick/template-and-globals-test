import { MakeswiftComponent } from '@makeswift/runtime/next';
import { getSiteVersion } from '@makeswift/runtime/next/server';
import { MY_CONTAINER_TYPE } from '@/components/container/my-container.makeswift';
import { templateClient } from '@/makeswift/client';

export default async function Page() {
  const myContainerSnapshot = await templateClient.getComponentSnapshot(
    `my-container-id`, //id of the component rendered on the page
    {
      siteVersion: await getSiteVersion(),
    }
  );

  return (
    <MakeswiftComponent
      snapshot={myContainerSnapshot}
      label={`My Container`}
      type={MY_CONTAINER_TYPE}
    />
  );
}

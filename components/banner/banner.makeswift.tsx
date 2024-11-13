import { runtime } from '@/makeswift/runtime';
import { Slot } from '@makeswift/runtime/controls';
import Banner from './banner';

export const MY_BANNER_TYPE = 'my-banner';

runtime.registerComponent(Banner, {
  type: MY_BANNER_TYPE,
  label: 'My Banner',
  props: {
    content: Slot(),
  },
});

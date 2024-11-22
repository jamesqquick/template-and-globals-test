import { runtime } from '@/makeswift/runtime';
import { Slot } from '@makeswift/runtime/controls';
import MyContainer from './my-container';

export const MY_CONTAINER_TYPE = 'my-container';

runtime.registerComponent(MyContainer, {
  type: MY_CONTAINER_TYPE,
  label: 'My Container',
  props: {
    content: Slot(),
  },
});

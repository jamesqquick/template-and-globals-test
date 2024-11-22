import { runtime } from '@/makeswift/runtime';
import { Slot } from '@makeswift/runtime/controls';
import MySlot from './slot';

export const MY_SLOT_TYPE = 'my-slot';

runtime.registerComponent(MySlot, {
  type: MY_SLOT_TYPE,
  label: 'My Slot',
  props: {
    content: Slot(),
  },
});

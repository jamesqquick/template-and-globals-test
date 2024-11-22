import { runtime } from '@/makeswift/runtime';
import { Checkbox } from '@makeswift/runtime/controls';
import MyContainer from './settings';

export const MY_SETTINGS_TYPE = 'my-settings';

runtime.registerComponent(MyContainer, {
  type: MY_SETTINGS_TYPE,
  label: 'My Settings',
  props: {
    showBanner: Checkbox({ label: 'Show Banner', defaultValue: false }),
  },
});

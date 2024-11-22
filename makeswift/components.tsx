import { runtime } from '@/makeswift/runtime';
import { Style } from '@makeswift/runtime/controls';
import '@/components/banner/banner.makeswift';
import '@/components/slot/slot.makeswift';
import '@/components/container/my-container.makeswift';
import '@/components/settings/settings.makeswift';
function HelloWorld(props) {
  return <p {...props}>Hello, world!</p>;
}

runtime.registerComponent(HelloWorld, {
  type: 'hello-world',
  label: 'Hello, world!',
  props: {
    className: Style(),
  },
});

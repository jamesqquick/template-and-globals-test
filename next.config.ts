import createWithMakeswift from '@makeswift/runtime/next/plugin';

const withMakeswift = createWithMakeswift();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your existing next config
};

export default withMakeswift(nextConfig);

import createWithMakeswift from '@makeswift/runtime/next/plugin';

const withMakeswift = createWithMakeswift();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your existing next config
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
};

export default withMakeswift(nextConfig);

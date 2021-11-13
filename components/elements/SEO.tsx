import Head from 'next/head';

const SEO = () => {
  return (
    <Head>
      <title>Meta Tags Clone</title>
      <meta name="description" content="A partial metatags.io clone" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="title" content="A partial metatags.io clone" />
      <meta
        name="description"
        content="This is a partial metatags.io clone of their frontend"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vercel.app/" />
      <meta property="og:title" content="A partial metatags.io clone" />
      <meta
        property="og:description"
        content="This is a partial metatags.io clone of their frontend"
      />
      <meta property="og:image" content="./assets/metatags-image.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://vercel.app/" />
      <meta property="twitter:title" content="A partial metatags.io clone" />
      <meta
        property="twitter:description"
        content="This is a partial metatags.io clone of their frontend"
      />
      <meta property="twitter:image" content="./assets/metatags-image.png" />
    </Head>
  );
};

export default SEO;

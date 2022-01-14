import Document, { Html, Head, Main, NextScript } from "next/document";

class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/public/fonts/GalanoGrotesque/galanogrotesque-regular.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/public/fonts/GalanoGrotesque/galanogrotesque-medium.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/public/fonts/GalanoGrotesque/galanogrotesque-semibold.otf"
            as="font"
            crossOrigin=""
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;

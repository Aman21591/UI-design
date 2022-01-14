import Head from "next/head";
import "tailwindcss/tailwind.css";
import "./../Styling/fonts-face.css";
import StructureLayout from "../Common-Component/StructureLayout";
function _App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Dukaan - Frontend Assignment</title>
        <meta
          name="description"
          content="Homepage for concept slogan generator."
        />
        <link rel="shortcut icon" href="/public/logo.svg" type="image/x-icon" />
      </Head>

      <StructureLayout>
        <Component {...pageProps} />
      </StructureLayout>
    </>
  );
}
export default _App;

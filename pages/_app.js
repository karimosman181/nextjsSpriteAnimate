import Link from "next/link";

import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

//gsap cssplugin
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(CSSPlugin);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

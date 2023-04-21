import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import "prismjs/themes/prism-tomorrow.css";
import LoadingBar from "react-top-loading-bar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });

    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router]);

  return (
    <React.Fragment>
      <LoadingBar
        color="#ef4444"
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar /> <Component {...pageProps} />
    </React.Fragment>
  );
}

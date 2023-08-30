import "@styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

import { DefaultLayout } from "@layouts/DefaultLayout";
import { MainLayout } from "@layouts/MainLayout";
import {
  TransitionLayout,
  TransitionLayout as TransitionLayoutStatic,
} from "@layouts/TransitionLayout";
import { ThemeProvider as ThemeProviderStatic } from "@material-tailwind/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ToastContainer as ToastContainerStatic } from "react-toastify";

/**
 * Default layout for page component
 */

const ThemeProvider = dynamic<React.ComponentProps<typeof ThemeProviderStatic>>(
  () =>
    import("@material-tailwind/react/context/theme").then(
      (data) => data.ThemeProvider
    )
);

const ToastContainer = dynamic<
  React.ComponentProps<typeof ToastContainerStatic>
>(() => import("react-toastify").then((data) => data.ToastContainer), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as IPageComponent).getLayout ||
    ((children) => <DefaultLayout>{children}</DefaultLayout>);

  const PageContent = Component as IPageComponent;

  return (
    <ThemeProvider value={undefined}>
      <MainLayout>
        <TransitionLayout>
          {getLayout(<PageContent {...pageProps} />)}
        </TransitionLayout>
      </MainLayout>
      <ToastContainer position="bottom-right" autoClose={3000} pauseOnHover />
    </ThemeProvider>
  );
}

export default MyApp;

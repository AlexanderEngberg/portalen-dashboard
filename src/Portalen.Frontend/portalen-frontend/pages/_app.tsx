import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import AppLayout from "components/layout/AppLayout";
import { theme } from "../styles/theme";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

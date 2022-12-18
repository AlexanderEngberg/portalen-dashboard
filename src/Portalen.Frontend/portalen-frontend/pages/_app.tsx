import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import AppLayout from "components/layout/AppLayout";
import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import "styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

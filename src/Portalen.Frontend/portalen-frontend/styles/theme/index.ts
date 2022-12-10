import { createTheme } from "@mui/material";

export const Colors = {
    primary: "#262b40",
    secondary: "#f5f8fb"
  };

export const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: Colors.primary
            }
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: Colors.primary
                }
            }
        }
    }
});
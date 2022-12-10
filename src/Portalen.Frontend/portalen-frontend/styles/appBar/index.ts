import {
    AppBar
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const PortalAppBar = styled(AppBar)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        display: "none"
    }
}));
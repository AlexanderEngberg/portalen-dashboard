import {
    Drawer
} from "@mui/material";
import { styled, Theme, CSSObject } from "@mui/material/styles";

const drawerWidth = 240;
const drawerFullWidth = "100%";

const fullMixin = (theme: Theme): CSSObject => ({
  width: drawerFullWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

export const PortalDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    ...(!open && {
      ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
    "&:hover": {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme)
    },
    [theme.breakpoints.down('sm')]: {
        display: "none"
    }
    }),
    ...(open && {
      ...fullMixin(theme),
      "& .MuiDrawer-paper": fullMixin(theme)
    })
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
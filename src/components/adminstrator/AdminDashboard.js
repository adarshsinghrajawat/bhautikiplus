import { useState } from "react";
import {
  Avatar,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  Drawer,
  IconButton,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import YardIcon from "@mui/icons-material/Yard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu"; // Add menu icon for mobile view
import { ServerURL } from "../services/ServerServices";

// Placeholder for the sections' content
import Courses from "./Courses";
import Result from "./Result";
import Gallery from "./Gallery";
import MainCategory from "./MainCategory";
import Team from "./Team";
import DisplayAllMainCategory from "./DisplayAllMainCategory";
import DisplayAllTeam from "./DisplayAllTeam";

export default function AdminDashboard() {
  const admin = JSON.parse(localStorage?.getItem("ADMIN"));
  const [activeComponent, setActiveComponent] = useState(<MainCategory />);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for toggling drawer

  const theme = useTheme(); // Using theme for consistency with Material-UI's color system

  const navigationItems = [
    { label: "Dashboard", icon: <DashboardIcon />, component: <MainCategory /> },
    { label: "Category List", icon: <CategoryIcon />, component: <DisplayAllMainCategory /> },
    { label: "Team List", icon: <CategoryIcon />, component: <DisplayAllTeam /> },
    { label: "Main Category Form", icon: <YardIcon />, component: <MainCategory /> },
    { label: "Team Form", icon: <ShoppingCartIcon />, component: <Team /> },
    { label: "Courses", icon: <AddShoppingCartIcon />, component: <Courses /> },
    { label: "Results", icon: <AddShoppingCartIcon />, component: <Result /> },
    { label: "Gallery", icon: <SummarizeIcon />, component: <Gallery /> },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar with Black Gradient */}
      <AppBar position="sticky" sx={{ background: "linear-gradient(45deg, #000000, #434343)", boxShadow: 5 }}>
        <Toolbar>
          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}>
            Bhautiki Plus+ Admin Dashboard
          </Typography>

          <Button
            color="inherit"
            startIcon={<ExitToAppIcon />}
            onClick={() => console.log("Logging out...")}
            sx={{ fontSize: "1.1rem" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          display: { xs: "block", sm: "none" },
        }}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Avatar
              src={`${ServerURL}/static/${admin?.picture}`}
              sx={{
                width: 100,
                height: 100,
                margin: "0 auto",
                mb: 2,
                backgroundColor:'#000',
                border: `5px solid ${theme.palette.primary.main}`,
                boxShadow: 3,
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3f51b5" }}>
              {admin?.adminname}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {admin?.emailid}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              +91 {admin?.mobileno}
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <List>
            {navigationItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => setActiveComponent(item.component)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      fontWeight: "bold",
                      color: theme.palette.primary.dark,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Layout */}
      <Grid container spacing={3} sx={{ padding: 3 }}>
        {/* Sidebar - Visible on Medium and larger screens */}
        <Grid item xs={12} sm={3} sx={{ display: { xs: "none", sm: "block" } }}>
          <Paper elevation={6} sx={{ padding: 3, borderRadius: "15px", boxShadow: 3 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Avatar
                src={`${ServerURL}/static/${admin?.picture}`}
                sx={{
                  width: 100,
                  height: 100,
                  margin: "0 auto",
                  mb: 2,
                  border: `5px solid ${theme.palette.primary.main}`,
                  boxShadow: 3,
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: "bold", color: theme.palette.primary.main }}>
                {admin?.adminname}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {admin?.emailid}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                +91 {admin?.mobileno}
              </Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <List>
              {navigationItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => setActiveComponent(item.component)}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#f5f5f5",
                        borderRadius: "10px",
                      },
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.primary.dark,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} sm={9}>
          <Paper
            elevation={6}
            sx={{
              padding: 3,
              borderRadius: "15px",
              minHeight: "80vh",
              boxShadow: 3,
              backgroundColor: "#f9f9f9",
            }}
          >
            {activeComponent}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import logo1 from "../../../src/assets/logo1.png";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function Header() {
  const theme = useTheme();
  const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [tabsVisible, setTabsVisible] = useState([]);

  const [anchorElCourses, setAnchorElCourses] = React.useState(null); // For Courses menu
  const [anchorElResults, setAnchorElResults] = React.useState(null); // For Results menu
  const [anchorElGallery, setAnchorElGallery] = React.useState(null);

  const openCourses = Boolean(anchorElCourses);
  const openResults = Boolean(anchorElResults);
  const openGallery = Boolean(anchorElGallery);

  const handleCoursesClick = (event) => {
    setAnchorElCourses(event.currentTarget);
  };

  const handleResultsClick = (event) => {
    setAnchorElResults(event.currentTarget);
  };

  const handleGalleryClick = (event) => setAnchorElGallery(event.currentTarget);

  const handleClose = () => {
    setAnchorElCourses(null);
    setAnchorElResults(null);
    setAnchorElGallery(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Trigger the fade-in effect when the component mounts
  useEffect(() => {
    const timeouts = [];
    const newTabsVisible = [];
    const tabCount = 6; // total number of tabs (excluding replaced menu tabs)

    for (let i = 0; i < tabCount; i++) {
      timeouts.push(
        setTimeout(() => {
          newTabsVisible.push(i); // make tab visible
          setTabsVisible([...newTabsVisible]);
        }, 200 * (i + 1)) // delay each tab by 200ms
      );
    }

    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);

  const tabStyles = (index, tabsVisible) => ({
    color: "#fff",
    fontFamily: "Josefin Sans",
    opacity: tabsVisible.includes(index) ? 1 : 0,
    transform: tabsVisible.includes(index) ? "scale(1)" : "scale(0)",
    transition: "opacity 1s ease, transform 1s ease",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#FFD700",
    },
  });
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(90deg, rgba(177,219,231,1) 32%, rgba(212,235,240,1) 70%, rgba(217,179,84,1) 94%)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center", padding: "0.8em" }}>
          <img
            src={logo1}
            alt="Navbar Logo"
            style={{ maxHeight: "60px", maxWidth: "100%" }}
          />
        </Toolbar>
      </AppBar>
  
      <AppBar style={{ background: "#000" }} position="static">
        <Toolbar>
          {sm_matches ? (
            <MenuIcon />
          ) : (
            <Tabs
            
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              aria-label="scrollable prevent tabs example"
              sx={{ width: "100%" }}
            >
              {/* Tabs with consistent transition styles */}
              <Tab
                icon={<HomeIcon />}
                label="Home"
                onClick={() => navigate("/home")}
                sx={tabStyles(0, tabsVisible)}
              />
              <Tab
                icon={<GroupsIcon />}
                label="Team"
                onClick={() => navigate("/teamhome")}
                sx={tabStyles(1, tabsVisible)}
              />
              <Tab
                icon={<MenuBookIcon />}
                label="Courses"
                onClick={handleCoursesClick}
                sx={tabStyles(2, tabsVisible)}
              />
              <Tab
                icon={<ReceiptLongIcon />}
                label="Results"
                onClick={handleResultsClick}
                sx={tabStyles(3, tabsVisible)}
              />
            <Tab
  icon={<AutoAwesomeMotionIcon />}
  label="Gallery"
  onClick={handleGalleryClick}
  sx={tabStyles(4, tabsVisible)}
/>

              <Tab
                icon={<ContactPhoneIcon />}
                label="Contact Us"
                sx={tabStyles(5, tabsVisible)}
                onClick={() => navigate("/googlemap")}
              />
  
              {/* Menus for Courses and Results */}
              <Menu
  id="fade-menu-courses"
  MenuListProps={{
    "aria-labelledby": "fade-button",
    style: {
      padding: "0.5em",
      backgroundColor: "#333",
      //borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  }}
  anchorEl={anchorElCourses}
  open={openCourses}
  onClose={handleClose}
  TransitionComponent={Fade}
>
  <MenuItem
    style={{
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      padding: "0.8em 1.5em",
      color: "#fff",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "transparent")
    }
    onClick={() => navigate("/iitjee")}
  >
    IIT JEE
  </MenuItem>
  <MenuItem
    style={{
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      padding: "0.8em 1.5em",
      color: "#fff",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "transparent")
    }
    onClick={() => navigate("/neet")}
  >
    NEET
  </MenuItem>
  <MenuItem
    style={{
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      padding: "0.8em 1.5em",
      color: "#fff",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "transparent")
    }
    onClick={() => navigate("/foundation")}
  >
    Foundation (Class IX & X)
  </MenuItem>
  <MenuItem
    style={{
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      padding: "0.8em 1.5em",
      color: "#fff",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "transparent")
    }
    onClick={() => navigate("/onlinetablet")}
  >
    Online Tablet Course
  </MenuItem>
</Menu>

  
<Menu
  id="fade-menu-results"
  MenuListProps={{
    "aria-labelledby": "fade-button",
    style: {
      padding: "0.5em",
      backgroundColor: "#333",
     // borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  }}
  anchorEl={anchorElResults}
  open={openResults}
  onClose={handleClose}
  TransitionComponent={Fade}
>
  <MenuItem
    style={{
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      padding: "0.8em 1.5em",
      color: "#fff",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "transparent")
    }
    onClick={() => navigate("/iitresult")}
  >
    IIT-JEE
  </MenuItem>
  <MenuItem
    style={{
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      padding: "0.8em 1.5em",
      color: "#fff",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "transparent")
    }
    onClick={() => navigate("/neetresult")}
  >
    NEET
  </MenuItem>
</Menu>

<Menu
  id="fade-menu-gallery"
  MenuListProps={{
    "aria-labelledby": "fade-button",
    style: {
      padding: "0.5em",
      backgroundColor: "#333",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  }}
  anchorEl={anchorElGallery}
  open={openGallery}
  onClose={handleClose}
  TransitionComponent={Fade}
>
  <MenuItem
    style={{
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      padding: "0.8em 1.5em",
      color: "#fff",
      borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "transparent")
    }
    onClick={() => navigate("/gallerycomponent")}
  >
    Photo Gallery
  </MenuItem>
  <MenuItem
    style={{
      fontFamily: "Josefin Sans",
      fontSize: "1rem",
      padding: "0.8em 1.5em",
      color: "#fff",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "transparent")
    }
    onClick={() => navigate("/video-gallery")}
  >
    Video Gallery
  </MenuItem>
</Menu>


            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}  
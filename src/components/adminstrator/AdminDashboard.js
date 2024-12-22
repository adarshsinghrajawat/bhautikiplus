import { useState } from "react";
import { useStyles } from "./AdminDashboardCss";
import { Avatar,AppBar,Box,Toolbar,Typography,Grid,Paper } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Routes,Route,Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ServerURL } from "../services/ServerServices";
import YardIcon from '@mui/icons-material/Yard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import ViewCarouselIcon from '@mui/icons-material/ViewCarouselIcon';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import Category from "./Category";
// import DisplayAllCategory from "./DisplayAllCategory"
// import DisplayAllSubCategory from "./DisplayAllSubCategory";
// import SubCategory from "./SubCategory"
// import Product from "./Product"
// import DisplayProduct from "./DisplayProduct"
// import ProductDetail from "./ProductDetail"
// import DisplayProductDetail from "./DisplayProductDetail"
// import Brand from "./Brand"
// import DisplayAllBrand from "./DisplayAllBrand"
// import Banners from "./Banners";
import MainCategory from "./MainCategory";
import Team from "./Team";
import DisplayAllMainCategory from "./DisplayAllMainCategory";
import DisplayAllTeam from "./DisplayAllTeam";
export default function AdminDashboard(props){
  const classes=useStyles();
  const navigate=useNavigate();
  const admin=JSON.parse(localStorage?.getItem('ADMIN'))
 
  
  return(
    <Box sx={{ flexGrow: 1 }} >
        <AppBar position="sticky" style={{backgroundColor:'#262525'}}> 
          <Toolbar variant="dense"> 
            <Typography variant="h6" color="inherit" component="div">
              Bhautiki PLus
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container spaces={3} style={{paddingInlineStart:5}} >
          <Grid item xs={2.2} >
            <Paper >
              <div className={classes.leftBarStyle}>
              <img src={`${ServerURL}/static/${admin?.picture}`}  style={{width:70,height:70,borderRadius:35}} />
                <div className={classes.nameStyle}>{admin?.adminname}</div>
                <div className={classes.emailStyle}>{admin?.emailid}</div>
                <div className={classes.phoneStyle}>+91{admin?.mobileno}</div>
              </div>
              <div className={classes.menuStyle}>
                <List>
                  <Divider />
                 
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Dashboard</span>} />
                    </ListItemButton>
                  </ListItem>


                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/admindashboard/displayallmaincategory')} >
                      <ListItemIcon>
                        <CategoryIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Category List</span>} />
                    </ListItemButton>
                  </ListItem>

                 
                  <ListItem disablePadding>
                    <ListItemButton onClick={()=>navigate('/admindashboard/displayallteam')} >
                      <ListItemIcon>
                        <CategoryIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Team List</span>} />
                    </ListItemButton>
                  </ListItem>

                  
                  <ListItem disablePadding>
                    <ListItemButton  
                    onClick={()=>navigate('/admindashboard/maincategory')}
                    
                    >
                      <ListItemIcon>
                        <YardIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Main Category</span>} />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton 
                    onClick={()=>navigate('/admindashboard/team')} 
                    >
                      <ListItemIcon>
                        <ShoppingCartIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Team</span>} />
                    </ListItemButton>
                  </ListItem>

                
                  
                  <ListItem disablePadding>
                    <ListItemButton 
                    // onClick={()=>navigate('/admindashboard/displayproductdetail')}
                    >
                      <ListItemIcon>
                        <AddShoppingCartIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Product Details</span>} />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton 
                    // onClick={()=>navigate('/admindashboard/banners')}
                     >
                      <ListItemIcon>
                        {/* <ViewCarouselIcon /> */}
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Banners</span>} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton >
                      <ListItemIcon>
                        <SummarizeIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Sales Report</span>} />
                    </ListItemButton>
                  </ListItem>


                  <Divider />
                  <ListItem disablePadding>
                    <ListItemButton >
                      <ListItemIcon>
                        <ExitToAppIcon />
                      </ListItemIcon>
                      <ListItemText primary={<span className={classes.menuItemStyle}>Logout</span>} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </div> 
            </Paper>

          </Grid> 
          
          <Grid item xs={9.8} style={{padding:20}}>
           
            <Routes>
              <Route element={<MainCategory />} path="/maincategory" />
              <Route element={<Team />} path="/team" />
              {/* <Route element={<SubCategory />} path="/subcategory" /> */}
              <Route element={<DisplayAllMainCategory />} path="/displayallmaincategory" />
              <Route element={<DisplayAllTeam />} path="/displayallteam" />
              {/* <Route element={<DisplayAllCategory />} path="/displayallcategory" />
              <Route element={<Product />} path="/product" />
              <Route element={<DisplayProduct />} path="/displayproduct" />
              <Route element={<ProductDetail />} path="/productdetail" />
              <Route element={<DisplayProductDetail />} path="/displayproductdetail" />
              <Route element={<Brand />} path="/brand" />
              <Route element={<Banners />} path="/banners" />
              <Route element={<DisplayAllBrand />} path="/displayallbrand" /> */}

             
            </Routes>
          </Grid>
        </Grid>
        
                 </Box>
  )
}
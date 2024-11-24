import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import navbar from '../../assets/navbar.png'
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useNavigate } from 'react-router-dom';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useState,useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Grid from "@mui/material/Grid"
import Divider from '@mui/material/Divider';
import { getData } from '../services/ServerServices';
import { FormControl, MenuItem, Select } from '@mui/material';
import styled from 'styled-components';
const StyledToolbar = styled(Toolbar)(({  }) => ({
  alignItems: 'flex-start',
  paddingTop: '2',
  paddingBottom: '2',
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function Header() {
  //  const navigate=useNavigate()
    const [categoryList,setCategoryList]=useState([])


    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleClick=(item)=>{
      // navigate('/teamhome')
    }
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);

    const fetchAllCategory=async()=>{
        var result=await getData('category/fetch_category')
        setCategoryList(result.data) 
        // alert(JSON.stringify(result)) 
    } 

    useEffect(function(){
      fetchAllCategory()
     
    },[])


    const fillCategory=()=>{
      return categoryList.map((item)=>{
        return (<MenuItem>{item.categoryname}</MenuItem>)
        
      })
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
          
        <img src={navbar}  />
      
      </AppBar>
      <AppBar position="relative" style={{backgroundColor:'#262525',zIndex:100}} >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{display:'flex',flexDirection:'row'}}>
           
            {fillCategory()}
          </Typography> */}
          {/* <Button variant="contained">Contained
            
          </Button> */}
        {/* <Grid item xs={6}>
         <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select 
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value="Categories"
          >
            
            < MenuItem value={"Choose Categories..."}>Categories
            {fillCategory()}
            </MenuItem>
          </Select>
         </FormControl>
        </Grid> */}

         {/* <Grid item xs={12} >
            <FormControl style={{width:"20vh"}}  >
            <InputLabel ><span style={{fontWeight:'bold',color:'#fff'}}>HOME</span></InputLabel>
            <Select variant='standard'  onChange={(event)=>setCategoryList(event.target.value)}>
              <MenuItem value="Select Category"></MenuItem>
              {fillCategory()}
            </Select>
            <FormHelperText>{formerror.maincategoryid}</FormHelperText>
            </FormControl>
          
          </Grid> */}
          {/* <Grid item xs={12} >
            <FormControl style={{width:"20vh"}}  >
            <InputLabel ><span style={{fontWeight:'bold',color:'#fff'}}>Team</span></InputLabel>
            <Select variant='standard'  onChange={(event)=>setCategoryList(event.target.value)}>
              <MenuItem value="Select Category"></MenuItem>
              {fillCategory()}
            </Select>
            <FormHelperText>{formerror.maincategoryid}</FormHelperText>
            </FormControl>
          
          </Grid> */}
          <Grid item xs={2}>
          <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
        
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         <span style={{color:'#fff'}}> Home</span>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem style={{display:"flex", flexDirection:"column"}} onClick={handleClose}>{fillCategory()}</MenuItem>
                
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
          </Grid>
          <Grid item xs={2}>
          <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
        
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         <span style={{color:'#fff'}}> About Us</span>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem style={{display:"flex", flexDirection:"column"}} onClick={handleClose}>{fillCategory()}</MenuItem>
                
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
          </Grid>
          <Grid item xs={2}>
          <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
        
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         <span style={{color:'#fff'}}> Courses</span>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem style={{display:"flex", flexDirection:"column"}} onClick={handleClose}>{fillCategory()}</MenuItem>
                
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
          </Grid>
          <Grid item xs={2}>
          <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
        
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
         <span style={{color:'#fff'}}> Team</span>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem style={{display:"flex", flexDirection:"column"}} onClick={handleClose}>{fillCategory()}</MenuItem>
                
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
          </Grid>
          <Grid item xs={2}>
          <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
        
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         <span style={{color:'#fff'}}> Results</span>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem style={{display:"flex", flexDirection:"column"}} onClick={handleClose}>{fillCategory()}</MenuItem>
                
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
          </Grid>
          <Grid item xs={2}>
          <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
        
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         <span style={{color:'#fff'}}> Gallery</span>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem style={{display:"flex", flexDirection:"column"}} onClick={handleClose}>{fillCategory()}</MenuItem>
                
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
          </Grid>
          <Grid item xs={2}>
          <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
        
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         <span style={{color:'#fff'}}> Contact Us</span>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem style={{display:"flex", flexDirection:"column"}} onClick={handleClose}>{fillCategory()}</MenuItem>
                
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
          </Grid>
          <Grid item xs={2}>
          <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
        
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
         <span style={{color:'#fff'}}> Login</span>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem style={{display:"flex", flexDirection:"column"}} onClick={handleClose}>{fillCategory()}</MenuItem>
                
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
          </Grid>
          <div style={{marginLeft:'auto',width:150,display:'flex',alignItems:'center',justifyContent:'space-evenly'}} >
            <PersonOutlinedIcon style={{fontSize:32,color:'#fff'}}/>
           
          </div>
          
         {/* <div

style={{display:'flex',alignItems:'center',width:250,justifyContent:'space-evenly'}}>
 <Divider style={{color:'#fff'}} orientation="vertical" flexItem />
<Button style={{fontFamily:'Kanit',color:'#fff',fontWeight:'bold',fontSize:"100%",backgroundColor:"#000"}} color="inherit"  >Home</Button>
<Button style={{fontFamily:'Kanit',color:'#fff',fontWeight:'bold',fontSize:"100%",backgroundColor:"#000"}} color="inherit" >Team</Button>
</div> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

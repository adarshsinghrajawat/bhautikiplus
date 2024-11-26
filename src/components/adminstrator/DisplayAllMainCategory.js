import MaterialTable from "@material-table/core";
import { getData, ServerURL } from "../services/ServerServices";
import { useEffect, useState } from "react";
import { Avatar,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@mui/material";
import { useStyles } from "./DisplayAllMainCategoryCss";
import Title1 from "./Title1";
import { TextField } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import logo1 from '../../assets/logo1.png'
import Swal from "sweetalert2";
import Grid from '@mui/material/Grid';
import { PhotoCamera } from "@mui/icons-material"; 
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
export default function DisplayAllMainCategory(props)
{
     var classes=useStyles()
     
    const [categoryName, setCategoryName] = useState()
    const [categoryLogo, setCategoryLogo] = useState({ fileName: 'watermark.png', bytes: '' })
    const [category,setCategory]=useState([])
    const [open,setOpen]=useState(false)
    const handleOpenDialog=()=>{
      setOpen(true)
    }

    const clearValue=()=>{
      setCategoryName('')
      setCategoryLogo({fileName: 'watermark.png', bytes: '' })
   }

 

    const handleClose=()=>{
      setOpen(false)
    }
    const fetchAllCategory=async()=>{
        var result=await getData('category/fetch_category_')
        setCategory(result.data)
    }

    const showCategoryDetails=()=>{
      return (
       <div>
      
          <Dialog
            open={open}
           //onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title" style={{display:'flex',justifyContent:'end'}}>
         
              <CloseIcon style={{cursor:'pointer'}} onClick={handleClose} />
            </DialogTitle>
            <DialogContent >
            
                <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.rowStyle} style={{ justifyContent: 'space-between' }}>
                         <div>
                            <img src={logo1} width="150" />
                        </div>
                        <div className={classes.headingStyle}>
                         Edit  Categories
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={categoryName} onChange={(event) => setCategoryName(event.target.value)} label="Category Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} className={classes.rowStyle}>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file"/>
                            <PhotoCameraIcon />
                        </IconButton>
                        <Avatar
                        value={categoryLogo}
                            alt="Remy Sharp"
                            variant="rounded"
                            src={categoryLogo.fileName}
                            sx={{ width: 56, height: 56 }}
                        />

                    </Grid>
                    
                </Grid>
           
  
            </DialogContent>
            <DialogActions>
              <Button>Edit</Button>
              <Button onClick={handleClose}>
               Cancel
              </Button>
            </DialogActions>
          </Dialog>
          </div>
      );

    }

    useEffect(function(){
    fetchAllCategory()
    },[])
    function showAllCategory() {
        return (
          <MaterialTable
          
          title={<Title1 title={'List Of Categories'} />}
            columns={[
              { title: 'CategoryId', field: 'categoryid' },
              { title: 'Category Name', field: 'categoryname' },
            
                {title:'Logo',
                  render:rowData=><Avatar src={`${ServerURL}/images/${rowData.logo}`} style={{height:50,width:50}} variant="rounded"/>
                }
              
            
            ]}
            data={category}        
            actions={[
              {
                icon: 'edit',
                tooltip: 'Edit User',
                onClick: (event, rowData) => handleOpenDialog()
              },
              {
                icon: 'delete',
                tooltip: 'Delete User',
                onClick: (event, rowData) => alert("You want to delete " + rowData.name)
              }
            ]}
          />
        )
      }

    return(
        <div className={classes.mainContainer}>

        <div className={classes.box}>
          {showAllCategory()}
          {showCategoryDetails()}
          </div>
        </div>
    )
}
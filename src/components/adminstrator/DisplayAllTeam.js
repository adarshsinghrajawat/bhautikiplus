import MaterialTable from "@material-table/core";
import { getData,postData,ServerURL } from "../services/ServerServices";
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
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

export default function DisplayAllTeam(props)
{
     var classes=useStyles()
     const [facultyName, setFacultyName] = useState()
     const [collegeName, setCollegeName] = useState()
      const [departments, setDepartments] = useState([]);
      const [selectedDepartment, setSelectedDepartment] = useState("");
     const [teamid,setTeamId]=useState('')
     const [post, setPost] = useState()
     const [btnStatus, setBtnStatus] = useState(false)
     const [description, setDescription] = useState()

    const [categoryLogo, setCategoryLogo] = useState({ fileName: 'watermark.png', bytes: '' })
    const [team,setTeam]=useState([])
    const [open,setOpen]=useState(false)
    const [message, setMessage] = useState(" ")
    const [oldPicture, setOldPicture] = useState('')
    const handleOpenDialog=(rowData)=>{
      setOpen(true)
      setTeamId(rowData.teamid)
      setCollegeName(rowData.collegename)
      setFacultyName(rowData.facultyname)
      setSelectedDepartment(rowData.departmentid);
      setPost(rowData.post)
      setDescription(rowData.description)
      setOldPicture(rowData.logo)
      setCategoryLogo({ fileName: `${ServerURL}/images/${rowData.logo}`, bytes: "", })
    }
    const handleImage = (event) => {
        setCategoryLogo({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] });
        setBtnStatus(true)
      }


    const fetchAllDepartments = async () => {
       try {
         const result = await getData("category/fetch_all_departments");
         if (result && result.data) {
           setDepartments(result.data);
         } else {
           console.error("Failed to fetch departments:", result);
         }
       } catch (error) {
         console.error("Error fetching departments:", error);
       }
     };
   
     useEffect(() => {
       fetchAllDepartments();
     }, []);


        const handleDepartmentChange = (event) => {
          setSelectedDepartment(event.target.value);
        };
        const fillDepartments = () => {
          return departments.map((item) => (
            <MenuItem key={item.departmentid} value={item.departmentsid}>
              {item.departmentname}
            </MenuItem>
          ));
        };
    


//     const clearValue=()=>{
//       setCategoryName('')
//       setCategoryLogo({fileName: 'watermark.png', bytes: '' })
//    }


const handleEditData=async()=>{
    var cd = new Date()
    var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDate() + " " + cd.getHours() + ":" + cd.getMinutes() + ":" + cd.getSeconds()

   var body={
    'teamid':teamid,
    'departmentid': selectedDepartment,
    'facultyname': facultyName,'collegename': collegeName,'post': post,'description': description,'updateat': dd}

    var result = await postData('category/edit_team_data',body)
 if (result.status) {
      setOpen(false)
      Swal.fire({
        icon: 'success',
        title: result.message,


      })
    }
    else {
      Swal.fire({
        icon: 'Error',
        title: result.message,


      })
     
    }
    
    fetchAllTeam()

}

const handleCancel = () => {
    setCategoryLogo({ fileName: `${ServerURL}/images/${oldPicture}`, bytes: '' })
    setOldPicture('')
    setBtnStatus(false)
    setMessage('')
  }


  const handleSaveLogo = async () => {
    var formData = new FormData()
    formData.append('teamid', teamid)
    formData.append('logo', categoryLogo.bytes)
    var result = await postData('category/edit_team_logo', formData)
    if (result.status) {
        console.log(result)
      setMessage("assets/tick.gif")

    }
    else {
      setMessage("")
    }


    fetchAllTeam()
    setBtnStatus(false)
    setOpen(false


    )

  }


const PictureButton = () => {
    return (<div>{btnStatus ? <div style={{ display: 'flex', flexDirection: 'row', padding: 10 }}>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button onClick={handleSaveLogo}>Save</Button>
    </div> : <div style={{ fontSize: 15, color: 'green', fontWeight: 'bold' }}><img src={`${message}`} width="60" /></div>}
    </div>
    )

  }

  


  const handleDelete = (rowData) => {

    setOpen(false)
    Swal.fire({
      title: 'Do you want to Delete Member?',

      showCancelButton: true,
      confirmButtonText: 'Delete',

    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        var res = await postData('category/delete_team_data', { teamid: rowData.teamid })

        if (res.status) {
          Swal.fire('Deleted!', '', 'Successfully')
          fetchAllTeam()
        }
        else
          Swal.fire({
            icon: 'error',
            title: result.message,
          })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }

    })





  }
 

    const handleClose=()=>{
      setOpen(false)
    }
    const fetchAllTeam=async()=>{
        var result=await getData('category/fetch_team')
        console.log(result)
        setTeam(result.data)
    }

    const showTeamDetails=()=>{
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
                         Edit Team
                        </div>
                    </Grid>
                    <Grid item xs={12}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Departments</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={selectedDepartment}
      label="Departments"
      onChange={handleDepartmentChange}
    >
      <MenuItem value="">Select Department</MenuItem>
      {fillDepartments()}
    </Select>
  </FormControl>
</Grid>


                <Grid item xs={12}>
                        <TextField value={facultyName} onChange={(event) => setFacultyName(event.target.value)} label="faculty Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={collegeName} onChange={(event) => setCollegeName(event.target.value)} label="College Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={post} onChange={(event) => setPost(event.target.value)} label="Post" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={description} onChange={(event) => setDescription(event.target.value)} label="Description" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} className={classes.rowStyle}>
                        <IconButton color="primary" aria-label="upload picture" component="label" onChange={handleImage}>
                            <input hidden accept="image/*" type="file"  />
                            <PhotoCameraIcon />
                        </IconButton>
                        <Avatar
                        //value={categoryLogo}
                            alt="Remy Sharp"
                            variant="rounded"
                            src={categoryLogo.fileName}
                            sx={{ width: 56, height: 56 }}
                        />
                     <PictureButton/>
                    </Grid>
                    
                </Grid>
           
  
            </DialogContent>
            <DialogActions>
              <Button onClick={handleEditData}>Edit</Button>
              <Button onClick={handleClose}>
               Cancel
              </Button>
            </DialogActions>
          </Dialog>
          </div>
      );

    }

    useEffect(function(){
    fetchAllTeam()
    },[])
    function showAllTeam() {
        return (
          <MaterialTable
          
          title={<Title1 title={'List Of Team'} />}
            columns={[
              { title: 'Team ID', field: 'teamid' },
              { title: 'Faculty Name', field: 'facultyname' },
              { title: 'College Name', field: 'collegename' },
              { title: 'Post', field: 'post' },
              { title: 'Description', field: 'description' },
            
                {title:'Logo',
                  render:rowData=><Avatar src={`${ServerURL}/images/${rowData.logo}`} style={{height:50,width:50}} variant="rounded"/>
                }
              
            
            ]}
            data={team}        
            actions={[
              {
                icon: 'edit',
                tooltip: 'Edit User',
                onClick: (event, rowData) => handleOpenDialog(rowData)
              },
              {
            icon: 'delete',
            tooltip: 'Delete User',
            onClick: (event, rowData) => handleDelete(rowData)
          }
            ]}
          />
        )
      }

    return(
        <div className={classes.mainContainer}>

        <div className={classes.box}>
          {showAllTeam()}
          {showTeamDetails()}
          </div>
        </div>
    )
}
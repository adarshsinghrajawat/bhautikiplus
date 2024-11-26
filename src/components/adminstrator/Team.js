import React from "react";
import { useState } from "react";

import { TextField, Avatar, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import logo1 from '../../assets/logo1.png'
import Swal from "sweetalert2";
import Grid from '@mui/material/Grid';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useStyles } from "./MaincategoryCss"
import { postData } from "../services/ServerServices";
import { useNavigate } from "react-router-dom";

export default function Team(props) {
     var navigate=useNavigate()
    const [facultyName, setFacultyName] = useState()
    const [collegeName, setCollegeName] = useState()
    const [post, setPost] = useState()
    const [description, setDescription] = useState()
   
    const [categoryLogo, setCategoryLogo] = useState({ fileName: 'watermark.png', bytes: '' })
    var classes = useStyles()


    const handleImage = (event) => {

        setCategoryLogo({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    }
    const handlelist=()=>{
        navigate('/displayallmaincategory')
      }

      

    const handleClick = async () => {
        var cd = new Date()
        var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDate() + " " + cd.getHours() + ":" + cd.getMinutes() + ":" + cd.getSeconds()

        var formData = new FormData()
        formData.append('facultyname', facultyName)
        formData.append('collegename', collegeName)
        formData.append('post', post)
        formData.append('description', description)

        formData.append('logo', categoryLogo.bytes)
        formData.append('createdat', new Date())
        formData.append('updateat', new Date())

        var result = await postData('category/submit_team', formData)
        if(result)
        {
            Swal.fire({
                icon:'success',
                title:result.message,
                toast:'true'
               

            })
            clearValue()
        }
        else
        {
            Swal.fire({
                icon:'error',
                title:result.message
    
            })
        }
    }

    const clearValue=()=>{
    
       setPost('')
       setCollegeName('')
       setFacultyName('')
       setDescription('')
       setCategoryLogo({fileName: 'watermark.png', bytes: '' })
    }
  

    return (
        <div className={classes.mainContainer}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.rowStyle} style={{ justifyContent: 'space-between' }}>
                         <div>
                            <img src={logo1} width="150" />
                        </div>
                        <div className={classes.headingStyle}>
                            Team
                            <FormatListBulletedIcon  onClick={handlelist}/>
                        </div>
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
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={handleImage} />
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
                    <Grid item xs={6}>
                        <Button onClick={handleClick} fullWidth variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={()=>clearValue()} fullWidth variant="contained">Reset</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
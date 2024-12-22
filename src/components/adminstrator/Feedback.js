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
import { clear } from "@testing-library/user-event/dist/clear";
export default function Feedback(props) {
     var navigate=useNavigate()
    const [feedback, setFeedback] = useState()
    const [studentName, setStudentName] = useState()
    const [aboutStudent, setAboutStudent] = useState()

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
        formData.append('feedback', feedback)
        formData.append('studentname', studentName)
        formData.append('aboutstudent', aboutStudent)

       
        formData.append('createdat', new Date())
        formData.append('updateat', new Date())

        
        var result = await postData('category/submit_review', formData)
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
       setFeedback('')
       setAboutStudent('')
       setStudentName('')
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
                            Reviews
                            <FormatListBulletedIcon  onClick={handlelist}/>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={feedback} onChange={(event) => setFeedback(event.target.value)} label="Feedback" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={studentName} onChange={(event) => setStudentName(event.target.value)} label="Student Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={aboutStudent} onChange={(event) => setAboutStudent(event.target.value)} label="About" variant="outlined" fullWidth />
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
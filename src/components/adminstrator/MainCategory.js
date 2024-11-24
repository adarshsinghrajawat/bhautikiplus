import React from "react";
import { useState } from "react";

import { TextField, Avatar, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import logo1 from '../../assets/logo1.png'
import Swal from "sweetalert2";
import Grid from '@mui/material/Grid';

import { useStyles } from "./MaincategoryCss"
import { postData } from "../services/ServerServices";
export default function MainCategory(props) {

    const [categoryName, setCategoryName] = useState()
    const [categoryLogo, setCategoryLogo] = useState({ fileName: 'watermark.png', bytes: '' })
    var classes = useStyles()


    const handleImage = (event) => {

        setCategoryLogo({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    }

    const handleClick = async () => {
        var cd = new Date()
        var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDate() + " " + cd.getHours() + ":" + cd.getMinutes() + ":" + cd.getSeconds()

        var formData = new FormData()
        formData.append('categoryname', categoryName)
        formData.append('logo', categoryLogo.bytes)
        formData.append('createdat', new Date())
        formData.append('updateat', new Date())

        var result = await postData('category/submit_category', formData)
        if(result)
        {
            Swal.fire({
                icon:'success',
                title:result.message,
                toast:'true'
               

            })
        }
        else
        {
            Swal.fire({
                icon:'error',
                title:result.message
    
            })
        }
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
                            Categories
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange={(event) => setCategoryName(event.target.value)} label="Category Name" variant="outlined" fullWidth />
                    </Grid>
                    <Grid item xs={12} className={classes.rowStyle}>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={handleImage} />
                            <PhotoCameraIcon />
                        </IconButton>
                        <Avatar
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
                        <Button fullWidth variant="contained">Reset</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
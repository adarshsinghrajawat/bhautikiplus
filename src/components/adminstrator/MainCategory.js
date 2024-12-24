import React, { useState } from "react";
import { TextField, Avatar, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import logo1 from '../../assets/logo1.png';
import Swal from "sweetalert2";
import Grid from '@mui/material/Grid';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useStyles } from "./MaincategoryCss";
import { postData } from "../services/ServerServices";
import { useNavigate } from "react-router-dom";

export default function MainCategory(props) {
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState();
    const [categoryLogo, setCategoryLogo] = useState({ fileName: 'watermark.png', bytes: '' });
    const classes = useStyles();

    const handleImage = (event) => {
        setCategoryLogo({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] });
    };

    const handleList = () => {
        navigate('/displayallmaincategory');
    };

    const handleClick = async () => {
        const cd = new Date();
        const dd = `${cd.getFullYear()}/${cd.getMonth() + 1}/${cd.getDate()} ${cd.getHours()}:${cd.getMinutes()}:${cd.getSeconds()}`;

        const formData = new FormData();
        formData.append('categoryname', categoryName);
        formData.append('logo', categoryLogo.bytes);
        formData.append('createdat', new Date());
        formData.append('updateat', new Date());

        const result = await postData('category/submit_category', formData);
        if (result) {
            Swal.fire({
                icon: 'success',
                title: result.message,
                toast: true
            });
            clearValue();
        } else {
            Swal.fire({
                icon: 'error',
                title: result.message
            });
        }
    };

    const clearValue = () => {
        setCategoryName('');
        setCategoryLogo({ fileName: 'watermark.png', bytes: '' });
    };

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
                            <FormatListBulletedIcon onClick={handleList} style={{ cursor: 'pointer' }} />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={categoryName}
                            onChange={(event) => setCategoryName(event.target.value)}
                            label="Category Name"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.rowStyle}>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={handleImage} />
                            <PhotoCameraIcon />
                        </IconButton>
                        <Avatar
                            alt="Category Logo"
                            variant="rounded"
                            src={categoryLogo.fileName}
                            sx={{
                                width: { xs: 40, sm: 56 }, // responsive size for avatar
                                height: { xs: 40, sm: 56 }, // responsive size for avatar
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button onClick={handleClick} fullWidth variant="contained" className={classes.button}>
                            Submit
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button onClick={clearValue} fullWidth variant="contained" className={classes.button}>
                            Reset
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

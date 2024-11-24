import React from "react";
import { useState, useEffect } from "react";

import { TextField, Avatar, Button, Select } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import logo1 from '../../assets/logo1.png'
import Swal from "sweetalert2";
import Grid from '@mui/material/Grid';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useStyles } from "./MaincategoryCss"
import { postData } from "../services/ServerServices";
import { getData } from "../services/ServerServices";
export default function SubCategory(props) {

    const [categoryName, setCategoryName] = useState('')
    const [SubCategoryName, setSubCategoryName] = useState('')
    const [categoryList, setCategoryList] = useState([])
    const [categoryLogo, setCategoryLogo] = useState({ fileName: 'watermark.png', bytes: '' })
    var classes = useStyles()



    const fetchAllCategory = async () => {
        var result = await getData('category/fetch_category_subcategory')
        setCategoryList(result.data)
        // alert(JSON.stringify(result)) 
    }

    useEffect(function () {
        fetchAllCategory()

    }, [])

    const fillCategory = () => {
        return categoryList.map((item) => {
            return (<MenuItem value={item.categoryid}>{item.categoryname}</MenuItem>)

        })
    }

    

    const handleCategoryChange = (event) => {
        // alert(event.target.value)
        setCategoryName(event.target.value)

    }
    const handleImage = (event) => {

        setCategoryLogo({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    }

    const handleClick = async () => {
        // var cd = new Date()
        // var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDate() + " " + cd.getHours() + ":" + cd.getMinutes() + ":" + cd.getSeconds()

        var formData = new FormData()
        formData.append('categoryname', categoryName)
        formData.append('subcategoryname', SubCategoryName)
        formData.append('logo', categoryLogo.bytes)
        // formData.append('createdat', new Date())
        // formData.append('updateat', new Date())

        var result = await postData('category/submit_subcategory', formData)
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
                    <Grid item xs={12} >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categoryName}
                                label="categoryname"
                                onChange={handleCategoryChange}
                            >
                                <MenuItem value="Select Category"></MenuItem>

                                {fillCategory()}
                            </Select>
                            {/* <FormHelperText>{formerror.maincategoryid}</FormHelperText> */}
                        </FormControl>

                    </Grid>
                    <Grid item xs={12}>
                        <TextField onChange={(event) => setSubCategoryName(event.target.value)} label="Subcategory Name" variant="outlined" fullWidth />
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
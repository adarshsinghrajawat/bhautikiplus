import React, { useState, useEffect } from "react";
import {
  FormControl,
  TextField,
  Avatar,
  Button,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Grid,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import logo1 from "../../assets/logo1.png";
import Swal from "sweetalert2";
import { useStyles } from "./MaincategoryCss";
import { postData, getData } from "../services/ServerServices";
import { useNavigate } from "react-router-dom";

export default function Team() {
  const navigate = useNavigate();
  const classes = useStyles();

  // States
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [facultyName, setFacultyName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [post, setPost] = useState("");
  const [description, setDescription] = useState("");
  const [categoryLogo, setCategoryLogo] = useState({
    fileName: "watermark.png",
    bytes: "",
  });

  // Fetch departments
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

  // Handlers
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
  const handleImage = (event) => {
    setCategoryLogo({
      fileName: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    });
  };

  const handleList = () => {
    navigate("/displayallteam");
  };
  

  const handleClick = async () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    const formData = new FormData();
    formData.append("departmentname", selectedDepartment);
    formData.append("facultyname", facultyName);
    formData.append("collegename", collegeName);
    formData.append("post", post);
    formData.append("description", description);
    formData.append("logo", categoryLogo.bytes);
    formData.append("createdat", formattedDate);
    formData.append("updateat", formattedDate);

    const result = await postData("category/submit_team", formData);

    if (result) {
      Swal.fire({
        icon: "success",
        title: result.message,
        toast: true,
      });
      clearValues();
    } else {
      Swal.fire({
        icon: "error",
        title: result.message,
      });
    }
  };

  const clearValues = () => {
    setSelectedDepartment("");
    setFacultyName("");
    setCollegeName("");
    setPost("");
    setDescription("");
    setCategoryLogo({ fileName: "watermark.png", bytes: "" });
  };



  // JSX
  return (
    <div className={classes.mainContainer}>
      <div className={classes.box}>
        <Grid container spacing={2}>
          {/* Header */}
          <Grid
            item
            xs={12}
            className={classes.rowStyle}
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <img src={logo1} width="150" alt="Logo" />
            </div>
            <div className={classes.headingStyle}>
              Team
              <FormatListBulletedIcon onClick={handleList} />
            </div>
          </Grid>

          {/* Department Dropdown */}
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

          {/* Input Fields */}
          <Grid item xs={12}>
            <TextField
              value={facultyName}
              onChange={(event) => setFacultyName(event.target.value)}
              label="Faculty Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={collegeName}
              onChange={(event) => setCollegeName(event.target.value)}
              label="College Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={post}
              onChange={(event) => setPost(event.target.value)}
              label="Post"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              label="Description"
              variant="outlined"
              fullWidth
            />
          </Grid>

          {/* File Upload */}
          <Grid item xs={12} className={classes.rowStyle}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" onChange={handleImage} />
              <PhotoCameraIcon />
            </IconButton>
            <Avatar
              alt="Uploaded Logo"
              variant="rounded"
              src={categoryLogo.fileName}
              sx={{ width: 56, height: 56 }}
            />
          </Grid>

          {/* Buttons */}
          <Grid item xs={6}>
            <Button onClick={handleClick} fullWidth variant="contained">
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={clearValues} fullWidth variant="contained">
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

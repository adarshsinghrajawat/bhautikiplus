import MaterialTable from "@material-table/core";
import { getData } from "../services/ServerServices";
import { useEffect, useState } from "react";
export default function DisplayAllMainCategory(props)
{

    const [category,setCategory]=useState([])
    const fetchAllCategory=async()=>{
        var result=await getData('category/fetch_category_')
        setCategory(result.data)
    }

    useEffect(function(){
    fetchAllCategory()
    },[])
    function showAllCategory() {
        return (
          <MaterialTable
            title="Company Details"
            columns={[
              { title: 'CategoryId', field: 'categoryid' },
              { title: 'Category Name', field: 'categoryname' },
              { title: 'Logo', field: 'logo' },
            
            ]}
            data={category}        
            actions={[
              {
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
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
        <div>
        {showAllCategory()}
        </div>
    )
}
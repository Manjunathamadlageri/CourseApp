import React, { useEffect, useState } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourse = () => {

    useEffect(()=>{
        document.title = "All Courses"
    },[])

        //function to call server:
        const getAllCoursesFromServer = () =>{
            axios.get(`${base_url}/courses`).then(
               (response) =>{
                console.log(response.data);
                toast.success("Courses has been Loaded",{position :"bottom-center"} );
                setCourses(response.data);
               },
               (error) =>{
                console.log(error);
                toast.success("Something went Wrong",{position :"bottom-center"});
               }
            )
            
        } ;

        //calling loading course function
        useEffect(()=>{
            getAllCoursesFromServer();
        },[])


      
        const [courses,setCourses] = useState ([
            // {title:"Java Course",description:"this is demo developing"},
            // {title:"Django Course",description:"this is demo testing"},
            // {title:"React Course",description:"this is demo testing"},
            // {title:"Angular Course",description:"this is demo testing"},
        ])

        const updatedCourses=(id)=>{
            setCourses(courses.filter((c)=>c.id != id));
        }
        return (
            <div>
                <h1>All Course</h1>

                <p>List of courses are as follows</p>
                {
                    courses.length>0 ? courses.map((item)=>
                        <Course key={item.id} course={item} update={updatedCourses}/>
                    ):"No courses"
                }
            </div>
    );
}
 
export default AllCourse;
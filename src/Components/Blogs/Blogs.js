import React, {useState} from "react";
import {BlogCard} from "../UI/BlogCard";
import New from "../NewBlog/New";


const EmptyBlogs = props => {
    return(
        <React.Fragment>
            <BlogCard name="No Inputs"/>
        </React.Fragment>
    );
}

const NotEmptyBlogs = props => {
    return(
        <React.Fragment>
            {props.blogData.map((data,key) => {
                return(
                    <BlogCard key={key} name={data.name} handle={data.handle} email={data.email} data={data.data} />
                )
            })}
        </React.Fragment>
    );
}

export const Blogs = () =>{
    const [blogData,setBlogData] = useState([]);

    const dataFromNewBlog = (newBlogData) => {

        const UpdatedData = {
            id:Math.random().toString(),
            ...newBlogData
        }
        setBlogData((prevState) =>{
            return [...prevState, UpdatedData]
        })
        console.log(UpdatedData);
    }
    return (
        <React.Fragment>
            {blogData.length===0 ?
                <EmptyBlogs /> :
               <NotEmptyBlogs blogData={blogData}/>
            }
            <New onReceivingNewData={dataFromNewBlog}/>
        </React.Fragment>

    );
}
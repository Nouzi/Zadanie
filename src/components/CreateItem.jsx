import { Typography, Input, Button } from "@mui/material";
import axios, { Axios } from "axios";
import React, { useEffect } from "react";
import ReactDOM from 'react-dom/client'
import { useState } from "react"

import lib from '../lib'

export default function CreateItem() {

    const [post, setPost] = useState({
        title: '',
        text: '',
        date: ''
      });
      
      
      const handleChange = (e) => {
        const value = e.target.value;
        setPost({
          ...post,
          [e.target.name]: value
        });
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
        const itemData = {
          title: post.title,
          text: post.text,
          date: post.date,
        };
      
        lib.post('', itemData).then( (response) => {
            console.log(response);
            window.location.reload();
        })}

        return(
          <Typography component="div" display="flex">
            <form onSubmit={handleSubmit}>
            <label>
              Title
              <React.StrictMode>
              <Input
                label="Title"
                name="title"
                value={post.title}
                onChange={handleChange}
                
              />
              </React.StrictMode>
            </label>
            <label>
              text
              <Input
                label="Text"
                name="text"
                value={post.text}
                onChange={handleChange}
              />
            </label>
            <label>
              date
              <Input
                label="date"
                type="date"
                name="date"
                value={post.date}
                onChange={handleChange}
              />
            </label>
            <Button type="submit">Create Item</Button>
          </form>


          </Typography>
        )

    
}





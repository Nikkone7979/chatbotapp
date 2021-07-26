import React, { Component } from 'react';
import axios from 'axios'
import { getToken, onMessageListener } from "firebase";
import { useState, useEffect } from 'react';




class PostTest extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts: []
        }
    }





    componentDidMount(){
        axios.get('https://bystander.quadrant2.us/api/v1/auth/anonymous')
        .then(response => {
            this.setState({
                posts: response.data
            })
            console.log(response.data)
        })
    }


    render() {
        const {posts} = axios.post('https://bystander.quadrant2.us/api/v1/conversations/store', {

        },
        {
            headers: {
                'Authorization': `Basic ${'KZysf5LrLYwheG2W'}` 
              }
        }
        )
        console.log(posts);
        return (
            <div>
                <h1>Posting: </h1>
            </div>
        )
    }
}

export default PostTest;
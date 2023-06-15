
import {useEffect, useState} from "react";
import axios from 'axios';

export default function Buchungen(){

    const [posts, setPosts] = useState([])

    const getPosts = () => {
      axios.get("https://fn-dev-9782b81d.azurewebsites.net/api/items")
        .then((res) => {
          console.log(res)
          setPosts(res.data)
        })
        .catch(() => {
            console.log("Error getting data")
        })
    }
  
    useEffect(() => {
      getPosts()
    }, [])
  
    return (
      <div>
        <h1>Buchen</h1>
        {
          posts.map(post => {
            return (
              <Post key={post.id} post={post} />
            )
          })
        }
  
      </div>
    )
}


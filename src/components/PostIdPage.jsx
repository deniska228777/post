import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "../Service";
import { useFetch } from "../ownHooks/useFetch";
import Loader from "../Loader";

function PostIdPage() {
    const params = useParams();
    const [post, setPost] = useState({}); 
    const [comms, setComms] = useState([]);
    const [fetchPosts, load, error] = useFetch(async id => {const response = await Service.getById(id); setPost(response.data)});
    const [fetchComms, loadComms, errorComms] = useFetch(async id => {const response = await Service.getByCommsId(id); setComms(response.data)});
    useEffect(() => {fetchPosts(params.id); fetchComms(params.id)}, [])
    return (
        <div>
            {load 
            ?<Loader/>
            :<div>{post.title}</div>
            }
            {error &&
            <h1 style={{marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{error}</h1>
            }
            <h1>комментарии к посту</h1>
            {errorComms &&
            <h1 style={{marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{errorComms}</h1>
            }
            {loadComms
            ?<Loader/>
            :<div>{comms.title}</div>
            }
        </div>
    );
};

export default PostIdPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import Button from './Button';

function Post(par) {
    const rout = useNavigate();
    return (
        <div className="post">
            <div className="post_content">
                <span><b>{par.numb}{par.post.title}</b></span>
                <p>{par.post.body}</p>
            </div>
            <div className="post_del">
                <Button style={{width: '70px', marginBottom: 0}} type="button" className="btn" value='Делит' onClick={() => par.del(par.post)}/>
                <Button style={{width: '70px', marginBottom: 0, marginTop: 10}} type="button" className="btn" value='Открыть' onClick={() => rout(`/posts/${par.post.id}`)}/>
            </div> 
      </div>    
    )
};
export default Post;
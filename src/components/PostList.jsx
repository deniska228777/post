import React from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Post from "./Post";
import '../PostList.css';

function PostList({posts, title, del}) {
    if (!posts.length) {
        title="Нема постов";
    }
    return(
    <div className="div">
        <h1 style={{textAlign: 'center', marginTop: '20px'}}>{title}</h1>
        <TransitionGroup>
            {posts.map((post) => 
                <CSSTransition key={post.id} timeout={600} classNames="pos">
                    <Post post={post} key={post.id} numb={post.id + '. '} del={del}/>
                </CSSTransition>
            )}
        </TransitionGroup>
    </div>
    );
};

export default PostList;
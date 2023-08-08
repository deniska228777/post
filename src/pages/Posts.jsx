import React, { useEffect, useRef } from "react";
import '../App.css';
import { useState } from 'react';
import PostList from "../components/PostList";
import Form from "../components/Form";
import PostFilter from "../components/PostFilter";
import Modal from "../components/Modal";
import Button from "../components/Button";
import usePosts from "../ownHooks/usePosts";
import Service from "../Service";
import Loader from "../Loader";
import { useFetch } from "../ownHooks/useFetch";
import { pages, pgsgArray } from "../pages";
import Select from "../components/Select";

function Posts() {
  let obj = {value: 0, name: ''};
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(false);
  const [del, setDel] = useState(false);
  const [totPages, setTotPages] = useState(0);
  const [limit, setLimit] = useState(parseInt(localStorage.getItem('limit')));
  const [page, setPage] = useState(0);
  const less = usePosts(posts, filter.sort, filter.query);
  const disAble = !(less.length);
  let pgsArray = pgsgArray(totPages);
  const last = useRef();
  console.log(last);
  const [fetchPosts, load, error] = useFetch(async () => {const response = await Service.getAll(page, limit);
    setPosts([...posts, ...response.data]);
    const totCount = response.headers['x-total-count'];
    setTotPages(pages(totCount, limit));
  });
  const observer = useRef();


  useEffect(()=> {
    if (load) return;
    if (observer.current) observer.current.disconnect(); 
    observer.current = new IntersectionObserver((entries, observer)=>{if (entries[0].isIntersecting && page<=totPages) {console.log(page); setPage(page+1)}});
    observer.current.observe(last.current);
    console.log(posts);
  }, [load])
  function createPost(newPost) {
    setModal(false);
    setPosts([...posts, newPost]);
  };
  function delPost(post) {
    setPosts(posts.filter(pos => pos.id!=post.id));
  };
  useEffect(() => {fetchPosts(limit, page)}, [page]);
  return (
    <div className="App">
      <div className="divchik">
        <Button style={{minHeight: '30px'}} type='submit' onClick={() => setModal(true)} value='Крейт пользователя'/>
        <Button style={{minHeight: '30px'}} onClick={() => setDel(true)} disabled={disAble} value='Удалить все посты' type='submit'/>
      </div>
      <Modal child={<Form create={createPost}/>} vis={modal} setVis={setModal}/>
      <PostFilter filter={filter} func={setFilter}/>
      <Select opts={[{value: 5, name: 5},{value: 10, name: 10},{value: 15, name: 15}]} onChange={value => {setLimit(value); console.log(limit); localStorage.setItem('limit', value)}} value={limit} />
      <Modal child={<div><span>вы точна хатите ета сделать?</span><Button style={{marginBottom: '0px', marginLeft: '45px'}} onClick={() => {setPosts([]); setDel(false)}} value='Да' type='button'/></div>} vis={del} setVis={setDel}/>
      {error &&
      <h1 style={{marginTop: 20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{error}</h1>
      }
      {load &&
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px'}}><Loader/></div>
      }
      <PostList posts={less} title='Посты' del={delPost}/>
      <div ref={last} style={{color: 'transparent'}}>;</div>
    </div>
    );
};
export default Posts;
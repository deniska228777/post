import '../App.css';
import { useState } from 'react';
import Input from "./Input";
import Button from "./Button";

function Form({ create }) {
  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  // Calculate the btnRef value based on the conditions for disabling the button
  const btnRef = !(post.title !== '' && post.body !== '');

  function addPost(e) {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    };
    setPost({
      title: '',
      body: ''
    });
    create(newPost);
  }

  return (
    <form className='form'>
      <Input
        type="text"
        autoComplete='off'
        placeholder="Введите текст для заголовка"
        onChange={el => setPost({ ...post, title: el.target.value })}
        value={post.title}
      />
      <Input
        type="text"
        value={post.body}
        onChange={el => setPost({ ...post, body: el.target.value })}
        autoComplete='off'
        placeholder="Введите текст для описания"
      />
      <Button style={{marginBottom: 0}} onClick={addPost} value='Крейт пост' type='submit' disabled={btnRef} />
    </form>
  );
}

export default Form;

import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";

const PostForm = () => {
  const form = useRef();
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    // console.log(form)
    const postData = {
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      likes: 0,
    };
    await dispatch(addPost(postData));
    dispatch(getPosts());
    form.current.reset();
  };
  return (
    <div className="form-container">
      <form ref={form} onSubmit={(e) => handleForm(e)}>
        <input type="text" placeholder="Position Title" />
        <textarea placeholder="Post your thoughts..."></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default PostForm;

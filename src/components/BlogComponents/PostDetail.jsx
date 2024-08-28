import React from "react";
import { styleCustomContainerTop } from "../../utilities/styles";
import enBlogs from "../../utilities/texts/blogText/enBlogs.json";
import esBlogs from "../../utilities/texts/blogText/esBlogs.json";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();

  const language = useSelector((state) => state);

  const blog = language === "es" ? esBlogs : enBlogs;

  const post = blog.posts.find((post) => post.id === parseInt(id));

  return (
    <div className={styleCustomContainerTop}>
      <div className="flex flex-col gap-10">
        <h1>{post.title.toUpperCase()}</h1>
        <div className="flex flex-col gap-5">
          <img className="rounded-xl float-left" src={post.image} alt="" />
          <p className="font-light">{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

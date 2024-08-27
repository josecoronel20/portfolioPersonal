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
      <div className="flex flex-col gap-5">
        <h1>{post.title}</h1>{" "}
        <div className="flex">
          <p className=" float-start">{post.content}</p>
          <img className="rounded w-2/5" src={post.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

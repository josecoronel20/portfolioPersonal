import React from "react";
import { useSelector } from "react-redux";
import enBlogs from "../utilities/texts/blogText/enBlogs.json";
import esBlogs from "../utilities/texts/blogText/esBlogs.json";
import PostCard from "../components/BlogComponents/PostCard";
import { styleCustomContainerTop } from "../utilities/styles";

const Blog = () => {
  const language = useSelector((state) => state);

  const blog = language === "es" ? esBlogs : enBlogs;

  return (
    <main className={styleCustomContainerTop}>
      <h1>{blog.title}</h1>
      <div className="flex flex-col gap-5">
        {blog.posts.map((post) => {
          return <PostCard key={
          post.id}postInfo={post} />;
        })}
      </div>
    </main>
  );
};

export default Blog;

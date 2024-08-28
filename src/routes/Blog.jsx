import React from "react";
import { useSelector } from "react-redux";
import enBlogs from "../utilities/texts/TextBlogPage/enBlogs.json";
import esBlogs from "../utilities/texts/TextBlogPage/esBlogs.json";
import PostCard from "../components/BlogComponents/PostCard";
import { styleContainerTop } from "../Utilities/customStyles";

const Blog = () => {
  const language = useSelector((state) => state);

  const blog = language === "es" ? esBlogs : enBlogs;

  return (
    <main className={styleContainerTop}>
      <div className="flex flex-col gap-10">
        <h1>{blog.title}</h1>
        <div className="flex flex-col gap-20">
          {blog.posts.map((post) => {
            return <PostCard key={post.id} postInfo={post} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Blog;

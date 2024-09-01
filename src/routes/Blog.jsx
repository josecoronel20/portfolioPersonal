import React from "react";
import useLanguage from "../Hooks/useLanguage";
import PostCard from "../components/BlogComponents/PostCard";
import { styleContainerTop } from "../Utilities/customStyles";

const Blog = () => {
  const { blogText } = useLanguage({ typeText:"blogText"});
  return (
    <main className={styleContainerTop}>
      <div className="flex flex-col gap-10">
        <h1>{blogText.title}</h1>
        <div className="flex flex-col gap-20 md:grid md:grid-cols-2 lg:grid-cols-3">
          {blogText.posts.map((post) => {
            return <PostCard key={post.id} postInfo={post} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Blog;

import React from "react";
import PostCard from "../components/BlogComponents/PostCard";
import { styleContainerTop } from "../Utilities/customStyles";
import { useLanguage } from "../Context/LanguageContext";

const Blog = () => {
    const { textLanguage } = useLanguage()

  return (
    <main className={styleContainerTop}>
      <div className="flex flex-col gap-10">
        <h1>{textLanguage.blog.title}</h1>
        <div className="flex flex-col gap-20 md:grid md:grid-cols-2 lg:grid-cols-3">
          {textLanguage.blog.blogList.map((post) => {
            return <PostCard key={post.id} postInfo={post} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Blog;

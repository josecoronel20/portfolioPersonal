import React from "react";
import useLanguage from "../../Hooks/useText";
import PostCard from "./Components/PostCard";
import { styleContainerTop } from "../../utilities/styles/customStyles";
import useQuickTraduction from "../../hooks/useQuickTraduction";

const Blog = () => {
  const { blogText } = useLanguage({ typeText:"blogText"});

  const textBlogTitle = useQuickTraduction({
    textEs: "POSTEOS DE MI BLOG PERSONAL",
    textEn: "POSTS FROM MY PERSONAL BLOG",
  });
  return (
    <main className={styleContainerTop}>
      <div className="flex flex-col gap-10">
        <h1>{textBlogTitle}</h1>
        <div className="flex flex-col gap-20 md:grid md:grid-cols-2 lg:grid-cols-3">
          {blogText.map((post) => {
            return <PostCard key={post.id} postInfo={post} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default Blog;

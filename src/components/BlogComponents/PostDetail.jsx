import React from "react";
import { styleContainerTop } from "../../Utilities/customStyles";
import { useParams } from "react-router-dom";
import useLanguage from "../../Hooks/useLanguage";

const PostDetail = () => {
  const { id } = useParams();
  const { blogtext } = useLanguage({ typeText: "blogText" });
  const post = blogtext.posts.find((post) => post.id === parseInt(id));

  return (
    <div className={styleContainerTop}>
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

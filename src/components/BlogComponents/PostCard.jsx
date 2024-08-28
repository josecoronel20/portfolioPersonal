import React from "react";
import { Link } from "react-router-dom";
import { styleButtonCard } from "../../Utilities/customStyles";

const PostCard = ({ postInfo }) => {
  return (
    <div className="bg-lightLight rounded-md overflow-hidden">
      <img className="p-2" src={postInfo.image} alt="" />
      <div className="p-2">
        <h2 className="text-lg font-bold text-darkDark">
          {postInfo.title.toUpperCase()}
        </h2>
        <p className="font-light text-darkDark">{postInfo.description}</p>

        <Link className={styleButtonCard} to={`/blog/${postInfo.id}`}>
          VER POST
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

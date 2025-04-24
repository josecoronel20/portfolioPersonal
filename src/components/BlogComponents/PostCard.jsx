import React from "react";
import { Link } from "react-router-dom";
import { styleButtonCard } from "../../Utilities/customStyles";

const PostCard = ({ postInfo }) => {
  return (
    <div className="bg-lightLight rounded-md overflow-hidden flex flex-col  max-w-96 p-2 gap-2">
      <img className="rounded max-h-60 object-none" src={postInfo.image} alt="" />
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold text-darkDark">
          {postInfo.title.toUpperCase()}
        </h2>
        <div>
          <Link className={styleButtonCard} to={`/blog/${postInfo.id}`}>
            VER POST
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

import React from "react";
import { styleButtonCard } from "../../lib/utilities/customStyles";
import { post } from "../../lib/utilities/types";
import Link from "next/link";
import Image from "next/image";

//Componente PostCard que renderiza cada Post.
const PostCard = ({ postInfo }: { postInfo: post }): JSX.Element => {
  //card que visualiza cada Post
  return (
    <div className="bg-lightLight rounded-md overflow-hidden flex flex-col  max-w-96 p-2 gap-2">
      <Image
        className="rounded max-h-60 object-none"
        src={postInfo.image}
        alt=""
        width={500}
        height={500}
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold text-darkDark">
          {postInfo.title.toUpperCase()}
        </h2>
        <div>
          <Link className={styleButtonCard} href={`/Blog/${postInfo.id}`}>
            VER POST
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

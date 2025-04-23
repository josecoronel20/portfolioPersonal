import React from "react";
import { styleContainerTop } from "../../Utilities/customStyles";
import { useParams } from "react-router-dom";
import ImageModal from "../ReutilizableComponents/ImageModal";
import { useLanguage } from "../../Context/LanguageContext";

const PostDetail = () => {
  const { id } = useParams();
const {textLanguage} = useLanguage()

  const post = textLanguage.blog.blogList.find((post) => post.id === parseInt(id));
  const idPar = parseInt(post.id) % 2;

  return (
    <div className={styleContainerTop}>
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-xl">{post.title.toUpperCase()}</h1>
        <div
          className={`flex flex-col gap-5 justify-center items-center ${
            idPar === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >

          <p  className="font-light w-full">{post.description}</p>

          <div className="w-1/2">
            <ImageModal>
              <img className="rounded-xl" src={post.image} alt={post.altImg} />
            </ImageModal>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-green text-lg">{post.subtitle}</h2>
          <p className="font-light">{post.content}</p>
        </div>
        <p>{post.conclusion}</p>
      </div>
    </div>
  );
};

export default PostDetail;

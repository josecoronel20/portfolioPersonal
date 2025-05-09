import React from "react";
import { styleContainerTop } from "../../utilities/customStyles";
import { useParams } from "react-router-dom";
import ImageModal from "../ReutilizableComponents/ImageModal";
import {  useLanguageStore } from "../../store/useLanguageStore";

const PostDetail = ():JSX.Element => {
  //extrae el id del url
  const { id } = useParams() ;

  //importa el idioma del store
  const { textLanguage } = useLanguageStore();

  //guard clause por si hay un error con id
  if (!id) {
    return <p className="w-full text-center text-red-700">no se encontró la id</p>;
  }

  //filtra el post segun id
  const post = textLanguage.blog.blogList.find(
    (post) => post.id ===  parseInt(id) 
  );

  //guard clause por si hay un error con el post filtrado
  if (!post) {
    return <p className="w-full text-center text-red-700">no se encontró el post</p>;
  }

  const idPar = post.id % 2;

  return (
    <div className={styleContainerTop}>
      <div className="flex flex-col gap-10 justify-center items-center max-w-3xl">
        <h1 className="text-xl">{post.title.toUpperCase()}</h1>
        <div
          className={`flex flex-col gap-5 justify-center items-center ${
            idPar === 0 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <p className="font-light w-full">{post.description}</p>

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

import React from "react";
import useQuickTraduction from "../Hooks/useQuickTraduction";

const SeeMore = ({state, handler}) => {

    const textSeeMore = useQuickTraduction({textEs:"...ver más" , textEn:"...see more" })
    const textSeeLess = useQuickTraduction({textEs:"ver menos" , textEn:"see less" })
  return (
    <div
      onClick={handler}
      className="text-darkLight text-sm cursor-pointer text-nowrap inline-block"
    >
      {state === false ? textSeeMore : textSeeLess}
    </div>
  );
};

export default SeeMore

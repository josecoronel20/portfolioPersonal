import React from "react";

const CarouselDots = ({numberDots, currentDot}) => {
    console.log(currentDot)

    return(<div className="flex gap-1">
        {numberDots.map((dot) => {
           return <div className={`p-[4px] opacity-100 rounded-full bg-lightLight ${currentDot !== numberDots.indexOf(dot) && "opacity-50"}`} key={numberDots.id}/>
        })}
    </div>)
}

export default CarouselDots
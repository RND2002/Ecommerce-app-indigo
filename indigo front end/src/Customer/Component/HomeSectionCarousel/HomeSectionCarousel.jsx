import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


const HomeSectionCarousel = ({data,sectionname}) => {
    const [activeIndex,setActiveIndex]=useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev=()=>setActiveIndex(activeIndex-1)
  const slideNext=()=>setActiveIndex(activeIndex+1)

  const syncActiveIndex=({item})=>setActiveIndex(item)
  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}/>);
  return (
    <div className="  border ">
        <h2 className="text-2xl font-extrabold text-grey-900 py-5">{sectionname}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonControls
          disableDotsControls
          //   autoPlay
          
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
       {activeIndex!==items.length-5 &&
        <Button
        onClick={slideNext}
          variant="contained"
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-level="next"
        >
          <ArrowBackIosNewIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>
       }

        {activeIndex!==0 &&
        <Button
        onClick={slidePrev}
      variant="contained"
      className="z-50"
      sx={{
        position: "absolute",
        top: "8rem",
        left: "0rem",
        transform: "translateX(-50%) rotate(-90deg)",
        bgcolor: "white",
      }}
      aria-level="next"
    >
      <ArrowBackIosNewIcon
        sx={{ transform: "rotate(90deg)", color: "black" }}
      />
    </Button>
        }
      </div>
    </div>
  );
};

export default HomeSectionCarousel;

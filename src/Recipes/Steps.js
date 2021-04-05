import React, { useState, useRef } from "react";
import Carousel from "react-material-ui-carousel";
import Step from "./Step";

const Steps = ({ photos }) => {
    const [auto, setAuto] = useState(true);
    const last = useRef(null);

    return (
        <>
            <Carousel
                onChange={() => {
                    last.current.scrollIntoView({ block: "end", inline: "end", behavior: "smooth" });
                }}
                autoPlay={auto}
                navButtonsProps={{
                    style: {
                        backgroundColor: "gray",
                    },
                }}
                animation="slide"
                cycleNavigation="true"
                navButtonsAlwaysVisible="true"
            >
                {photos.map((p) => (
                    <Step
                        onClick={() => {
                            setAuto(false);
                        }}
                        key={p.photo_id}
                        photo={p}
                        title={p.text_ru}
                    />
                ))}
            </Carousel>
            <div ref={last} />
        </>
    );
};

export default Steps;

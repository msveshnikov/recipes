import React from "react";
import Typography from "@material-ui/core/Typography";

const Step = ({ photo, title, onClick }) => (
    <>
        <Typography dangerouslySetInnerHTML={{ __html: title }} />
        <img onClick={onClick} style={{ marginTop: "15px" }} width="100%" src={photo.src_big} alt="" />
    </>
);

export default Step;

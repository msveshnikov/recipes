import React from "react";
import Typography from "@material-ui/core/Typography";

const Step = ({ photo, title }) => (
    <div key={photo.photo_id}>
        <Typography dangerouslySetInnerHTML={{ __html: title }} />
        <img
            style={{ marginTop: "15px" }}
            width="100%"
            src={photo.src_big}
            // onError={(e) => {
            //     e.target.src = photo.src;
            // }}
            alt=""
        />
    </div>
);

export default Step;

import React from "react";
import Typography from "@material-ui/core/Typography";

const Step = ({ photo, title, onClick }) => (
    <>
        <Typography dangerouslySetInnerHTML={{ __html: title }} />
        {photo && (
            <img
                onClick={onClick}
                style={{ marginTop: "15px" }}
                width="100%"
                height="100%"
                src={photo?.src_big?.replaceAll("http://","https://")}
                alt=""
            />
        )}
    </>
);

export default Step;

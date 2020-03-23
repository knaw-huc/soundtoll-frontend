import React from "react";
import Lightbox from "react-image-lightbox";

function ImageViewer(props: {url: string, closeImage: void}) {


        return (
            <Lightbox
                mainSrc={props.url}
                onCloseRequest={() => props.closeImage}
                imageLoadErrorMessage="Image was not found!"
            />
        );

}

export default ImageViewer;
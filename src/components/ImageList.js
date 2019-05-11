import React from 'react';


//functional component
const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <img src={image.urls.regular} />
    });
    return <div>{images}</div>
};

export default ImageList;
import React from 'react';

let GetImageButton = (props) => {
    return (
      <div className="search_button">
        <button onClick={props.search} className="btn btn-primary">
          GET IMAGES
        </button>
      </div>
    )
  }

export default GetImageButton;

import propTypes from "prop-types";

const ImageComponent = ({ linkOfImage, alt }) => {
  const imageStyles = {
    width: "200px",
    height: "200px",
    borderRadius: "50px",
  };
  const divStyles = {
    width: "100%",
    height: "auto",
    border: "1px solid #ccc",
    borderRadius: "50px",
    margin: "1rem",
    padding: "1rem",
  };
  return (
    <div style={divStyles}>
      <img src={linkOfImage} alt={alt} style={imageStyles} />
    </div>
  );
};

ImageComponent.propTypes = {
  linkOfImage: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};

export default ImageComponent;

import ExampleImage from '../assets/ExampleImage.jpg'

const ExampleCarouselImage = ({ src, text }) => {
    return (
      <img
        className="d-block w-100"
        src={src=ExampleImage} // Pass the image source as a prop
        alt={text}
      />
    );
  };
  
  export default ExampleCarouselImage;
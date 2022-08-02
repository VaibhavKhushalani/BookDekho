import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assests/book1.jpg";
import Slide2 from "../../assests/book2.jpg";
import Slide3 from "../../assests/book3.jpg";
function Slider() {
  return (
    <div className="mt-5">
      <Carousel fade prevIcon="" nextIcon="">
        <Carousel.Item>
          <img className="slider-img" src={Slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider-img" src={Slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="slider-img" src={Slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;

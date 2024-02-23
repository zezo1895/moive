import React from "react";
import { Carousel, CarouselCaption, Container } from "react-bootstrap";
import "../component/landing.css";
import "boxicons";
import image from "../asset/stretched-1920-1200-1314571.jpeg";
import image2 from "../asset/15.jpg";
import image3 from "../asset/فيلم-Expend4bles-2023-مترجم-كوفر.jpg";
import logo1 from "../asset/Oppenheimer_Movie_Logo_2023-1.png";
import logo2 from "../asset/Barbie_2023_movie_logo.png";
import logo3 from "../asset/فيلم-Expend4bles-2023-مترجم-لوجو-1.png";

const Landing = () => {
  return (
    <div className="landing">
      <Carousel>
        <Carousel.Item>
          <div className="image">
            <div className="overlay"></div>
            <div className="overlay2"></div>
            <img className="img22" src={image} />
            <div className="note">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
          </div>

          <Carousel.Caption>
          
            <img className="logo22" src={logo1} alt="" />
            <p className="typedate">
              افلام اجنبية . تاريخ . دراما . سيره ذاتيه . 2023
            </p>
            <div className="details">
              <p>
                تدور أحداث العمل في إطار درامي حول السيرة الذاتية وقصة العالم
                الأمريكي روبرت أوبنهايمر ودوره في تطوير القنبلة الذرية، وكيف غير
                مشروع مانهاتن من كل شيء في العالم.
              </p>
            </div>
            <div className="buttons">
              <button className="btn1 border-0">
                مشاهده الان{" "}
                <span>
                  <box-icon name="tv" color="#fff"></box-icon>
                </span>
              </button>
              <button className="btn2 border-0">
                {" "}
                اضف الى قائمتى
                <span>
                  <box-icon color="#fff" name="plus"></box-icon>
                </span>
              </button>
            </div>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image">
            <div className="overlay"></div>
            <div className="overlay2"></div>
            <img className="img22" src={image2} />
            <div className="note">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
          </div>
          <Carousel.Caption>
            
            <img className="logo22" src={logo2} alt="" />
            <p className="typedate">افلام اجنبية . كوميدى . مغامرات . 2023</p>
            <div className="details">
              <p>
                تعيش دمية في مدينة باربيلاند تُدعى باربي، وحينما تُطرد من
                المدينة بسبب عدم كونها مثالية، تنطلق باربي في مغامرة بالعالم
                الحقيقي على أمل إثبات جدارتها والعودة إلى وطنها.
              </p>
            </div>
            <div className="buttons">
              <button className="btn1 border-0">
                مشاهده الان{" "}
                <span>
                  <box-icon name="tv" color="#fff"></box-icon>
                </span>
              </button>
              <button className="btn2 border-0">
                {" "}
                اضف الى قائمتى
                <span>
                  <box-icon name="plus" color="#fff"></box-icon>
                </span>
              </button>
            </div>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image">
            <div className="overlay"></div>
            <div className="overlay2"></div>{" "}
            <img className="img22" src={image3} />
            <div className="note">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
          </div>
          <Carousel.Caption>
        
            <img className="logo22" src={logo3} alt="" />

            <p className="typedate">اثاره . اكشن . رعب . مغامرات . 2023</p>
            <div className="details">
              <p>
                يعود فريق المرتزقة من جديد من أجل التصدي لتاجر أسلحة يمتلك جيشًا
                كبيرًا يسعى من خلاله لتدمير كل شيء.
              </p>
            </div>
            <div className="buttons">
              <button className="btn1 border-0">
                مشاهده الان{" "}
                <span>
                  <box-icon name="tv" color="#fff"></box-icon>
                </span>
              </button>
              <button className="btn2 border-0">
                {" "}
                اضف الى قائمتى
                <span>
                  <box-icon name="plus" color="#fff"></box-icon>
                </span>
              </button>
            </div>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Landing;

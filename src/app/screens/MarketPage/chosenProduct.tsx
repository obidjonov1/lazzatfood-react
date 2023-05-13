import React, { useState } from "react";
import { Favorite } from "@mui/icons-material";
import { Container, Rating, Button, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Marginer from "../../components/marginer";
import Checkbox from "@mui/material/Checkbox";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineLike } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
SwiperCore.use([Autoplay, Navigation, Pagination]);

// const labels: { [index: string]: string } = {
//   0.5: "Useless",
//   1: "Useless+",
//   1.5: "Poor",
//   2: "Poor+",
//   2.5: "Ok",
//   3: "Ok+",
//   3.5: "Good",
//   4: "Good+",
//   4.5: "Excellent",
//   5: "Excellent+",
// };

export function ChosenProduct() {
  const value = 5;
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Submitted review:", { message });
    // add code to send review data to server or do something else with it
  };

  return (
    <Container>
      <div className="chosen_dish_page">
        <Container className="dish_container">
          <div className={"chosen_dish_slider"}>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="swip"
              // autoplay={{
              //   delay: 30000,
              //   disableOnInteraction: true,
              // }}
            >
              <SwiperSlide className="chosen-dish_slider">
                <img src="/images/food2.jpeg" alt="" className="slide_img" />
              </SwiperSlide>
              <SwiperSlide className="chosen-dish_slider">
                <img src="/images/food2.jpeg" alt="" className="slide_img" />
              </SwiperSlide>
              <SwiperSlide className="chosen-dish_slider">
                <img src="/images/food2.jpeg" alt="" className="slide_img" />
              </SwiperSlide>
              <SwiperSlide className="chosen-dish_slider">
                <img src="/images/food2.jpeg" alt="" className="slide_img" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className={"chosen_dish_info_container"}>
            <div className={"chosen_dish_info_box"}>
              <strong className={"dish_txt"}>Product Name</strong>
              <span className={"resto_name"}>Market Name</span>
              <div className={"rating_box"}>
                <Rating
                  name="text-feedback"
                  value={value}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Box sx={{ ml: "-250px", mb: 0.5, fontSize: "18px" }}>(5)</Box>
                <div className="evaluation_box">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "20px",
                    }}
                  >
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      /* @ts-ignore */
                      checked={false}
                    />

                    <span>98</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                    <span>1000</span>
                  </div>
                </div>
              </div>
              <p className={"dish_desc_info"}>
                Juda mazzali sandwich Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Saepe optio possimus eveniet, corrupti, modi
                neque delectus ullam repellat perspiciatis adipisci perferendis
                aliquam. Labore ab consequatur alias exercitationem, ipsa,
                mollitia culpa nam officiis omnis velit minima distinctio rem
                suscipit reprehenderit voluptates! adipisicing elit. Saepe optio
                possimus eveniet, corrupti, modi neque delectus ullam repellat
                perspiciatis adipisci perferendis al adipisicing elit. Saepe
                optio possimus eveniet, corrupti, modi neque delectus ullam
                repellat perspiciatis adipisci perferendis al adipisicing elit.
                Saepe optio possimus eveniet, corrupti, modi neque delectus
                ullam repellat perspiciatis adipisci perferendis al
              </p>
              <Marginer
                direction="horizontal"
                height="1"
                width="100%"
                bg="#c8c7c7"
              />
              <div className={"dish_price_box"}>
                <span>Price:</span>
                <span>$10</span>
              </div>
              <div className="button_box">
                <Button
                  variant="contained"
                  style={{ color: "#fff", background: "#ff6600d3" }}
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <h2 className="product-review">Product Reviews</h2>
      <div className="product-review_cont">
        <div className="product-review_box">
          <div className="review_avatar">
            <img src="/images/default_user.svg" alt="" />
          </div>
          <div className="review_body">
            <div className="review_nick">Sarvar</div>
            <div className="review_info">
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <span className="review_date">23-05-13</span>
              <span className="review_like">
                99
                <AiOutlineLike className="review_like_icon" />
                <IoMdTrash className="review_like_icon" />
              </span>
            </div>
            <div className="review_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              maxime ad deleniti dicta aliquid perspiciatis non repudiandae
              mollitia facere accusantium. maxime ad deleniti dicta aliquid
              perspiciatis non repudiandae mollitia facere accusantium
            </div>
          </div>
        </div>
        <div className="product-review_box">
          <div className="review_avatar">
            <img src="/images/default_user.svg" alt="" />
          </div>
          <div className="review_body">
            <div className="review_nick">Sarvar</div>
            <div className="review_info">
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <span className="review_date">23-05-13</span>
              <span className="review_like">
                99
                <AiOutlineLike className="review_like_icon" />
                <IoMdTrash className="review_like_icon" />
              </span>
            </div>
            <div className="review_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              maxime ad deleniti dicta aliquid perspiciatis non repudiandae
              mollitia facere accusantium. maxime ad deleniti dicta aliquid
              perspiciatis non repudiandae mollitia facere accusantium
            </div>
          </div>
        </div>
        <div className="product-review_box">
          <div className="review_avatar">
            <img src="/images/default_user.svg" alt="" />
          </div>
          <div className="review_body">
            <div className="review_nick">Sarvar</div>
            <div className="review_info">
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <span className="review_date">23-05-13</span>
              <span className="review_like">
                99
                <AiOutlineLike className="review_like_icon" />
                <IoMdTrash className="review_like_icon" />
              </span>
            </div>
            <div className="review_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              maxime ad deleniti dicta aliquid perspiciatis non repudiandae
              mollitia facere accusantium. maxime ad deleniti dicta aliquid
              perspiciatis non repudiandae mollitia facere accusantium
            </div>
          </div>
        </div>
        <div className="product-review_box">
          <div className="review_avatar">
            <img src="/images/default_user.svg" alt="" />
          </div>
          <div className="review_body">
            <div className="review_nick">Sarvar</div>
            <div className="review_info">
              <Rating
                name="text-feedback"
                value={value}
                readOnly
                precision={0.5}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              <span className="review_date">23-05-13</span>
              <span className="review_like">
                99
                <AiOutlineLike className="review_like_icon" />
                <IoMdTrash className="review_like_icon" />
              </span>
            </div>
            <div className="review_text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
              maxime ad deleniti dicta aliquid perspiciatis non repudiandae
              mollitia facere accusantium. maxime ad deleniti dicta aliquid
              perspiciatis non repudiandae mollitia facere accusantium
            </div>
          </div>
        </div>
      </div>
      <div className="review-form">
        <h2>Write Review</h2>
        <form onSubmit={handleSubmit}>
          <Rating name="half-rating" defaultValue={0} precision={0.5} />
          <label htmlFor="review-message">Write your comment:</label>
          <textarea
            id="review-message"
            name="review-message"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </Container>
  );
}

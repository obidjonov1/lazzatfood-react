import { Container } from "@mui/system";
import React from "react";
import "../../../css/about_us.css";
import { NavbarOthersBanner } from "./banner";

export function NewsPage() {
  return (
    <div>
      <NavbarOthersBanner />
      <Container>
        <div className="news-container">
          <div className="container">
            <div className="news_box">
              <div className="news-box_content">
                <div className="box_content_img">
                  <img src="./images/e-commerse.png" alt="" />
                </div>
                <div className="box_content_title">
                  <h2 className="content_title">
                    Great news. Our mobile app...
                  </h2>
                  <p className="content_desc">
                    In South Korea, halal meat products, beverages, canned
                    goods, sausages and all other types of products online
                    shopping and delivery app. It's all you for our customers.
                  </p>
                  <p className="content_date">23.05.15 23:00</p>
                </div>
              </div>

              <div className="news-box_content">
                <div className="box_content_img">
                  <img src="./images/kolbasa.jpeg" alt="" />
                </div>
                <div className="box_content_title">
                  <h2 className="content_title">
                    LazzatFood's halal sausages are on sale
                  </h2>
                  <p className="content_desc">
                    - if you are our regular customer, we have a special gift
                    for you!!! - If you are the owner of Uzbek halal restaurants
                    and stores in Korea, we invite you for reliable cooperation!
                  </p>
                  <p className="content_date">23.04.30 15:00</p>
                </div>
              </div>
              <div className="news-box_content">
                <div className="box_content_img">
                  <img src="./images/website.jpg" alt="" />
                </div>
                <div className="box_content_title">
                  <h2 className="content_title">
                    Mobile version of www.lazzatfood.com website coming soon
                  </h2>
                  <p className="content_desc">
                    Now go to our www.lazzatfood.com via your mobile device
                    visit and make your convenient purchase possible Place
                    products in the shopping cart and other facilities will be
                    available
                  </p>
                  <p className="content_date">23.04.16 23:00</p>
                </div>
              </div>

              <div className="news-box_content">
                <div className="box_content_img">
                  <img src="./images/pay.jpg" alt="" />
                </div>
                <div className="box_content_title">
                  <h2 className="content_title">Payment through the website</h2>
                  <p className="content_desc">
                    Payment system for all types of products coming soon We are
                    launching a better and more convenient system. You "Bank
                    card", "Money transfer" you can make a payment will be
                  </p>
                  <p className="content_date">23.04.15 11:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

import { Container } from "@mui/system";
import React from "react";
import "../../../css/about_us.css";

export function NewsPage() {
  return (
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
                  Ajoyib yangilik. Bizning mobil ilovamiz...
                </h2>
                <p className="content_desc">
                  Janubiy Koreyada halol go'sht mahsulotlari, ichimliklar,
                  konserva, kolbasa va boshqa xil turdagi barcha mahsulotlarni online harid
                  qilish va yetkazib berish ilovasi. Hammasi siz mijozlarimiz
                  uchun.
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
                  Tez kunda LazzatFood halol kolbasalari sotuvda
                </h2>
                <p className="content_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis, minus! Repellendus, soluta sint quasi totam,
                  ipsum praesentium asperiores, molestiae a placeat harum vero
                  rerum exercitationem?
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
                  Tez kunda www.lazzatfood.com websitening mobile versiasi
                </h2>
                <p className="content_desc">
                  Endi mobile qurilmangiz orqali bizning www.lazzatfood.com ga
                  tashrif buyurib qulay haridingizni amalga oshirishingiz
                  mumkin. Mahsulotlarni savtchaga joylash va boshqa qulayliklar
                  mavjud bo'ladi
                </p>
                <p className="content_date">23.04.16 23:00</p>
              </div>
            </div>

            <div className="news-box_content">
              <div className="box_content_img">
                <img src="./images/pay.jpg" alt="" />
              </div>
              <div className="box_content_title">
                <h2 className="content_title">Web site orqali to'lov</h2>
                <p className="content_desc">
                  Tez orada barcha turdagi mahsulotlar uchun to'lov tizmini
                  yanada yaxshilab, qulay tizmini yo'lga qo'ymoqdamiz. Siz "Bank
                  kartasi", "Pul o'tkazish" to'lovni amalga oshirishingiz mumki
                  bo'ladi.
                </p>
                <p className="content_date">23.04.15 11:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

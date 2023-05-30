import { Container } from "@mui/system";
import React from "react";
import { NavbarOthersBanner } from "./banner";

export function DeliveryPolicyPage() {
  return (
    <div>
      <NavbarOthersBanner />
      <Container>
        <div className="about-us__title">
          <h2>Instant delivery service</h2>
          <p></p>
          <span>
            The LAZZATFOOD team pays special attention to the quality of
            delivering the mails to customers. All the precautionary measures
            are taken to ensure that the goods arrive in perfect condition,
            depending on their type. During hot summer days, products such as
            meat are shipped with ice packs and in a special foam block.
            <br /> <br />
            Most importantly, with our smart delivery system, customers are
            charged reasonable prices according to the size of package ranging
            from ₩3.900 to ₩4.500. On top of that, we offer absolutely Free
            Delivery for orders over ₩100.000 regardless of the size of the
            mail.
            <br /> <br />
            The goods will be delivered to any address in Korea, within 1-2
            business days. Orders placed before 4:00 pm every day from Monday to
            Friday will ship the same day. And you can get them the next day.
            This especially contributes to the quality of food delivery.
          </span>
        </div>
      </Container>
    </div>
  );
}

import { Container } from "@mui/system";
import React from "react";
import { NavbarOthersBanner } from "./banner";

export function AboutUsPage() {
  return (
    <div>
      <NavbarOthersBanner />
      <Container>
        <div className="about-us__title">
          <h2>Welcome !</h2>
          <p>We are glad to see you here !</p>
          <span>
            Our main objective is to make your life in Korea more enjoyable. We
            have made it our primary goal to serve you with top-class goods and
            services. Since our establishment, we have launched numerous
            services including mobile top-up and online shopping, and thanks to
            your continuous support we have grown into a sizable organization.{" "}
            <br />
            <br />
            We now have more than ten thousand loyal customers who use our
            services on daily basis. In addition, we would like to extend our
            gratitude and appreciation to our partners and hope to continue our
            effective and successful cooperation in the future.
            <br /> <br />
            On behalf of our team, we would like to thank you for choosing us.
            Your support is important to us and your satisfaction is our top
            priority.
          </span>
        </div>
      </Container>
    </div>
  );
}

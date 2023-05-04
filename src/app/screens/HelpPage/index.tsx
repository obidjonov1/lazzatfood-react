import React from "react";
import { Container } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function HelpPage() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container>
      <div className="help_page">
        <h2 className="help-page_top">Contact Us: 010-5448-9811</h2>
        <Accordion
          className="help_accardion"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">How the payment is made ?</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              You can make the payment through the KakaoPay and Master or Visa
              Card applications!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="help_accardion"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">
                How long does it take for orders to arrive ?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              Orders are shipped within 1/2 business day from the date of
              purchase
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="help_accardion"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">
                If I use the site, is there a guarantee for the safety of my
                data ?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              Of course, our developer is your data they guarantee safety
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="help_accardion"
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">
                Who do I contact if there is a problem on the site ?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              Dear customer, please send a letter to the admin section use it
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="help_accardion"
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">
                I operate as a businessman, not a user I don't want to drive.
                What should I do ?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              Dear customer, call the phone numbers listed on the site we ask
              you to do it
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="help_accardion"
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">
                What should I do if I want to reset my password ?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              Please do not update your password as much as possible. Our
              program In this version, you can enter your password only at
              010-5448-9811 you will be able to update by calling..
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="help_accardion"
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">
                Why do some products have the halal mark, but others do not?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              All the products we sell are considered halal. Products with the
              halal symbol have received a halal certificate. Products without
              this mark are not certified. But that doesn't mean it's not legal.
              After studying the history and production of each of our purchased
              products, we offer them to customers after making sure that they
              use halal products.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="help_accardion"
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">
                I want to cancel the order, how do I do it ?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              To cancel an order, please log in first and cancel your desired
              order from the My Orders section using the cancel button!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="help_accardion"
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">
                What should I do to pay for the order ?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              To pay for an order, you must log in and go to the My Orders page.
              You can make a payment through the payment button on the opened
              page
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="help_accardion"
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">
                Where do I enter my card information ?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              You must enter your card details in the special place on the right
              side of the My Orders page
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="help_accardion"
          expanded={expanded === "panel11"}
          onChange={handleChange("panel11")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">I want to write an article</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              To write an article, just click the write article button from the
              section of my page!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="help_accardion"
          expanded={expanded === "panel12"}
          onChange={handleChange("panel12")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              style={{ width: "100%" }}
              sx={{ width: "33%", flexShrink: 0 }}
            >
              <p className="help-accardion_title">Can I join the chat ?</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="help-accardion_subtitle">
              Of course, register on our site and feel free to use the Community
              section and leave your comments!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
}

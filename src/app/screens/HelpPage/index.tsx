import React, { useState } from "react";
import { Container } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack } from "@mui/material";
import { NavbarOthersBanner } from "./banner";

import "../../../css/help.css";

export function HelpPage() {
  /** INITIALIZATIONS **/
  const [value, setValue] = useState("1");

  const handleChanges = (event: any, newValue: string) => {
    setValue(newValue);
  };

  const rules = [
    "In order to use the site fully, that is, to make orders and use live communications, you must register.",
    "Please follow the rules of etiquette on our site!",
    "Your orders cannot be canceled once you have paid for them so please check before making payments..",
    "The use of obscene words during live communication is strictly prohibited.",
    "It is not possible to write and distribute personal ads without the permission of the admin.",
    "Your articles must not go beyond the bounds of decency.",
    "All your actions are under the control of our admins, so please respect our requirements.",
  ];

  const FAQ = [
    {
      question: "How the payment is made ?",
      answer:
        "You can make the payment through the KakaoPay and Master or VisaCard applications!",
    },
    {
      question: "How long does it take for orders to arrive ?",
      answer:
        "Orders are shipped within 1/2 business day from the date of purchase",
    },
    {
      question:
        "If I use the site, is there a guarantee for the safety of mydata ?",
      answer: "Of course, our developer is your data they guarantee safety",
    },
    {
      question: "Who do I contact if there is a problem on the site ?",
      answer: "Dear customer, please send a letter to the admin section use it",
    },
    {
      question:
        "I operate as a businessman, not a user I don't want to drive. What should I do ?",
      answer:
        "Dear customer, call the phone numbers listed on the site we ask you to do it",
    },
    {
      question: "What should I do if I want to reset my password ?",
      answer:
        "Please do not update your password as much as possible. Our program In this version, you can enter your password only at 010-5448-9811 you will be able to update by calling..",
    },
    {
      question: "Why do some products have the halal mark, but others do not ?",
      answer:
        "All the products we sell are considered halal. Products with the halal symbol have received a halal certificate. Products without this mark are not certified. But that doesn't mean it's not legal. After studying the history and production of each of our purchased products, we offer them to customers after making sure that they use halal products.",
    },
    {
      question: "I want to cancel the order, how do I do it ?",
      answer:
        "To cancel an order, please log in first and cancel your desired order from the My Orders section using the cancel button!",
    },
    {
      question: "What should I do to pay for the order ?",
      answer:
        "To pay for an order, you must log in and go to the My Orders page. You can make a payment through the payment button on the opened page",
    },
    {
      question: "Where do I enter my card information ?",
      answer:
        "You must enter your card details in the special place on the right side of the My Orders page",
    },
    {
      question: "I want to write an article",
      answer:
        "To write an article, just click the write article button from the section of my page!",
    },
    {
      question: "Can I join the chat ?",
      answer:
        "Of course, register on our site and feel free to use the Community section and leave your comments!",
    },
  ];

  return (
    <div>
      <NavbarOthersBanner />
      <Container>
        <div className="help_page">
          <h2 className="help-page_top">Contact Us: 010-5448-9811</h2>

          <TabContext value={value}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TabList
                TabIndicatorProps={{ style: { background: "#43bb59" } }}
                onChange={handleChanges}
                aria-label="simple tabs example"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3px",
                }}
              >
                <Tab
                  label="Rules"
                  value="1"
                  style={{ color: "#000000", fontSize: "18px" }}
                />
                <Tab
                  label="FAQ"
                  value="2"
                  style={{ color: "#000000", fontSize: "18px" }}
                />
              </TabList>
            </div>

            <TabPanel value="1">
              <Stack className={"theRules_box"}>
                <Box className={"theRulesFrame"}>
                  {rules.map((ele) => {
                    return <p>{ele}</p>;
                  })}
                </Box>
              </Stack>
            </TabPanel>

            <TabPanel value="2">
              <Stack className="help_accardin">
                {FAQ.map((ele) => {
                  return (
                    <Accordion className="help_accardion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography
                          style={{ width: "100%" }}
                          sx={{ width: "33%", flexShrink: 0 }}
                        >
                          <p className="help-accardion_title">{ele.question}</p>
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className="help-accardion_subtitle">
                          {ele.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Stack>
            </TabPanel>
          </TabContext>
        </div>
      </Container>
    </div>
  );
}

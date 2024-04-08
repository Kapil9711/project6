import { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

const data = [
  {
    question: "what is your fav food ?",
    answer:
      "I love pizza more than anyone on this planet, If you also love the pizza then I also love you",
  },
  {
    question: "what is your fav food ?",
    answer:
      "I love pizza more than anyone on this planet, If you also love the pizza then I also love you ",
  },
  {
    question: "what is your fav food ?",
    answer:
      "I love pizza more than anyone on this planet, If you also love the pizza then I also love you",
  },
  {
    question: "what is your fav food ?",
    answer:
      "I love pizza more than anyone on this planet, If you also love the pizza then I also love you ",
  },
  {
    question: "what is your fav food ?",
    answer:
      "I love pizza more than anyone on this planet, If you also love the pizza then I also love you",
  },
  {
    question: "what is your fav food ?",
    answer:
      "I love pizza more than anyone on this planet, If you also love the pizza then I also love you",
  },
];

const BoxWrapper = ({ question: q, answer: a, i }) => {
  const [active, setActive] = useState(() => false);

  const handleOpen = () => {
    setActive(true);
  };
  const handleClose = () => {
    setActive(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "550px",
        background: "hsl(0 0% 100%)",
        padding: "20px 12px",
        borderRadius: "4px",
        position: "relative",
      }}
    >
      {active ? (
        <span onClick={handleClose}>
          <CloseIcon
            sx={{ position: "absolute", top: 0, right: 0, fontSize: "35px" }}
          />
        </span>
      ) : (
        <span style={{ padding: "8px" }} onClick={handleOpen}>
          <KeyboardArrowDownIcon
            sx={{ position: "absolute", top: 0, right: 0, fontSize: "35px" }}
          />
        </span>
      )}

      <Typography sx={{ display: "inline-block" }} variant="h6">
        {i} : {q}
      </Typography>
      {active ? <Typography>Ans - {a}</Typography> : ""}
    </Box>
  );
};

const FAQ = () => {
  const [active, setActive] = useState(() => false);
  const handleOpen = () => {
    setActive(true);
  };
  const handleClose = () => {
    setActive(false);
  };
  return (
    <Stack
      //   justifyContent={"center"}
      alignItems={"center"}
      sx={{ minHeight: "100vh", padding: "16px 8px" }}
    >
      <Stack
        spacing={3}
        alignItems={"center"}
        sx={{
          background: "hsl(0 0% 90%)",
          borderRadius: "4px",
          padding: "16px 8px",
          marginTop: "84px",
          width: "100%",
          maxWidth: "650px",
        }}
      >
        <Typography variant="h4">Frequently Asked Questions ?</Typography>
        {data.map((ele, i) => {
          return (
            <BoxWrapper
              active={active}
              handleClose={handleClose}
              handleOpen={handleOpen}
              key={"ques" + i}
              i={i + 1}
              question={ele.question}
              answer={ele.answer}
            ></BoxWrapper>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default FAQ;

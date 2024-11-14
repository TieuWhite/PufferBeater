import { Button } from "@mui/material";
import { useState } from "react";

export default function SingePlayer() {
  const [difficulty, setDifficulty] = useState();

  const buttonStyle = {
    margin: "80px",
    fontSize: "40px",
    fontFamily: "Comic Neue, cursive",
  };
  return (
    <>
      <div
        className="wiggle-text"
        style={{ display: "flex", justifyContent: "center", fontSize: "40px" }}
      >
        <h1>Select a difficulty</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: " center",
          margin: "80px 0px",
        }}
      >
        <Button
          variant="contained"
          style={{ ...buttonStyle, backgroundColor: "green" }}
          onClick={setDifficulty("easy")}
        >
          Easy
        </Button>
        <Button
          variant="contained"
          style={{ ...buttonStyle, backgroundColor: "yellow" }}
          onClick={setDifficulty("medium")}
        >
          Medium
        </Button>
        <Button
          variant="contained"
          style={{ ...buttonStyle, backgroundColor: "red" }}
          onClick={setDifficulty("hard")}
        >
          Hard
        </Button>
      </div>
    </>
  );
}

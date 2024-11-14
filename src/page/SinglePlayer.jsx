import { TextField } from "@mui/material";

export default function SinglePlayer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>Type the given word within 5 seconds</h3>
        <h1 style={{ fontSize: "4rem" }}>HamBURger</h1>
        <TextField label="start typing..." variant="outlined" />
        <div style={{ display: "flex" }}>
          <h2 id="time" style={{ margin: "20px 40px" }}>
            Time left: 0
          </h2>
          <h2 id="score" style={{ margin: "20px 40px" }}>
            Score: 0
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Instructions</h2>
          <h4>Type each word in the given amount of time to score</h4>
        </div>
      </div>
    </>
  );
}

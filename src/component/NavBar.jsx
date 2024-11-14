import Box from "@mui/material/Box";

export default function NavBar() {
  const navBarStyles = {
    display: "flex",
    justifyContent: "center",
    fontSize: "2rem",
    backgroundColor: "grey",
    padding: "30px",
  };

  return (
    <>
      <Box sx={navBarStyles}>Puffer Typer</Box>
    </>
  );
}

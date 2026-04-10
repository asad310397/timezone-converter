import { Grid } from "@mui/material";
import Clock from "./assets/clock.png";

export const AppHeader = () => {
  return (
    <Grid size={12}>
      <img className="App-logo" src={Clock} alt="clock" />
    </Grid>
  );
};

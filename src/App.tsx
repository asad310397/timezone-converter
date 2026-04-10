import React, { useEffect, useState } from "react";
import "./App.css";
import moment from "moment";
import { Grid } from "@mui/material";
import { AppHeader } from "./AppHeader";

export const dateFormat = "MMMM Do YYYY";
export const timeFormat = "h:mm:ss a";

function App() {
  const [date, setDate] = useState(moment().format(dateFormat));
  const [time, setTime] = useState(moment().format(timeFormat));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment().format(timeFormat));
      setDate(moment().format(dateFormat));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={2}>
          <AppHeader />
          <Grid size={12}>
            <h2>Current time</h2>
          </Grid>
          <Grid size={12}>
            <h1>{date}</h1>
            <h1>{time}</h1>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;

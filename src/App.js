// import React, { Component } from 'react';
import React, { useState, useEffect } from "react";
import { TopBar } from "./components/TopBar";
import { ContentBody } from "./components/ContentBody";
import { AppFooter } from "./components/Footer";

import "bulma/css/bulma.css";
import "./css/styles.scss";
import "./css/darkStyles.scss";

const App = () => {
  // Setting components state
  const [showCurrentDay, setShowCurrentDay] = useState(true);
  const [DOTY, setDOTY] = useState(0); // Passed to both <ContentBody /> and used for "View Prev Day" button in <TopBar />
  const [viewPrevText, setViewPrevText] = useState("View Yesterday's Word");

  // Invoking function on page load to set the state for the current day of the year with setDOTY();
  useEffect(() => {
    getDayOfTheYear();
  }, []);

  // Sets state for DOTY and returns that value
  const getDayOfTheYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff =
      now -
      start +
      (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    setDOTY(day);
    return day;
  };

  // Button handler for when the 'View Yesterday's Word' button
  const handleViewPrev = () => {
    if (showCurrentDay === true) {
      setDOTY(DOTY - 1);
      setShowCurrentDay(false);
      setViewPrevText("View Today's Word");
    } else {
      setDOTY(DOTY + 1);
      setShowCurrentDay(true);
      setViewPrevText("View Yesterday's Word");
    }
  };

  return (
    <>
      <TopBar buttonText={viewPrevText} handleViewPrev={handleViewPrev} />
      <ContentBody DOTY={DOTY} />
      <AppFooter />
    </>
  );
};

export default App;

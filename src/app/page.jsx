"use client";

import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function valuetext(value) {
  return `${value}`;
}

export default function Home() {
  const [totalQuestions, setTotalQuestions] = useState(5);
  const [category, setCategory] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeDifficulty = (event) => {
    setDifficulty(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setTotalQuestions(newValue);
  };

  return (
    <main className="wrapper flex justify-center items-center h-screen">
      <div className="bg-white p-3 rounded-md md:w-[90%] lg:w-[70%] w-full h-full md:h-[70%] lg:h-[70%] shadow-lg max-w-4xl">
        <h1 className="text-center p-2 text-blue-600 text-3xl tracking-wider font-bold">
          Welcome to QuizQuest
        </h1>
        <div className="w-full h-[2px] bg-border bg-slate-200"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 md:p-9 gap-5">
          <div className="h-full relative">
            <Image
              priority
              src="/quiz.png"
              alt="img"
              width="350"
              height="350"
              className="object-cover object-center vertical-middle"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 md:gap-5">
            <h2 className="text-center tracking-wider text-lg md:text-xl lg:text-2xl font-bold">
              Quiz Settings
            </h2>
            <Box sx={{ minWidth: 320 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChangeCategory}
                >
                  <MenuItem value={"General Knowledge"}>General Knowledge</MenuItem>
                  <MenuItem value={"Arts & Literature"}>Arts & Literature</MenuItem>
                  <MenuItem value={"Film & TV"}>Film & TV</MenuItem>
                  <MenuItem value={"Food & Drink"}>Food & Drink</MenuItem>
                  <MenuItem value={"Society & Culture"}>Society & Culture</MenuItem>
                  <MenuItem value={"Geography"}>Geography</MenuItem>
                  <MenuItem value={"History"}>History</MenuItem>
                  <MenuItem value={"Music"}>Music</MenuItem>
                  <MenuItem value={"Sport & Leisure"}>Sport & Leisure</MenuItem>
                  <MenuItem value={"Science"}>Science</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 320 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={difficulty}
                  label="Difficulty"
                  onChange={handleChangeDifficulty}
                >
                  <MenuItem value={"Easy"}>Easy</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"Hard"}>Hard</MenuItem>
                  
                </Select>
              </FormControl>
            </Box>

            <p className="text-sm lg:text-sm font-bold">
              Total Questions: {totalQuestions}
            </p>
            <Box sx={{ width: 300, margin: "1rem" }}>
              <Slider
                aria-label="Temperature"
                Value={totalQuestions}
                onChange={handleSliderChange}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                shiftStep={30}
                step={5}
                marks
                min={5}
                max={50}
              />
            </Box>
          </div>
        </div>
      </div>
    </main>
  );
}

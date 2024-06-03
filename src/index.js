import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StartRating from "./StartRating";
// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StartRating color="blue" maxRating={10} onSetRating={setMovieRating} />;
//       <p>This movie was rated: {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Very Good!"]}
    />
    <StartRating size={23} className="test" dafultRating={1} />
    <Test /> */}
  </React.StrictMode>
);

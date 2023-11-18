import React, { useState, useEffect } from "react";
import rotate_img from "../../assets/rotate_icons.png";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["#coding", "#designing", "#animating"];

export default function Main() {
  const [index, setIndex] = useState(0);
  const hashStyle = {
    backgroundImage: "linear-gradient(to right,var(--purpleLight),var(--cyan))",
    padding: "2px 10px 2px 10px",
    borderRadius:"10px",
    minWidth:"100px",
    color: "#FFFFFF",
  };

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      {/* <img className="logo" src={logo} /> */}
      <section className="main">
        <div className="contentText">
          <h1>
            Myself <div className="red">R Venu Manas</div>
          </h1>
          <h4>
          I'm fueled by a love for{" "}
            <TextTransition
              className=".transt"
              style={hashStyle}
              pringConfig={presets.wobbly}
              inline={true}
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>{" "}
            <br />
            and Anime equally....
          </h4>
        </div>

        <div className="fullscreen">
          <img className="rotate" src={rotate_img} />
        </div>
      </section>

      <section className="mainMob">
        <div className="fullscreen">
          <img className="rotate" src={rotate_img} />
        </div>

        <div className="contentText">
          <h1>
            Myself <div className="red">R Venu Manas</div>
          </h1>
          <h4>
            I'm fueled by a love for {" "}
            <TextTransition
              className=".transt"
              style={hashStyle}
              pringConfig={presets.wobbly}
              inline={true}
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>{" "}
            <br />
            and a hardcore fan of Anime.
          </h4>
        </div>
      </section>
    </>
  );
}

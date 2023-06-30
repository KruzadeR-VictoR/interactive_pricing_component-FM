import { useEffect, useRef, useState } from "react";
import "./App.css";
import bgPattern from "./assets/images/bg-pattern.svg";
import circles from "./assets/images/pattern-circles.svg";
import slider from "./assets/images/icon-slider.svg";
import check from "./assets/images/icon-check.svg";

function App() {
  const [isActive, setisActive] = useState(true);
  const [Value, setValue] = useState<number>(16);
  const rangeRef = useRef<HTMLInputElement | any>(null);

  const handleToggle = () => {
    setisActive((prev) => !prev);
    // console.log(isActive);
  };

  const style = {
    App: "min-h-screen bg-VeryPaleBlue",
    header: `w-full h-[25rem] bg-[url('./assets/images/bg-pattern.svg')] bg-no-repeat bg-cover md:bg-[center_bottom] flex flex-col items-center`,
    head_content: "mt-[5rem] relative z-[10]",
    heading: "main-heading text-center text-[1.5rem] font-800",
    caption:
      "text-center text-sm text-GrayishBlue font-600 mt-3 leading-[1.8em]",
    circles:
      "absolute top-[50%] translate-y-[-50%] left-[50%]  translate-x-[-50%] scale-[1.1] z-[-9]",
    // card
    card: "bg-White w-[90%] max-w-[35rem] mx-auto rounded-lg relative -top-[4rem] -translate-y-[20%] shadow-sm",
    // top
    top_section: "flex flex-col gap-10 md:gap-[3rem] p-5 pt-[2.5rem] md:p-10",
    card_heading:
      "text-center md:text-left text-[.8rem] font-800 uppercase text-GrayishBlue tracking-[2px]",
    price:
      "flex justify-center items-center gap-3 text-GrayishBlue md:absolute md:right-[2rem] md:top-[1.5rem]",
    amount: "text-4xl font-800 text-DarkDesaturatedBlue",
    toggle: "toggle_switch bg-LightGrayishBlue2",
    toggleActive: "toggle_switch bg-LightGrayishBlue2 active",
    Billing_type: "flex justify-between items-center gap-3 mx-auto",
    billing_text: "text-[.82rem] text-GrayishBlue",
    off_pecentage:
      "text-[.7rem] ml-1 bg-LightGrayishRed text-LightRed rounded-full px-2 py-[.1rem]",
    // bottom
    bottom_section:
      "flex flex-col md:flex-row items-center gap-8 p-5 pb-9 md:p-8",
    features: "flex flex-col items-center md:items-start gap-3",
    feat: "text-[.8rem] text-GrayishBlue flex items-center gap-4",
    startBtn_wrap: "flex-1 md:flex md:justify-end",
    startBtn:
      "bg-DarkDesaturatedBlue text-PaleBlue tracking-wider text-[.8rem] p-3 px-[3rem] rounded-full cursor-pointer hover:text-White",
  };

  // sets the style to slider on load
  useEffect(() => {
    // console.log(rangeRef.current?.style.background);
    let valPercent: any =
      (rangeRef.current?.value / rangeRef.current?.max) * 100;
    rangeRef.current.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${valPercent}%, hsl(224, 65%, 95%) ${valPercent}%)`;
  }, []);

  const handleValue = (e: any) => {
    // console.log(e);
    setValue(e.target.value);
    let valPercent = (e.target.value / e.target.max) * 100;
    e.target.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${valPercent}%, hsl(224, 65%, 95%) ${valPercent}%)`;
  };

  return (
    <main className={style.App}>
      <div className={style.header}>
        <div className={style.head_content}>
          <h1 className={style.heading}>Simple, traffic-based pricing</h1>
          <p className={style.caption}>
            Sign-up for our 30-day trial.
            <br /> No credit card required
          </p>
          <img src={circles} alt="circles" className={style.circles} />
        </div>
      </div>
      {/* Card  */}
      <div className={style.card}>
        <div className={style.top_section}>
          <h2 className={style.card_heading}>100K Pageviews</h2>
          <input
            type="range"
            id="Slider"
            ref={rangeRef}
            min="0"
            max="100"
            value={Value}
            onChange={(e) => handleValue(e)}
            aria-label="range"
          />
          <div className={style.price}>
            <span className={style.amount}>${Value}</span>/ month
          </div>
          <div className={style.Billing_type}>
            <div className={style.billing_text}>Monthly Billing</div>
            <div
              className={isActive ? style.toggle : style.toggleActive}
              onClick={handleToggle}
            >
              <div className="toggle_icon bg-White"></div>
            </div>
            <div className={style.billing_text}>
              Yearly Billing{" "}
              <span className={style.off_pecentage}>
                -25%{" "}
                <span className="hidden md:inline md:ml-[.1rem]">discount</span>
              </span>
            </div>
          </div>
        </div>
        <hr className="divider my-5 md:my-4" />
        <div className={style.bottom_section}>
          <div className={style.features}>
            <div className={style.feat}>
              {" "}
              <img src={check} alt="check icon" /> Unlimited websites
            </div>
            <div className={style.feat}>
              {" "}
              <img src={check} alt="check icon" /> 100% data ownership
            </div>
            <div className={style.feat}>
              {" "}
              <img src={check} alt="check icon" /> Email reports
            </div>
          </div>
          <div className={style.startBtn_wrap}>
            <button className={style.startBtn}>Start my trial</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

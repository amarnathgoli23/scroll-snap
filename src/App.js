import useScrollSnap from "react-use-scroll-snap";
import "./App.css";
import { useRef } from "react";

function App() {
  // const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 100, delay: 30 });
  return (
    <section id="wrapper">
      <div className="heading1">First Page</div>
      <div className="heading2">Second Page</div>
      <div className="heading3">Third Page</div>
      <div className="heading4">Fourth Page</div>
      <div className="heading5">Fifth Page</div>
      <div className="heading6">Sixth Page</div>
    </section>
  );
}

export default App;

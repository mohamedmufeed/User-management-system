import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const Home = () => {
  const [step, setStep] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const state = Flip.getState(".anim-item");

      // force re-render layout (new positions)
      requestAnimationFrame(() => {
        Flip.from(state, {
          duration: 1,
          ease: "power3.inOut",
          absolute: true,
          stagger: 0.1
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, [step]);

  return (
    <div ref={containerRef} className="h-screen flex flex-col items-center justify-center space-y-10">
      {step === 0 && (
        <div className="flex flex-col md:flex-row space-x-10">
          <h1 className="anim-item text-6xl">GoPro Hero</h1>
          <img src="gopro.png" className="anim-item w-64" />
        </div>
      )}
      {step === 1 && (
        <div className="flex flex-row md:flex-col space-y-6 items-center">
          <img src="gopro.png" className="anim-item w-64" />
          <h1 className="anim-item text-6xl">Next Generation</h1>
        </div>
      )}
      <button onClick={() => setStep((s) => (s + 1) % 2)}>Next</button>
    </div>
  );
};

export default Home;

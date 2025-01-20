import { useState, useEffect } from "react";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    const isLowEndDevice = () => {
      const ua = navigator.userAgent || navigator.vendor;
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    };

    setIsLowEnd(isLowEndDevice());
  }, []);

  if (isLowEnd) {
    return (
      <div className="flex justify-center">
        <p>3D models are not supported on this device.</p>
      </div>
    );
  }

  return (
    <div className="hidden sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10">
      {technologies.map((technology) => (
        <div className="h-28 w-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");

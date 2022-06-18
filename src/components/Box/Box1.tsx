import { motion } from "framer-motion";
import { useState } from "react";

const Box1 = (): React.ReactElement => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="box-container">
      <motion.div
        className="box"
        initial={{ opacity: 0.5 }}
        animate={{
          x: isAnimating ? 500 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        transition={{
          type: "spring",
          duration: 1,
        }}
        onClick={() => setIsAnimating(!isAnimating)}
      ></motion.div>
    </div>
  );
};

export default Box1;

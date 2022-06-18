import { motion } from "framer-motion";

const Box2 = (): React.ReactElement => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        drag
        dragConstraints={{
          right: 20,
          left: -20,
          top: 5,
          bottom: 5,
        }}
      ></motion.div>
    </div>
  );
};

export default Box2;

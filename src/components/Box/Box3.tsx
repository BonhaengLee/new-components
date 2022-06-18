import { motion } from "framer-motion";

const Box3 = (): React.ReactElement => {
  const boxVariants = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariants}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li key={box} className="boxItem" variants={listVariants} />
          );
        })}
      </motion.div>
    </div>
  );
};

export default Box3;

import React,{useEffect,useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";

const diagnosisPhrases = [
  "Acute Celebration",
  "Viral Excitement",
  "Adrenaline Spike",
  "Dopamine Rush",
  "Endorphin High",
];  

const longestPhrase = diagnosisPhrases.reduce(
  (a, b) => (a.length > b.length ? a : b),
  ""
);

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const charVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
};

function AnimatedPhrase() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

        

useEffect(() => {
  const interval = setInterval(() => {
    setVisible(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % diagnosisPhrases.length);
      setVisible(true);
    }, 500); // matches exit duration
  }, 3000);

  return () => clearInterval(interval);
}, []);

const currentPhrase = diagnosisPhrases[index].split("");
    
  return (
    <div className="mt-6 text-center text-white text-sm sm:text-base md:text-lg font-semibold min-h-[2.5rem]">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        {/* Label */}
        <h3 className="flex-shrink-0 text-white font-cinzel font-bold text-[18px] sm:text-[22px] md:text-[26px] leading-tight">
          Diagnosis :
        </h3>

        {/* Animated text container */}
        <div className="relative text-left max-w-[90vw] sm:max-w-[75vw] md:max-w-[50vw] min-w-[200px]">
          {/* Placeholder to maintain width and height */}
          <span className="invisible block text-lg sm:text-xl md:text-2xl font-bold leading-tight whitespace-nowrap">
            {longestPhrase}
          </span>

          {/* Visible animated content */}
          <AnimatePresence mode="wait">
            {visible && (
              <motion.span
                key={index}
                className="absolute top-0 left-0 font-cinzel italic inline-block align-middle text-lg sm:text-xl md:text-2xl font-bold leading-tight whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                >
                  {currentPhrase.map((char, idx) => (
                    <motion.span
                      key={char + idx}
                      variants={charVariants}
                      className="inline"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default AnimatedPhrase;
import React,{useEffect,useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";

const diagnosisPhrases = [
  "Acute Celebration",
  "Contagious Excitement",
  "A Surge of Adrenaline",
  "Dopamine Rush",
  "Anatomy of Awesome",
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
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 min-h-[4rem] sm:min-h-[4.5rem] md:min-h-[5rem]">
        {/* This span for "Indications Of:" is now outside the animated div */}
        <h3 className="text-white font-bold text-[18px] sm:text-[22px] md:text-[26px] leading-tight">
          Indications Of :
        </h3>
        {/* This div will contain only the animating text */}
        <div className="relative overflow-hidden text-left max-w-[90vw] sm:max-w-[75vw] md:max-w-[50vw]">
          {/* Invisible placeholder to preserve height */}
          <span className="invisible block text-lg sm:text-xl md:text-2xl font-bold leading-tight">
            {longestPhrase}
          </span>

          <AnimatePresence mode="wait">
            {visible && (
              <motion.span
                key={index}
                className="absolute top-0 left-0 inline text-lg sm:text-xl md:text-2xl font-bold leading-tight"
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
import React,{useEffect} from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function MemberCard({member,index}){
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: index * 0.05,
          ease: "easeOut",
        },
      });
    }
  }, [inView, controls, index]);
  
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    animate={controls}
    whileHover={{
      scale: 1.05,
      rotateX: 1.5,
      rotateY: 1.5,
      boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
      transition: { duration: 0.3 },
    }}
    className="group bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/20 text-center p-4 rounded-2xl shadow-xl w-full max-w-[360px] sm:w-[220px] transition-transform duration-500"
    style={{
      transformStyle: "preserve-3d",
      perspective: "1200px",
      willChange: "transform",
    }}
    >
      <img
        src={member.photo}
        alt={member.name}
        className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-indigo-500"
      />
      <h3 className="mt-3 text-lg font-bold text-white">
        {member.name}
      </h3>
      <p className="text-indigo-600 text-sm font-medium">
        {member.designation}
      </p>
      <p className="text-sm text-white break-all">
        {member.email}
      </p>
      {member.contact && (
        <p className="text-sm text-gray-400">
          📞 {member.contact}
        </p>
      )}
    </motion.div>
  );
}

function MemberSection({title,members}) {
  return (
    <section className="mb-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-6 text-center">
        {title}
      </h2>

      <div className="w-full max-w-7xl mx-auto">
        {members.length < 3 ? (
          // Use flexbox for 1 or 2 cards to center them
          <div className="flex justify-center flex-wrap gap-6">
            {members.map((member, idx) => (
              <MemberCard key={idx} member={member} index={idx} />
            ))}
          </div>
        ) : (
          // Use grid when 3 or more cards
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {members.map((member, idx) => (
              <MemberCard key={idx} member={member} index={idx} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MemberSection;
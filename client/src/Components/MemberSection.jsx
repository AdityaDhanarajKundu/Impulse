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
      className="group bg-white dark:bg-gray-800 text-center p-4 rounded-2xl shadow-md w-full max-w-[360px] sm:w-[220px] transition-transform duration-500"
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
      <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
        {member.name}
      </h3>
      <p className="text-indigo-600 text-sm font-medium">
        {member.designation}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 break-all">
        {member.email}
      </p>
      {member.contact && (
        <p className="text-sm text-gray-700 dark:text-gray-400">
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
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member, idx) => (
          <MemberCard key={idx} member={member} index={idx} />
        ))}
      </div>
    </section>
  );
}

export default MemberSection;
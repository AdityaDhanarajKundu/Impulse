import React from "react";
import {
  excutiveHeads,
  culturalHeads,
  technicalHeads,
  jointSecretaries,
  assistantSecretaries,
  sportsHeads,
  treasurers,
} from "../data/members";
import MemberSection from "../Components/MemberSection";
import Galaxy from "../assets/galaxy.mp4";

function Members() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={Galaxy}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Foreground Content */}
      <div className="relative z-10 py-12 px-4 text-white">
        <h1 className="text-[60px] font-bold text-center mb-10 text-indigo-300">
          Meet the Core Team
        </h1>
        <MemberSection title="Joint Secretaries" members={jointSecretaries} />
        <MemberSection
          title="Assistant Secretaries"
          members={assistantSecretaries}
        />
        <MemberSection title="Technical Heads" members={technicalHeads} />
        <MemberSection title="Cultural Heads" members={culturalHeads} />
        <MemberSection title="Sports Heads" members={sportsHeads} />
        <MemberSection title="Treasurers" members={treasurers} />
        <MemberSection title="Executive Heads" members={excutiveHeads} />
      </div>
    </div>
  );
}

export default Members;

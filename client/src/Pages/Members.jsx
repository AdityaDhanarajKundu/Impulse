import React from 'react';
import {
  excutiveHeads,
  culturalHeads,
  technicalHeads,
  jointSecretaries,
  assistantSecretaries,
  sportsHeads,
  treasurers,
} from "../data/members";
import MemberSection from '../Components/MemberSection';

function Members() {
  return (
    <div className="py-12 px-4 bg-gradient-to-br from-[#0f172a] to-[#1e293b] min-h-screen text-white">
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
      <MemberSection title="Excutive Heads" members={excutiveHeads} />
    </div>
  );
}

export default Members;
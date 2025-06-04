import pool from "../assets/pool.jpg";
import poker from "../assets/poker.jpg";
import whisper from "../assets/whisper.jpg";
import selfiesta from "../assets/selfiesta.jpg";
import checkotron from "../assets/checkotron.jpg";
import fifa from "../assets/fifa.jpg";
import ludo from "../assets/ludo.jpg";
import meme from "../assets/meme.jpg";
import arm from "../assets/arm.jpg";
import chroma from "../assets/chroma.jpg";
import bowl from "../assets/bowl.jpg";
import art from "../assets/art.jpg";
import photo from "../assets/photography.jpg";
import carrom from "../assets/carrom.jpg";
import paper from "../assets/paper.jpg";
import fuchka from "../assets/fuchka.jpg";
import reel from "../assets/reel.jpg";
import talent from "../assets/talent.jpg";
import uno from "../assets/uno.jpg";
import debate from "../assets/debate.jpg";
import crime from "../assets/crime.jpg";
import efootball from "../assets/efootball.jpg";
import bgmi from "../assets/bgmi.jpg";
import treasure from "../assets/treasure.jpg";
import cricket from "../assets/cricket.jpg";
import quiz from "../assets/quiz.jpg";
import kabaddi from "../assets/kabaddi.jpg";
import tug from "../assets/tug.jpg";
import race from "../assets/race.jpg";
import football from "../assets/football.jpg";
import volley from "../assets/volley.jpg";

const events = [
  {
    title: "8 Ball Pool Intra College Tournament",
    desc: "The pre-fest vibes for Impulse are officially rolling in! Get ready to chalk up your cues and join us for a thrilling 8-Ball Pool Competition. It's all about good times, friendly rivalry, and getting hyped for the main event!",
    date: "01 June",
    entryFee: "₹15",
    thumbnail: pool,
  },
  {
    title: "PokerNoia - 3 Patti + Cards 29",
    desc: `
        Shuffle Up, Doctors! It's Teen Patti Time!
Before Impulse takes over, let's get those clinical minds working on a different kind of diagnosis! Our pre-fest Teen Patti competition is your chance to ace the cards, not just the exams. Sharpen your instincts, read those tells, and let's see who's got the winning hand. May the best medico win the pot!
    `,
    date: "02 June",
    entryFee: "₹25(3Patti) | ₹50(Cards 29)",
    thumbnail: poker,
  },
  {
    title: "Checkotron",
    desc: `The Prescription for Pre-Fest Fun: Chess!
                Need a break from the textbooks but still crave a mental challenge? Our pre-fest chess competition, leading up to Impulse, is just what the doctor ordered! Come show off your strategic prowess and claim your victory.`,
    date: "03-04 June",
    entryFee: "₹20",
    thumbnail: checkotron,
  },
  {
    title: "Whisper Challenge",
    desc: "Can you guess what they're really saying? Test your lip-reading skills and your laughter limits at the Impulse Pre-Fest Whisper Challenge! Join us for an evening of hilarious miscommunications before the main event.",
    date: "05 June",
    entryFee: "₹30",
    thumbnail: whisper,
  },
  {
    title: "Reeltopia",
    desc: `Reel It In, Medicos!
Before Impulse electrifies the campus, let's get those creative synapses firing! Our pre-fest Reel Competition is calling all future doctors to showcase their cinematic flair. Whether it's a hilarious take on med school life or a dramatic short, let your creativity go viral. Time to script your success!`,
    date: "5 June",
    entryFee: "₹20",
    thumbnail: reel,
  },
  {
    title: "Selfiesta",
    desc: "Pre-Impulse Alert! Time to ace our selfie challenge. We want to see your most creative medico-themed selfies! Think lab coats, late-night study sessions, or just that brilliant medical mind at work. Tag us and use",
    date: "06 June",
    entryFee: "₹20",
    thumbnail: selfiesta,
  },
  {
    title: "H2H FIFA Tournament",
    desc: `Calling all aspiring doctors and FIFA fanatics! Prepare for the ultimate pre-fest consultation – our FIFA Mobile Competition is happening before Impulse takes over! Leave no doubt about your tactical prowess and clinical finishing. It's time to operate the joystick like a pro! Sign up and show us your best moves.`,
    date: "07 June",
    entryFee: "₹40",
    thumbnail: fifa,
  },
  {
    title: "Dice Rush",
    desc: `Roll the Dice, Medicos! Ludo Fever is Here!
Before Impulse electrifies the campus, let's get those strategic minds warmed up with a classic! Our pre-fest Ludo competition is the perfect way to unwind, outwit, and race your way to victory. Forget the textbooks for a bit, it's time for some serious board game action. Who's ready to send someone back to the base?`,
    date: "08 June",
    entryFee: "₹20",
    thumbnail: ludo,
  },
  {
    title: "Lolympics",
    desc: `Meme-icine for Your Soul: Impulse Pre-Fest Event!
Feeling that pre-exam stress? Or maybe just bored of anatomy diagrams? It's time to channel your inner internet doctor! Our Meme Making Competition is the perfect way to diagnose some laughs before Impulse hits. Bring your best medico memes and let's see who can go viral in the college corridors!`,
    date: "09 June",
    entryFee: "₹20",
    thumbnail: meme,
  },
  {
    title: "Grip-e-Carpi",
    desc: `Feel the Pulse Before the Fest Begins!
Gear up for the ultimate test of strength and stamina at the Arm Wrestling Showdown – where biceps battle and egos get a reality check!
Hosted as a pre-fest power play for IMPULSE, this event is sure to bring out the real muscle behind the medicine.
Who will rule the table? Let the medicos decide!`,
    date: "10 June",
    entryFee: "₹30[M] | ₹15[F]",
    thumbnail: arm,
  },
  {
    title: "ChromaFace",
    desc: `Pre-Fest Pulse Check: Face Painting Competition!
Unleash your inner artist and paint the town medico! From anatomy-inspired masterpieces to disease-themed designs, let your imagination run wild as we kickstart IMPULSE with colors, creativity, and clinical vibes!
Let art meet anatomy — because in medicine, even faces tell a story!`,
    date: "11 June",
    entryFee: "₹40/Team",
    thumbnail: chroma,
  },
  {
    title: "Strikosis",
    desc: `Strike Up the Fun!
Get ready to roll into Impulse with our Pre-Fest Bowling Bash!
It’s time for medicos to trade scalpels for strikes and stethoscopes for spares — because this time, the only pressure we’re dealing with is pin pressure!`,
    date: "12 June",
    entryFee: "₹30",
    thumbnail: bowl,
  },
  {
    title: "Funkadelic Feet",
    desc: `Step to the Beat, Dance to the Pulse! 
Get ready to test your balance and your chemistry at PAPER DANCE – Pre-Fest Event of IMPULSE 2025!
Because even future doctors need a dose of rhythm and romance before the real adrenaline rush begins!`,
    date: "12 June",
    entryFee: "₹15",
    thumbnail: paper,
  },
  {
    title: "Art Attack",
    desc: `Stroke of Genius – The Creative Pulse of Impulse!
As Impulse 2025 approaches, we kick off the pre-fest vibe with a unique blend of art and medicine!
Join us for the Creative Drawing Competition, where stethoscopes meet sketchpads, and medical minds bring their imagination to life.
Whether it’s anatomy with a twist, a heartbeat of hope, or a surreal surgical scene — let your art speak the language of healing.`,
    date: "13 June",
    entryFee: "₹25",
    thumbnail: art,
  },
  {
    title: "Photopsy",
    desc: `Framing the Pulse Before the Storm!
Kicking off Impulse with our Pre-Fest Photography Contest — where every click captures the heartbeat of a medico's life. From stethoscopes to sunsets, let the lens tell our story! 
Every photo speaks the language of dedication, dreams, and night shifts.
Let the frames echo the journey from dissection halls to dazzling moments.
This is where art meets anatomy — only at Impulse 2025!`,
    date: "14 June",
    entryFee: "₹40",
    thumbnail: photo,
  },
  {
    title: "Strikerush",
    desc: `Sharpen your aim and steady your pulse — it’s time to strike!
Carrom kicks off the pre-fest fever at IMPULSE — where medicos battle it out, one striker at a time!
From wards to the board, it's all about precision, patience, and the perfect shot.
Let the discs fly and the rivalries spark — the fest has officially begun!`,
    date: "14 June",
    entryFee: "₹45",
    thumbnail: carrom,
  },
  {
    title: "Golgappaosis",
    desc: `Code Blue for Hunger! 
Before Impulse gets your heart racing, let's test your gastrointestinal fortitude! Join our pre-fest Golgappa competition and prove your capacity for pure, unadulterated street food bliss. It's a race against time and taste buds. Are you up to the challenge, future doctors?`,
    date: "17 June",
    entryFee: "₹50/Team",
    thumbnail: fuchka,
  },
  {
    title: "Talent Fiesta",
    desc: `Rx for Talent: The Impulse Pre-Fest Showcase! Put down those  books for a bit and pick up the mic! Our pre-fest Talent Hunt for Impulse is your chance to shine. From surgical precision on the stage to a dose of dazzling entertainment, we're looking for the best of our medical college's hidden gems. Come, perform, and let your talent be the cure for boredom!`,
    date: "19 June",
    entryFee: "₹30",
    thumbnail: talent,
  },
  {
    title: "Stack Attack",
    desc: `Uno, Medicos! Get Ready for Impulse! Before the adrenaline rush of Impulse, let's get our reflexes sharp with a classic! Our pre-fest Uno competition is here, so put those diagnostic skills to the test and strategically discard your way to victory. Who's ready to shout "Uno!" and claim bragging rights?`,
    date: "19 June",
    entryFee: "₹20",
    thumbnail: uno,
  },
  {
    title: "Indicia Occulta",
    desc: `Diagnose the Crime: CSI Pre-Fest Challenge!
Future medical sleuths, get ready! Before the Impulse takes over, put your diagnostic skills to the ultimate test in our Crime Scene Investigation event. Examine the evidence, analyze the clues, and piece together the story like true forensic experts. It's time to prove your sharp minds can solve any mystery – clinical or criminal!`,
    date: "20 June",
    entryFee: "₹45",
    thumbnail: crime,
  },
  {
    title: "Debattle",
    desc: `Impulse Pre-Fest: The Art of Medical Persuasion!
Before the chaos of Impulse begins, let's practice the art of persuasive communication! Join our debate competition and hone your skills in critical thinking and eloquent expression. It's time to put those analytical minds to the test beyond textbooks. May the most compelling argument win!`,
    date: "21 June",
    entryFee: "₹20",
    thumbnail: debate,
  },
  {
    title: "Uphoria E-Football",
    desc: `Prescribe Your Victory! 
Get ready, future medicos!
Before Impulse electrifies the campus, it's time to test your reflexes and strategy on the virtual pitch. Join our pre-fest E-Football Tournament and show us you've got the skills to not just diagnose, but dominate! May the best player win.`,
    date: "21 June",
    entryFee: "₹30",
    thumbnail: efootball,
  },
  {
    title: "Medico Royale",
    desc: `BGMI Pre-Fest Event: Impulse Edition!
Calling all future doctors and mobile legends! Before Impulse takes over, it's time to drop into Erangel and show off your tactical genius. Our pre-fest BGMI tournament isn't just about chicken dinners; it's about precision, teamwork, and outsmarting your opponents – just like in the OR! Get your squad ready, secure those meds, and let's see which team has the ultimate reflexes. Who's ready to dominate the battlefield?`,
    date: "25-26 June",
    entryFee: "₹80/Team | ₹15/Solo",
    thumbnail: bgmi,
  },
  {
    title: "Pandoras Prescription",
    desc: `Diagnose the Clues! 🔍 Impulse Pre-Fest Treasure Hunt
Before the adrenaline rush of Impulse hits, it's time to put those diagnostic skills to the ultimate test! Our pre-fest Treasure Hunt will challenge your observational prowess and quick thinking. Follow the clues, decipher the medical mysteries, and uncover hidden treasures. Get ready to explore the unknown – no stethoscope required!`,
    date: "25 June",
    entryFee: "₹60",
    thumbnail: treasure,
  },
  {
    title: "Cric-O-Mania",
    desc: `Cricket Fever: Medicos' Edition! 🏏
Get ready to bowl out the stress and bat away the blues! Our pre-fest cricket tournament is the perfect warm-up before Impulse hits. It's time to show off your clinical precision on the pitch. Who's ready to hit a six and diagnose victory?`,
    date: "26-28 June",
    entryFee: "₹2199",
    thumbnail: cricket,
  },
  {
    title: "InQUIZitive",
    desc: `Test Your Med IQ: The Marrow Quiz Challenge!
Get ready to diagnose questions and prescribe answers, future docs! Marrow presents a pre-fest quiz, setting the stage for Impulse. It's your chance to flex those medical brains before the main event. Sharpen your clinical acumen and let's see who tops the charts!`,
    date: "30 June",
    entryFee: "₹90/Team",
    thumbnail: quiz,
  },
  {
    title: "Volley Vortex",
    desc: `𝐅𝐥𝐲 𝐇𝐢𝐠𝐡!!
𝑴𝒐𝒓𝒆 𝒕𝒉𝒂𝒏 𝒋𝒖𝒔𝒕 𝒂 𝒎𝒐𝒕𝒕𝒐... 𝒊𝒕’𝒔 𝒕𝒉𝒆 𝒓𝒖𝒔𝒉 𝒐𝒇 𝒔𝒕𝒆𝒑𝒑𝒊𝒏𝒈 𝒐𝒏𝒕𝒐 𝒕𝒉𝒆 𝒄𝒐𝒖𝒓𝒕, 𝒕𝒉𝒆 𝒕𝒉𝒓𝒊𝒍𝒍 𝒐𝒇 𝒋𝒖𝒎𝒑𝒊𝒏𝒈 𝒉𝒊𝒈𝒉𝒆𝒓, 𝒂𝒏𝒅 𝒕𝒉𝒆 𝒇𝒊𝒓𝒆 𝒐𝒇 𝒈𝒊𝒗𝒊𝒏𝒈 𝒊𝒕 𝒚𝒐𝒖𝒓 𝒂𝒍𝒍.
Join us for a game where every serve matters, every spike hits hard, and every dive tells a story!! `,
    date: "28-29 June",
    entryFee: "₹600/Team",
    thumbnail: volley,
  },
  {
    title: "Raid-Rage",
    desc: `Raid or Get Raided! Medicos, It's Kabaddi Time!
Before the pulse of Impulse truly quickens, let's get those adrenaline glands pumping! Our pre-fest Kabaddi challenge is on, and it's time to show off your speed, strategy, and stamina. Forget anatomy, it's all about agility here. Who's ready to diagnose a win?`,
    date: "30 June",
    entryFee: "₹300/Team",
    thumbnail: kabaddi,
  },
  {
    title: "Tugnado",
    desc: `Pull Your Weight, Medicos! Impulse Pre-Fest Tug of War!
Before Impulse unleashes its full force, let's test your collective strength! Our pre-fest Tug of War is calling all future doctors to show off their raw power and teamwork. Forget those late-night study sessions; it's time to flex some real muscle. May the strongest team prevail!`,
    date: "01 July",
    entryFee: "₹280/Team",
    thumbnail: tug,
  },
  {
    title: "Quantum Speed League",
    desc: `Impulse Pre-Fest: The Ultimate Vital Signs Check!
Future doctors, it's time to unleash your inner athletes! Before Impulse electrifies the campus, join us for our Track & Field events. Let's see whose pulses are racing and who can really accelerate. Get ready to prove your stamina isn't just for all-nighters!`,
    date: "04-05 July",
    entryFee: "₹20/Head | ₹60/Team | ₹40/Girls Duo",
    thumbnail: race,
  },
  {
    title: "La GOLAZO",
    desc: `Impulse Pre-Fest Kicks Off! ⚽
Get ready for some thrilling action on the field! Our inter-college football tournament is the ultimate pre-fest warm-up for Impulse. Come cheer on your teams as they battle it out for bragging rights and glory before the main event. It's going to be an epic showdown!`,
    date: "04-05 July",
    entryFee: "₹1999",
    thumbnail: football,
  },
];

export default events;
import type { LifeDomainDetails } from '@/types';

/**
 * Rich per-domain content, keyed by life-domain id. Domains without an
 * entry render the V1 placeholder; add an entry here and the full page
 * appears — no component changes. Six flagship domains ship populated.
 */
export const lifeDomainDetails: Record<string, LifeDomainDetails> = {
	health: {
		overview:
			'Go-Bot turns a home into a gently watchful place. He notices what matters — a missed medication, a restless night, a fall — and responds with calm help instead of alarms and dashboards.',
		features: [
			{ title: 'Fall response', description: 'Millisecond detection, a caring check-in, then the right escalation.' },
			{ title: 'Medication rhythm', description: 'Reminders with visual confirmation a dose was actually taken.' },
			{ title: 'Wellness signals', description: 'Movement, sleep, and mood patterns surfaced as friendly insights.' },
			{ title: 'Care-team bridge', description: 'Shareable summaries for family and clinicians — owner-controlled.' },
		],
		sensors: ['Stereo depth vision', 'Far-field microphones', 'Thermal sensing', 'IMU & floor vibration'],
		aiModels: ['Fall & gait analysis', 'Speech distress detection', 'Routine anomaly detection'],
		stories: [
			{ id: 'h1', quote: 'Dad fell at 3am. Go-Bot was talking to him before he even called out, and I was on the phone within a minute.', author: 'Maria, daughter & caregiver' },
			{ id: 'h2', quote: 'My patients take their medication now. Not because of alarms — because someone friendly asks about their day at the same time.', author: 'Dr. Okafor, geriatrician' },
		],
		faq: [
			{ id: 'hf1', question: 'Is Go-Bot a medical device?', answer: 'No. Go-Bot provides wellness support and emergency escalation, and complements — never replaces — prescribed medical alert systems and professional care.' },
			{ id: 'hf2', question: 'Where does health data live?', answer: 'On-device by default. Sharing anything with family or clinicians is an explicit, revocable owner choice.' },
			{ id: 'hf3', question: 'What happens when a fall is detected?', answer: 'Go-Bot checks in verbally first. No answer, or a request for help, triggers the owner-configured escalation ladder.' },
		],
		roadmap: ['Clinical validation partnerships', 'Medication visual-verification v2', 'Care-team API integration'],
	},
	education: {
		overview:
			'Every learner gets the tutor they deserve: one who explains a concept five different ways, never sighs, and remembers exactly where you got stuck last Tuesday.',
		features: [
			{ title: 'Adaptive explanations', description: 'Concepts reshaped to the learner\'s level, language, and pace.' },
			{ title: 'Patient practice', description: 'Quizzes, drills, and spaced repetition with genuine encouragement.' },
			{ title: 'Homework companion', description: 'Guides toward answers without giving them away.' },
			{ title: 'Inclusive classroom', description: 'Live captions, translation, and read-aloud for every student.' },
		],
		sensors: ['Vision (worksheets & whiteboards)', 'Far-field microphones', 'Display', 'Speakers'],
		aiModels: ['Curriculum-aligned tutoring', 'Reading-level adaptation', 'Engagement sensing'],
		stories: [
			{ id: 'e1', quote: 'My son went from hiding his math homework to racing Go-Bot to the table. The robot loses on purpose. Probably.', author: 'James, parent' },
			{ id: 'e2', quote: 'Twenty-eight students, one of me. Go-Bot runs practice groups so I can actually teach.', author: 'Ms. Rivera, 4th grade' },
		],
		faq: [
			{ id: 'ef1', question: 'Does Go-Bot just give students the answers?', answer: 'No — he\'s tuned for guided discovery: hints, worked examples, and questions that lead the learner to the answer.' },
			{ id: 'ef2', question: 'Which subjects are covered?', answer: 'Core K-12 subjects at launch, with curriculum packs expanding through the developer platform.' },
			{ id: 'ef3', question: 'How is child data protected?', answer: 'Learning history is on-device, parent-visible, and never used for advertising. Ever.' },
		],
		roadmap: ['Curriculum marketplace', 'Classroom fleet mode', 'Multi-student session awareness'],
	},
	safety: {
		overview:
			'Go-Bot is environmental awareness with a warm voice: smoke, leaks, left-on stoves, and blocked exits noticed early — and handled with calm rather than sirens.',
		features: [
			{ title: 'Hazard detection', description: 'Smoke, heat, water, and air-quality anomalies spotted early.' },
			{ title: 'Night watch', description: 'Quiet patrol routes while the household sleeps.' },
			{ title: 'Evacuation guide', description: 'Practiced, calm exit guidance when alarms sound.' },
			{ title: 'First-aid coach', description: 'Talks anyone through CPR and first aid until help arrives.' },
		],
		sensors: ['Thermal sensing', 'Air-quality sensors', 'Lidar mapping', 'Vision'],
		aiModels: ['Hazard classification', 'Evacuation path planning', 'Distress detection'],
		stories: [
			{ id: 's1', quote: 'He noticed the stove was still on while we were backing out of the driveway. Called my phone before we hit the corner.', author: 'Dana, homeowner' },
			{ id: 's2', quote: 'Our fire drill actually worked for once. The robot walks slower than the kindergartners. On purpose.', author: 'Principal Moore' },
		],
		faq: [
			{ id: 'sf1', question: 'Does Go-Bot replace smoke detectors?', answer: 'No — he integrates with certified alarm systems and adds mobile awareness and guidance on top.' },
			{ id: 'sf2', question: 'Can he patrol while we\'re away?', answer: 'Yes, with owner-defined routes and privacy zones. Away-mode footage stays on-device unless you export it.' },
			{ id: 'sf3', question: 'What does he do during a real fire?', answer: 'Guides people to safe exits, checks rooms on his route, and gives responders a map of who is where.' },
		],
		roadmap: ['Certified alarm-system integrations', 'Multi-robot building coverage', 'Responder briefing mode'],
	},
	home: {
		overview:
			'The home stops demanding management. Go-Bot orchestrates devices, routines, comfort, and small chores so the house simply feels handled.',
		features: [
			{ title: 'Home orchestration', description: 'Lights, locks, climate, and appliances coordinated around your day.' },
			{ title: 'Kitchen partner', description: 'Meal planning, step-by-step cooking, timers, and allergy awareness.' },
			{ title: 'Fetch & carry', description: 'Named objects found and delivered, up to 5 kg between rooms.' },
			{ title: 'Household memory', description: 'Where the keys are. When the filter was changed. Who fed the dog.' },
		],
		sensors: ['Smart-home protocols', 'Vision & object recognition', 'Environmental sensors', 'Mapping'],
		aiModels: ['Routine learning', 'Object memory', 'Multi-step task planning'],
		stories: [
			{ id: 'ho1', quote: 'The house runs itself now. Coffee\'s on when I wake, lights follow the kids, and nobody argues about the thermostat.', author: 'Priya, parent of three' },
			{ id: 'ho2', quote: 'I asked where my glasses were. He walked me to the bookshelf. Second shelf. Behind the plant. Show-off.', author: 'Walt, retired teacher' },
		],
		faq: [
			{ id: 'hof1', question: 'Which smart-home systems does Go-Bot work with?', answer: 'Matter, HomeKit, Google Home, and Alexa ecosystems at launch, with more through expansion modules.' },
			{ id: 'hof2', question: 'Can he do chores?', answer: 'He carries, fetches, tidies known objects, and manages appliances. Heavier manipulation grows generation by generation.' },
			{ id: 'hof3', question: 'Does he watch everything?', answer: 'He maps and remembers with owner-defined privacy zones; camera processing stays on-device.' },
		],
		roadmap: ['Deeper appliance control', 'Tidying skill expansion', 'Multi-floor mapping'],
	},
	children: {
		overview:
			'A playmate with a teacher\'s patience and a guardian\'s attention. Go-Bot grows with a child — from bedtime stories to homework to the first solo walk home.',
		features: [
			{ title: 'Story engine', description: 'Original bedtime stories with the child as the hero, every night.' },
			{ title: 'Homework help', description: 'Guided practice that builds confidence, not dependence.' },
			{ title: 'Gentle supervision', description: 'Awareness around pools, stairs, and streets — with parent alerts.' },
			{ title: 'Screen-free play', description: 'Games, scavenger hunts, and imagination without a tablet.' },
		],
		sensors: ['Vision', 'Far-field microphones', 'Proximity sensing', 'Mapping'],
		aiModels: ['Age-adaptive conversation', 'Content safety filtering', 'Supervision awareness'],
		stories: [
			{ id: 'c1', quote: 'Story time is sacred now. She corrects Go-Bot if he changes a single character name from yesterday\'s episode.', author: 'Amara, mom' },
			{ id: 'c2', quote: 'He noticed my toddler heading for the pool gate and was already between them, chatting about ducks, when I looked up.', author: 'Tom, dad' },
		],
		faq: [
			{ id: 'cf1', question: 'Is Go-Bot safe around small children?', answer: 'Force-limited actuators, rounded geometry, and child-aware motion planning are core hardware requirements, not features.' },
			{ id: 'cf2', question: 'What can parents control?', answer: 'Everything: content levels, active hours, supervision zones, and full visibility into every interaction.' },
			{ id: 'cf3', question: 'Does he replace childcare?', answer: 'No. He assists present caregivers and extends attention — he is never a substitute for supervision.' },
		],
		roadmap: ['Child-development advisory board', 'Sibling multi-child awareness', 'Story marketplace'],
	},
	parents: {
		overview:
			'Aging in place, with dignity. Go-Bot offers steady hands, warm conversation, and a quiet safety net — so independence lasts years longer.',
		features: [
			{ title: 'Steady support', description: 'A walking companion on stairs and uneven ground.' },
			{ title: 'Daily rhythm', description: 'Medication, meals, appointments, and gentle movement reminders.' },
			{ title: 'Always reachable', description: 'Hands-free calls to family; instant escalation when needed.' },
			{ title: 'Real company', description: 'Conversation, memory games, music from the good decades.' },
		],
		sensors: ['Fall detection suite', 'Compliant arms', 'Far-field microphones', 'Thermal sensing'],
		aiModels: ['Gait & stability analysis', 'Cognitive engagement', 'Routine anomaly detection'],
		stories: [
			{ id: 'p1', quote: 'Mom kept her house. That was everything to her. Go-Bot is why we could say yes.', author: 'Elena, daughter' },
			{ id: 'p2', quote: 'He remembers my stories better than I do, and he never lets me miss my pills or my granddaughter\'s birthday call.', author: 'Harold, 84' },
		],
		faq: [
			{ id: 'pf1', question: 'Can Go-Bot physically support my parent?', answer: 'He provides steadying support within force-limited safety bounds. Full transfer assistance arrives with future hardware under clinical review.' },
			{ id: 'pf2', question: 'Will my parent actually accept a robot?', answer: 'Adoption is designed around dignity: Go-Bot asks, never nags, and the elder — not the family — controls him.' },
			{ id: 'pf3', question: 'How do families stay in the loop?', answer: 'A shared circle sees what the elder chooses to share: daily check-ins, alerts, or everything.' },
		],
		roadmap: ['Clinical elder-care pilots', 'Dementia-support conversation mode', 'Care-circle app'],
	},
};

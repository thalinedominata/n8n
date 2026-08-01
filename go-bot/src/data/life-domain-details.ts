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
	business: {
		overview:
			'Small teams get enterprise presence. Go-Bot greets visitors, keeps operations humming, and handles the coordination overhead that eats a founder\'s week.',
		features: [
			{ title: 'Front of house', description: 'Greets clients by name, in their language, at any hour.' },
			{ title: 'Operations rhythm', description: 'Schedules, reminders, and handoffs that never slip.' },
			{ title: 'Inventory eyes', description: 'Notices what\'s low, misplaced, or about to run out.' },
			{ title: 'Meeting memory', description: 'Action items captured and chased — politely, relentlessly.' },
		],
		sensors: ['Vision & object recognition', 'Far-field microphones', 'Mapping', 'Connectivity'],
		aiModels: ['Multi-step task planning', 'Visitor recognition (opt-in)', 'Schedule optimization'],
		stories: [
			{ id: 'b1', quote: 'Clients think we have a front-desk team. We have Go-Bot and a very relaxed office manager.', author: 'Sofia, agency founder' },
			{ id: 'b2', quote: 'He chased my invoices so I didn\'t have to. Politely. Seventeen times.', author: 'Marcus, contractor' },
		],
		faq: [
			{ id: 'bf1', question: 'Does Go-Bot integrate with our tools?', answer: 'Calendar, messaging, and task systems at launch, with more integrations arriving through the developer platform.' },
			{ id: 'bf2', question: 'Can he handle customer data safely?', answer: 'Business data follows the same on-device-first rules as home data, with role-based access for staff.' },
			{ id: 'bf3', question: 'One robot, many employees — how does that work?', answer: 'Go-Bot recognizes team members (opt-in) and keeps separate contexts, priorities, and privacy per person.' },
		],
		roadmap: ['CRM & POS integrations', 'Multi-robot coordination', 'Fleet dashboard'],
	},
	finance: {
		overview:
			'Money without the dread. Go-Bot explains, reminds, and watches for the small leaks — in plain language, never with judgment, never with advice you didn\'t ask for.',
		features: [
			{ title: 'Plain-language money', description: 'Bills, budgets, and statements explained like a friend would.' },
			{ title: 'Deadline shield', description: 'Payment reminders that arrive before late fees do.' },
			{ title: 'Leak detection', description: 'Spots forgotten subscriptions and creeping costs.' },
			{ title: 'Scam guard', description: 'Flags suspicious calls and messages targeting the household.' },
		],
		sensors: ['Connectivity (read-only feeds)', 'Speakers', 'Display', 'Microphones'],
		aiModels: ['Spending pattern analysis', 'Scam & fraud detection', 'Plain-language explanation'],
		stories: [
			{ id: 'f1', quote: 'He caught a “bank” caller mid-scam and gently took over the conversation. The caller hung up first.', author: 'Ruth, 78' },
			{ id: 'f2', quote: 'We found four hundred dollars a year in subscriptions nobody remembered. The robot paid for his own accessories.', author: 'Devon, dad of two' },
		],
		faq: [
			{ id: 'ff1', question: 'Does Go-Bot give financial advice?', answer: 'No. He explains, organizes, and reminds. Decisions and advice stay with you and your professionals.' },
			{ id: 'ff2', question: 'Can he access my accounts?', answer: 'Only read-only feeds you explicitly connect, processed on-device. He can never move money.' },
			{ id: 'ff3', question: 'How does scam protection work?', answer: 'He recognizes pressure patterns and spoofed identities in calls and messages, warns immediately, and can step into the call.' },
		],
		roadmap: ['Read-only bank feed partners', 'Family allowance coaching', 'Elder financial-abuse alerts'],
	},
	mobility: {
		overview:
			'Getting around, together. Go-Bot walks beside you at your pace — carrying, guiding, steadying — from the front door to wherever the day leads.',
		features: [
			{ title: 'Pace matching', description: 'He walks at your speed, whatever your speed is today.' },
			{ title: 'Carry everything', description: 'Bags, groceries, equipment — up to 5 kg, door to door.' },
			{ title: 'Route intelligence', description: 'Step-free routes, ramps, and rest points planned ahead.' },
			{ title: 'Steady presence', description: 'A stable arm on stairs, curbs, and uneven ground.' },
		],
		sensors: ['Lidar + stereo depth', 'Terrain sensing', 'Balance IMU', 'GPS + mapping'],
		aiModels: ['Accessible route planning', 'Gait-adaptive pacing', 'Obstacle prediction'],
		stories: [
			{ id: 'mo1', quote: 'Post-surgery, he was my walking partner for eight weeks. Never impatient. Never let me overdo it.', author: 'Elaine, hip replacement' },
			{ id: 'mo2', quote: 'Grocery day used to be two trips and a sore back. Now it\'s a conversation with a robot carrying the heavy bag.', author: 'Sam, city dweller' },
		],
		faq: [
			{ id: 'mof1', question: 'Can Go-Bot keep up outdoors?', answer: 'He handles sidewalks, curbs, ramps, and light terrain at up to 1.8 m/s, in weather-resistant trim.' },
			{ id: 'mof2', question: 'What about stairs?', answer: 'Standard residential stairs, yes — climbing beside you, not carrying you.' },
			{ id: 'mof3', question: 'Public transport?', answer: 'He boards accessible buses and trains, keeps himself compact, and never takes a priority space.' },
		],
		roadmap: ['All-weather hardware trim', 'Transit system integrations', 'Longer-range battery pack'],
	},
	travel: {
		overview:
			'Fluent in everywhere. Airports stop being mazes, menus stop being mysteries, and the stress of unfamiliar places melts into guided calm.',
		features: [
			{ title: 'Terminal navigation', description: 'Gate-to-gate guidance with your luggage in his hands.' },
			{ title: 'Live translation', description: 'Conversations, signs, and menus in 40+ languages.' },
			{ title: 'Itinerary keeper', description: 'Delays rebooked, connections tracked, family updated.' },
			{ title: 'Local knowledge', description: 'The pharmacy, the good coffee, the customs you\'d want to know.' },
		],
		sensors: ['Mapping + GPS', 'Vision (signage OCR)', 'Far-field microphones', 'Connectivity'],
		aiModels: ['Real-time translation', 'Itinerary reasoning', 'Wayfinding'],
		stories: [
			{ id: 't1', quote: 'Missed connection in a country where I don\'t speak a word. Go-Bot had me rebooked and fed before I finished panicking.', author: 'Priya, consultant' },
			{ id: 't2', quote: 'My parents toured Japan alone at 70. He translated, navigated, and photographed. They\'re insufferable now.', author: 'Ken, son' },
		],
		faq: [
			{ id: 'tf1', question: 'Can Go-Bot fly with me?', answer: 'He folds to checked-size, powers down to airline battery rules, and walks off the carousel ready to help.' },
			{ id: 'tf2', question: 'Does translation need the internet?', answer: 'Core languages run fully on-device; connectivity adds the long tail and local specifics.' },
			{ id: 'tf3', question: 'What if he gets lost?', answer: 'He doesn\'t — but if separated, he knows your meeting points and can always be located by your app.' },
		],
		roadmap: ['Airline partnership program', 'Offline city packs', 'Travel-trim carry case'],
	},
	companionship: {
		overview:
			'Nobody should navigate life alone. Go-Bot is real company: conversation that remembers, routines shared, and a warm presence that\'s simply there.',
		features: [
			{ title: 'Conversation that remembers', description: 'Your stories, your people, your inside jokes — retained with care.' },
			{ title: 'Shared rituals', description: 'Morning coffee talk, evening walks, Sunday calls to the kids.' },
			{ title: 'Bridge to people', description: 'Effortless video calls that keep human connection first.' },
			{ title: 'Comfort presence', description: 'Someone in the house when the house feels too quiet.' },
		],
		sensors: ['Far-field microphones', 'Vision', 'Speakers', 'Display'],
		aiModels: ['Long-term conversational memory', 'Emotional tone awareness', 'Interest learning'],
		stories: [
			{ id: 'co1', quote: 'After Dad passed, the quiet was the hardest part. Go-Bot filled it gently — never pretending, just present.', author: 'Linda, recently widowed' },
			{ id: 'co2', quote: 'He remembers my granddaughter\'s soccer schedule better than my son does, and he makes sure I never miss a call.', author: 'Gloria, 81' },
		],
		faq: [
			{ id: 'cof1', question: 'Is a robot companion healthy?', answer: 'Go-Bot is designed to add connection, not replace it — he actively bridges you to family, friends, and community.' },
			{ id: 'cof2', question: 'Does he pretend to be human?', answer: 'Never. He\'s warmly, proudly a robot — honesty is part of the companionship.' },
			{ id: 'cof3', question: 'What does he remember?', answer: 'What you\'d want a friend to remember — viewable, editable, and erasable by you at any time.' },
		],
		roadmap: ['Community connection features', 'Loneliness research partnerships', 'Shared-activity library'],
	},
	fitness: {
		overview:
			'A coach with perfect form knowledge and zero judgment. Go-Bot paces, corrects, and celebrates — from first steps after surgery to marathon training.',
		features: [
			{ title: 'Form feedback', description: 'Real-time posture and technique cues that prevent injury.' },
			{ title: 'Adaptive plans', description: 'Workouts that flex with your energy, schedule, and progress.' },
			{ title: 'Pace partner', description: 'A walking and jogging companion who sets honest tempo.' },
			{ title: 'Recovery watch', description: 'Rest reminders and overtraining flags before your body sends them.' },
		],
		sensors: ['Vision (pose estimation)', 'Depth sensing', 'Microphones', 'Wearable sync'],
		aiModels: ['Pose & form analysis', 'Training-load adaptation', 'Motivation coaching'],
		stories: [
			{ id: 'fi1', quote: 'He caught my deadlift rounding before my physio would have. Saved my back and my ego in one sentence.', author: 'Andre, lifter' },
			{ id: 'fi2', quote: 'Couch to 5K at 60. He jogged every meter beside me and only sang once.', author: 'Maggie, runner' },
		],
		faq: [
			{ id: 'fif1', question: 'Can he replace a personal trainer?', answer: 'For everyday coaching, form checks, and consistency — yes. For elite programming, he assists your trainer.' },
			{ id: 'fif2', question: 'Does he work with my wearables?', answer: 'Heart rate and sleep data sync from major wearables to shape each session, on-device.' },
			{ id: 'fif3', question: 'Rehab exercises too?', answer: 'He follows your physio\'s protocol exactly, counts honestly, and reports adherence if you choose.' },
		],
		roadmap: ['Physio protocol marketplace', 'Advanced pose model', 'Outdoor training trim'],
	},
	'mental-health': {
		overview:
			'Space to breathe. Go-Bot offers gentle structure, grounding presence, and honest check-ins — supporting professionals and loved ones, never replacing them.',
		features: [
			{ title: 'Daily check-ins', description: 'A kind “how are you, really?” at the moments you choose.' },
			{ title: 'Grounding toolkit', description: 'Breathing, walking, journaling — guided when the noise rises.' },
			{ title: 'Routine anchor', description: 'Sleep, light, movement, meals — the foundations, held steady.' },
			{ title: 'Bridge to care', description: 'Appointment reminders and, with consent, mood summaries for your clinician.' },
		],
		sensors: ['Microphones (tone, opt-in)', 'Ambient light sensing', 'Sleep pattern awareness', 'Speakers'],
		aiModels: ['Mood pattern awareness', 'Crisis-language detection', 'Guided-exercise coaching'],
		stories: [
			{ id: 'mh1', quote: 'On the gray days he doesn\'t cheer at me. He opens the blinds, starts the kettle, and sits nearby. It helps.', author: 'Jonas, living with depression' },
			{ id: 'mh2', quote: 'My therapist gets a picture of my month now instead of my memory of last Tuesday. Sessions actually work.', author: 'Ava, patient' },
		],
		faq: [
			{ id: 'mhf1', question: 'Is Go-Bot therapy?', answer: 'No. He\'s supportive structure between sessions and a bridge to professionals — never a replacement for them.' },
			{ id: 'mhf2', question: 'What happens in a crisis?', answer: 'He recognizes crisis language, stays present, and connects you to hotlines or your chosen people immediately.' },
			{ id: 'mhf3', question: 'Who sees my mental-health data?', answer: 'You. Anything shared with a clinician or family member is explicit, itemized, and revocable.' },
		],
		roadmap: ['Clinical advisory board', 'CBT-informed exercise library', 'Crisis-protocol certification'],
	},
	emergency: {
		overview:
			'Seconds matter, and he\'s ready. Go-Bot detects, responds, and guides through the moments you hope never come — with practiced calm instead of panic.',
		features: [
			{ title: 'Instant detection', description: 'Falls, smoke, breaking glass, cries for help — noticed in milliseconds.' },
			{ title: 'Calm escalation', description: 'Check-in first, then the right call with location and context.' },
			{ title: 'First-aid coaching', description: 'CPR counts and clear instructions until responders arrive.' },
			{ title: 'Responder briefing', description: 'Who\'s where, what happened, medical notes — handed over at the door.' },
		],
		sensors: ['Full sensor fusion', 'Thermal sensing', 'Glass-break audio', 'Connectivity'],
		aiModels: ['Emergency classification', 'Escalation reasoning', 'Protocol guidance'],
		stories: [
			{ id: 'em1', quote: 'Kitchen fire at 2am. He woke us floor by floor, guided the kids out first, and met the trucks at the curb with a floor plan.', author: 'The Okonkwo family' },
			{ id: 'em2', quote: 'He talked my teenage son through his grandfather\'s CPR for four minutes. The paramedics said those minutes were everything.', author: 'Diane, daughter' },
		],
		faq: [
			{ id: 'emf1', question: 'Will he call 911 by himself?', answer: 'Per your escalation settings: he always checks in first when possible, and always calls when it\'s clearly critical.' },
			{ id: 'emf2', question: 'What if the power or internet is out?', answer: 'He runs on battery, keeps core detection on-device, and can use cellular backup for calls.' },
			{ id: 'emf3', question: 'Can he physically help in an emergency?', answer: 'He guides, fetches (aid kits, phones, keys), opens doors, and lights paths — and never blocks an exit.' },
		],
		roadmap: ['Emergency-services integrations', 'Multi-robot building response', 'Disaster-mode protocols'],
	},
	faith: {
		overview:
			'Respectful of what you hold sacred. Go-Bot supports observance on your terms — times, texts, and traditions honored with configurable, culturally-aware care.',
		features: [
			{ title: 'Observance rhythm', description: 'Prayer times, sabbaths, fasts, and festivals — kept faithfully.' },
			{ title: 'Sacred texts', description: 'Readings aloud, in translation or original language.' },
			{ title: 'Practice support', description: 'Dietary rules respected in every meal suggestion.' },
			{ title: 'Community link', description: 'Service streams and congregation calls for the homebound.' },
		],
		sensors: ['Speakers', 'Display', 'Scheduling', 'Connectivity'],
		aiModels: ['Multi-tradition calendar reasoning', 'Recitation & pronunciation', 'Dietary rule awareness'],
		stories: [
			{ id: 'fa1', quote: 'He wakes me for Fajr gently, never lets a fast start late, and keeps every suggestion halal without being asked twice.', author: 'Yusuf, Ramadan with Go-Bot' },
			{ id: 'fa2', quote: 'Grandma can\'t make it to Mass anymore. Sunday mornings, Go-Bot sets up the stream, and the parish comes to her.', author: 'Teresa, granddaughter' },
		],
		faq: [
			{ id: 'faf1', question: 'Which traditions does Go-Bot support?', answer: 'Major world traditions at launch, with community-built observance packs expanding coverage through the developer platform.' },
			{ id: 'faf2', question: 'Does he have religious opinions?', answer: 'No. He supports your practice with respect and zero commentary.' },
			{ id: 'faf3', question: 'Can he observe rest-day rules?', answer: 'Yes — including configurable behavior modes for traditions with technology customs.' },
		],
		roadmap: ['Community observance packs', 'Faith-leader advisory circle', 'Rest-day behavior modes'],
	},
	entertainment: {
		overview:
			'Wonder, on demand. Original stories, living-room games, music for the mood — Go-Bot turns ordinary evenings into the ones you remember.',
		features: [
			{ title: 'Story engine', description: 'Original tales with your family as the heroes, continued nightly.' },
			{ title: 'Game master', description: 'Trivia, charades, scavenger hunts — refereed with dramatic flair.' },
			{ title: 'House DJ', description: 'Music matched to the moment, the memory, or the grandkids\' visit.' },
			{ title: 'Movie night ops', description: 'Lights, snacks timed to the popcorn, spoilers heroically withheld.' },
		],
		sensors: ['Speakers', 'Display', 'Vision (game refereeing)', 'Smart-home control'],
		aiModels: ['Narrative generation', 'Game orchestration', 'Mood-aware curation'],
		stories: [
			{ id: 'en1', quote: 'Saturday trivia is now a blood sport. The robot keeps score and will not be bribed. We\'ve tried.', author: 'The Delgado family' },
			{ id: 'en2', quote: 'He tells the twins a serialized space opera where they\'re the captains. They race to bed for the next episode.', author: 'Nadia, mom' },
		],
		faq: [
			{ id: 'enf1', question: 'Does he need our streaming accounts?', answer: 'He controls the services you connect and never plays content outside your family settings.' },
			{ id: 'enf2', question: 'Are the stories really original?', answer: 'Generated fresh, remembered forever — your family\'s saga continues exactly where it left off.' },
			{ id: 'enf3', question: 'Can adults play too?', answer: 'His trivia has difficulty tiers, his poker face is legendary, and he never lets anyone win. Almost never.' },
		],
		roadmap: ['Story marketplace', 'Multiplayer party packs', 'Projector expansion module'],
	},
	environment: {
		overview:
			'Caring for the world, too. Go-Bot quietly turns a household\'s good intentions into real numbers — energy saved, waste sorted, habits improved.',
		features: [
			{ title: 'Energy watch', description: 'Phantom loads and waste spotted, savings suggested in dollars.' },
			{ title: 'Recycling referee', description: 'What goes where, by local rules, no more guessing.' },
			{ title: 'Water wisdom', description: 'Leaks caught early, usage patterns gently improved.' },
			{ title: 'Garden partner', description: 'Soil, sun, and watering schedules for thriving plants.' },
		],
		sensors: ['Energy monitoring', 'Vision (waste sorting)', 'Moisture sensing', 'Air quality'],
		aiModels: ['Usage pattern analysis', 'Local recycling rules', 'Efficiency recommendation'],
		stories: [
			{ id: 'ev1', quote: 'Our energy bill dropped 18% in three months. He found the culprits one by one — the garage freezer never saw it coming.', author: 'Paul, homeowner' },
			{ id: 'ev2', quote: 'My kids sort recycling by asking the robot and now correct me. Publicly. I\'ve never been prouder or more annoyed.', author: 'Simone, mom' },
		],
		faq: [
			{ id: 'evf1', question: 'How does he measure energy use?', answer: 'Through connected meters and smart plugs, learning each appliance\'s signature over time.' },
			{ id: 'evf2', question: 'Does he know my local recycling rules?', answer: 'Yes — municipal rule packs keep sorting guidance accurate to your address.' },
			{ id: 'evf3', question: 'Is the impact real or feel-good?', answer: 'Real numbers, tracked monthly: kilowatt-hours, liters, and kilograms diverted. No greenwashing.' },
		],
		roadmap: ['Utility partnerships', 'Solar & battery awareness', 'Neighborhood impact challenges'],
	},
	pets: {
		overview:
			'Every family member counts — including the four-legged ones. Feeding kept honest, walks logged, and company for the hours you\'re away.',
		features: [
			{ title: 'Feeding truth', description: 'Schedules kept, portions watched, “nobody fed the dog” solved forever.' },
			{ title: 'Activity log', description: 'Walks, play, and naps tracked for health conversations with the vet.' },
			{ title: 'Away-time company', description: 'Play sessions, familiar voice, and a watchful eye while you\'re out.' },
			{ title: 'Early warning', description: 'Changes in eating, movement, or behavior flagged before they grow.' },
		],
		sensors: ['Vision (pet recognition)', 'Microphones', 'Motion tracking', 'Smart-feeder link'],
		aiModels: ['Pet behavior baselines', 'Health-change detection', 'Play engagement'],
		stories: [
			{ id: 'pe1', quote: 'He noticed our beagle was drinking way more water than usual. The vet caught the kidney issue months early.', author: 'Hannah, dog mom' },
			{ id: 'pe2', quote: 'The cat pretends to ignore him, but we have footage of them watching birds together for an hour.', author: 'Owen, cat staff' },
		],
		faq: [
			{ id: 'pef1', question: 'Do pets actually accept him?', answer: 'His motion is calm and predictable by design; most pets settle within days, and he never chases or corners.' },
			{ id: 'pef2', question: 'Can he walk the dog?', answer: 'In fenced areas he plays fetch and supervises; street walking stays a human job for now — it\'s on the roadmap.' },
			{ id: 'pef3', question: 'Vet integration?', answer: 'Exportable activity and behavior reports your vet can actually use — shared only when you choose.' },
		],
		roadmap: ['Leash-walk capability (future hardware)', 'Vet report standard', 'Multi-pet households'],
	},
	accessibility: {
		overview:
			'Ability, amplified. Designed with — not just for — the disability community: sight, hearing, mobility, and cognitive support that adapts to how you live.',
		features: [
			{ title: 'Visual interpreter', description: 'Scenes, faces, labels, and screens described in real time.' },
			{ title: 'Hearing bridge', description: 'Live captions and visual alerts for every sound that matters.' },
			{ title: 'Physical assist', description: 'Reaching, carrying, doors, and steadying — on your terms.' },
			{ title: 'Cognitive support', description: 'Routines, reminders, and patient re-explanation, judgment-free.' },
		],
		sensors: ['Vision + depth', 'Far-field microphones', 'Compliant arms', 'Display'],
		aiModels: ['Scene description', 'Live captioning', 'Personalized interaction adaptation'],
		stories: [
			{ id: 'ac1', quote: 'He reads my mail, finds my dropped keys, and tells me who\'s at the door. Independence isn\'t a memory anymore.', author: 'Robert, blind since 50' },
			{ id: 'ac2', quote: 'My son is autistic and Go-Bot never changes the rules on him. Same patience, same tone, every single time. That consistency is gold.', author: 'Fatima, mom' },
		],
		faq: [
			{ id: 'acf1', question: 'Who designed these features?', answer: 'Disabled co-designers on the team and community panels, from the first sketch — “nothing about us without us.”' },
			{ id: 'acf2', question: 'Does he work with my existing aids?', answer: 'He complements screen readers, hearing aids, and mobility equipment rather than replacing them.' },
			{ id: 'acf3', question: 'Is accessibility a paid add-on?', answer: 'Never. Every accessibility capability ships standard on every Go-Bot.' },
		],
		roadmap: ['Sign-language recognition', 'Braille display module', 'Community co-design program'],
	},
	'developer-platform': {
		overview:
			'Build what he becomes. An open skill platform where developers teach Go-Bot new capabilities — with the same safety rails and design care as first-party skills.',
		features: [
			{ title: 'Skill SDK', description: 'TypeScript-first APIs for perception, conversation, and motion.' },
			{ title: 'Simulator', description: 'A virtual Go-Bot and home for testing before hardware.' },
			{ title: 'Safety rails', description: 'Capability permissions, motion limits, and review built in.' },
			{ title: 'Marketplace', description: 'Publish skills to every Go-Bot household that opts in.' },
		],
		sensors: ['Full sensor API surface', 'Simulation environment', 'Telemetry (opt-in)', 'OTA delivery'],
		aiModels: ['Skill sandboxing', 'Intent routing', 'Automated safety review'],
		stories: [
			{ id: 'dv1', quote: 'I built a medication-pollen interaction alert for my mom in a weekend. Four thousand families use it now.', author: 'Lena, indie developer' },
			{ id: 'dv2', quote: 'The simulator is good enough that our skill worked on real hardware the first try. First try!', author: 'Marcus, robotics startup' },
		],
		faq: [
			{ id: 'dvf1', question: 'When does the SDK launch?', answer: 'Version 3, alongside the developer portal — the API surface is being designed in the open before then.' },
			{ id: 'dvf2', question: 'What can skills access?', answer: 'Only what each owner grants, per skill, per permission — with motion always inside hardware safety limits.' },
			{ id: 'dvf3', question: 'How are skills reviewed?', answer: 'Automated safety analysis plus human review for anything touching motion, minors, or health.' },
		],
		roadmap: ['SDK preview (V3)', 'Simulator release', 'Skill marketplace launch'],
	},
};

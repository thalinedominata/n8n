'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { Button, Container, Modal } from '@/components/ui';
import { GoBotFigure } from '@/components/gobot';
import { heroReveal, staggerChildren } from '@/animations/variants';

function scrollToSection(id: string) {
	document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/** Above-the-fold hero: mission statement beside a living, watching Go-Bot. */
export function Hero() {
	const [demoOpen, setDemoOpen] = useState(false);

	return (
		<section
			id="hero"
			className="relative isolate flex min-h-[70svh] items-center overflow-hidden pb-10 pt-28"
		>
			{/* Ambient stage: faint dot grid + drifting orange/graphite glows, all under the content */}
			<div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
				<div className="animate-drift absolute right-[-10%] top-[10%] h-[36rem] w-[36rem] rounded-full bg-gobot-100/60 blur-3xl" />
				<div className="animate-drift-slow absolute bottom-[-12%] left-[-12%] h-[28rem] w-[28rem] rounded-full bg-gobot-200/40 blur-3xl" />
				<div className="animate-drift-slow absolute left-[32%] top-[-14%] h-[20rem] w-[20rem] rounded-full bg-ink/5 blur-3xl" />
			</div>

			<Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
				<motion.div variants={staggerChildren} initial="hidden" animate="visible">
					<motion.h1
						variants={heroReveal}
						className="text-display font-bold text-balance sm:text-display-xl"
					>
						Meet <span className="text-shimmer">Go-Bot</span>
					</motion.h1>
					<motion.p
						variants={heroReveal}
						className="mt-6 max-w-xl text-body-lg text-ink-secondary text-pretty"
					>
						Your intelligent companion for every stage of life. He sees, listens, learns, and
						cares. And he&apos;s watching you read this right now.
					</motion.p>
					<motion.div variants={heroReveal} className="mt-10 flex flex-wrap items-center gap-4">
						<Button size="lg" onClick={() => scrollToSection('life-domains')}>
							Explore Go-Bot
							<ArrowRight className="h-4 w-4" />
						</Button>
						<Button size="lg" variant="outline" onClick={() => setDemoOpen(true)}>
							<Play className="h-4 w-4" />
							Watch Demo
						</Button>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.94 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
					className="flex justify-center"
				>
					{/* The real Go-Bot, waving — muted ambient loop */}
					<GoBotFigure media="film" priority className="w-full max-w-lg" />
				</motion.div>
			</Container>

			{/* Demo film — opened by a click, so autoplay with sound is allowed */}
			<Modal
				open={demoOpen}
				onClose={() => setDemoOpen(false)}
				title="Go-Bot says hello"
				className="max-w-3xl"
			>
				{demoOpen ? (
					<video
						src="/assets/video/go-bot-wave.mp4"
						poster="/assets/video/go-bot-wave-poster.png"
						autoPlay
						loop
						controls
						playsInline
						className="aspect-video w-full rounded-xl bg-surface-sunken object-cover"
					/>
				) : null}
			</Modal>
		</section>
	);
}

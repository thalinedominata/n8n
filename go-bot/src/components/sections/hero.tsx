'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Badge, Button, Container } from '@/components/ui';
import { GoBot } from '@/components/gobot';
import { heroReveal, staggerChildren } from '@/animations/variants';
import { siteConfig } from '@/config/site';

/** Above-the-fold hero: mission statement beside a living, watching Go-Bot. */
export function Hero() {
	return (
		<section id="hero" className="relative overflow-hidden pb-24 pt-36 sm:pt-44">
			{/* Warm radial glow behind Go-Bot */}
			<div
				aria-hidden
				className="pointer-events-none absolute right-[-10%] top-[10%] h-[36rem] w-[36rem] rounded-full bg-gobot-100/60 blur-3xl"
			/>

			<Container className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
				<motion.div variants={staggerChildren} initial="hidden" animate="visible">
					<motion.div variants={heroReveal}>
						<Badge>Introducing Go-Bot · Version 1</Badge>
					</motion.div>
					<motion.h1
						variants={heroReveal}
						className="mt-6 text-display font-semibold text-balance sm:text-display-xl"
					>
						A companion for
						<span className="text-gobot-500"> every part </span>
						of life.
					</motion.h1>
					<motion.p
						variants={heroReveal}
						className="mt-6 max-w-xl text-body-lg text-ink-secondary text-pretty"
					>
						{siteConfig.description} He sees, listens, learns, and cares — and he&apos;s
						watching you read this right now.
					</motion.p>
					<motion.div variants={heroReveal} className="mt-10 flex flex-wrap items-center gap-4">
						<Button size="lg">
							Reserve Go-Bot
							<ArrowRight className="h-4 w-4" />
						</Button>
						<Button size="lg" variant="ghost">
							Explore the platform
						</Button>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.94 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
					className="flex justify-center"
				>
					<GoBot size={340} />
				</motion.div>
			</Container>
		</section>
	);
}

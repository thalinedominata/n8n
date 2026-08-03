'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu, Search, X } from 'lucide-react';
import { Button, Container, Logo, OPEN_COMMAND_PALETTE_EVENT } from '@/components/ui';
import { mainNavigation } from '@/data/navigation';
import { siteConfig } from '@/config/site';
import { duration, ease, stagger } from '@/animations/tokens';
import { cn } from '@/lib/utils';

/** The mobile menu unfolds downward, each row tipping in like a card. */
const menuVariants = {
	closed: {
		opacity: 0,
		height: 0,
		transition: {
			when: 'afterChildren' as const,
			staggerChildren: 0.03,
			staggerDirection: -1,
			duration: duration.fast,
			ease: ease.outSoft,
		},
	},
	open: {
		opacity: 1,
		height: 'auto',
		transition: {
			when: 'beforeChildren' as const,
			staggerChildren: stagger.tight,
			duration: duration.base,
			ease: ease.outExpo,
		},
	},
};

const menuItemVariants = {
	closed: { opacity: 0, y: -14, rotateX: -55 },
	open: {
		opacity: 1,
		y: 0,
		rotateX: 0,
		transition: { duration: duration.base, ease: ease.outExpo },
	},
};

/**
 * Fixed top navigation. Transparent over the hero, then gains a frosted
 * surface once the page scrolls.
 */
export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [menuGlow, setMenuGlow] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setScrolled(latest > 24);
	});

	return (
		<header
			className={cn(
				'fixed inset-x-0 top-0 z-50 border-b-2 border-gobot-500 bg-ink text-ink-inverse transition-shadow duration-(--duration-base) ease-(--ease-out-soft)',
				scrolled && 'shadow-e2',
			)}
		>
			<Container className="flex h-16 items-center justify-between">
				<Link href="/#hero" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
					<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gobot-500 text-white">
						<Logo size={16} color="#ffffff" />
					</span>
					<span className="whitespace-nowrap text-title font-semibold tracking-tight">
						{siteConfig.name}
					</span>
				</Link>

				<nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
					{mainNavigation.map((item) => (
						<Link
							key={item.href}
							href={item.href.startsWith('#') ? `/${item.href}` : item.href}
							className="whitespace-nowrap rounded-pill px-3.5 py-2 text-caption font-medium text-ink-inverse/75 transition-colors duration-(--duration-fast) hover:bg-ink-inverse/10 hover:text-ink-inverse"
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="hidden items-center gap-2 lg:flex">
					<button
						type="button"
						onClick={() => window.dispatchEvent(new Event(OPEN_COMMAND_PALETTE_EVENT))}
						aria-label="Search (Command+K)"
						className="flex items-center gap-2 rounded-pill border border-ink-inverse/25 px-3 py-2 text-caption text-ink-inverse/60 transition-colors duration-(--duration-fast) hover:border-ink-inverse/50 hover:text-ink-inverse"
					>
						<Search className="h-3.5 w-3.5" aria-hidden />
						<kbd className="text-overline">⌘K</kbd>
					</button>
					<Button size="sm">Reserve Go-Bot</Button>
				</div>

				<button
					type="button"
					className={cn('rounded-md p-2 lg:hidden', menuGlow && 'animate-click-glow')}
					aria-expanded={mobileOpen}
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					onClick={() => {
						setMobileOpen((open) => !open);
						setMenuGlow(true);
					}}
					onAnimationEnd={() => setMenuGlow(false)}
				>
					{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</Container>

			<AnimatePresence>
				{mobileOpen ? (
					<motion.nav
						key="mobile-menu"
						variants={menuVariants}
						initial="closed"
						animate="open"
						exit="closed"
						className="overflow-hidden border-b border-ink-secondary/40 bg-ink lg:hidden"
						style={{ transformPerspective: 900 }}
						aria-label="Mobile"
					>
						<ul className="flex flex-col gap-1 px-6 pt-2">
							{mainNavigation.map((item) => (
								<motion.li
									key={item.href}
									variants={menuItemVariants}
									style={{ transformPerspective: 900, transformOrigin: 'top center' }}
								>
									<Link
										href={item.href.startsWith('#') ? `/${item.href}` : item.href}
										onClick={() => setMobileOpen(false)}
										className="block rounded-md px-3 py-2.5 text-body font-medium text-ink-inverse/80 hover:bg-ink-inverse/10 hover:text-ink-inverse"
									>
										{item.label}
									</Link>
								</motion.li>
							))}
						</ul>
						<motion.div
							variants={menuItemVariants}
							style={{ transformPerspective: 900, transformOrigin: 'top center' }}
							className="px-6 pb-6 pt-4"
						>
							<Button className="w-full">Reserve Go-Bot</Button>
						</motion.div>
					</motion.nav>
				) : null}
			</AnimatePresence>
		</header>
	);
}

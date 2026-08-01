'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button, Container } from '@/components/ui';
import { mainNavigation } from '@/data/navigation';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

/**
 * Fixed top navigation. Transparent over the hero, then gains a frosted
 * surface once the page scrolls.
 */
export function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setScrolled(latest > 24);
	});

	return (
		<header
			className={cn(
				'fixed inset-x-0 top-0 z-50 transition-all duration-(--duration-base) ease-(--ease-out-soft)',
				scrolled
					? 'border-b border-border-subtle bg-surface/85 shadow-e1 backdrop-blur-xl'
					: 'bg-transparent',
			)}
		>
			<Container className="flex h-16 items-center justify-between">
				<Link href="#hero" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
					<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gobot-500">
						<span className="flex gap-1">
							<span className="h-2.5 w-1 rounded-full bg-white" />
							<span className="h-2.5 w-1 rounded-full bg-white" />
						</span>
					</span>
					<span className="text-title font-semibold tracking-tight">{siteConfig.name}</span>
				</Link>

				<nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
					{mainNavigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="rounded-pill px-3.5 py-2 text-caption font-medium text-ink-secondary transition-colors duration-(--duration-fast) hover:bg-surface-sunken hover:text-ink"
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="hidden lg:block">
					<Button size="sm">Reserve Go-Bot</Button>
				</div>

				<button
					type="button"
					className="rounded-md p-2 lg:hidden"
					aria-expanded={mobileOpen}
					aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
					onClick={() => setMobileOpen((open) => !open)}
				>
					{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
				</button>
			</Container>

			{mobileOpen ? (
				<motion.nav
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					className="border-b border-border-subtle bg-surface px-6 pb-6 pt-2 lg:hidden"
					aria-label="Mobile"
				>
					<ul className="flex flex-col gap-1">
						{mainNavigation.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									onClick={() => setMobileOpen(false)}
									className="block rounded-md px-3 py-2.5 text-body font-medium text-ink-secondary hover:bg-surface-sunken hover:text-ink"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
					<Button className="mt-4 w-full">Reserve Go-Bot</Button>
				</motion.nav>
			) : null}
		</header>
	);
}

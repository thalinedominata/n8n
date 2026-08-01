import Link from 'next/link';
import { Container } from '@/components/ui';
import { footerNavigation } from '@/data/navigation';
import { siteConfig } from '@/config/site';

export function Footer() {
	return (
		<footer className="border-t border-border-subtle bg-surface-warm">
			<Container className="grid gap-12 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)]">
				<div className="max-w-xs">
					<p className="text-title font-semibold">{siteConfig.name}</p>
					<p className="mt-3 text-caption text-ink-secondary">{siteConfig.mission}</p>
				</div>

				{footerNavigation.map((group) => (
					<nav key={group.heading} aria-label={group.heading}>
						<h3 className="text-overline font-semibold uppercase tracking-(--text-overline--letter-spacing) text-ink-tertiary">
							{group.heading}
						</h3>
						<ul className="mt-4 flex flex-col gap-2.5">
							{group.items.map((item) => (
								<li key={item.label}>
									<Link
										href={item.href}
										className="text-caption text-ink-secondary transition-colors duration-(--duration-fast) hover:text-gobot-600"
									>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				))}
			</Container>

			<div className="border-t border-border-subtle">
				<Container className="flex flex-col items-center justify-between gap-3 py-6 text-overline text-ink-tertiary sm:flex-row">
					<p>
						© {new Date().getFullYear()} {siteConfig.company}. All rights reserved.
					</p>
					<p>Made with warmth — and a little help from Go-Bot.</p>
				</Container>
			</div>
		</footer>
	);
}

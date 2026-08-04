'use client';

import { useState } from 'react';
import { ArrowUpRight, Camera, Mic } from 'lucide-react';
import { Button, Container, Modal, SectionHeading } from '@/components/ui';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion/reveal';

const BEING_URL = 'https://beingbyengage.com';

/** Condensed from beingbyengage.com: the four parts of the one compass. */
const beingPillars = [
	{
		name: 'The Atlas',
		blurb: 'Eight dimensions of your life — stillness, body, work, soul, more — on one calm page.',
	},
	{
		name: 'Be, your guide',
		blurb: 'A voiced AI presence that listens, notices, and speaks in plain English.',
	},
	{
		name: 'Plan my day',
		blurb: 'Written in language first, scheduled second. Buffers land on purpose.',
	},
	{
		name: 'Doors',
		blurb: 'Real help quietly set aside for you, matched by Be — never seen by the partner.',
	},
];

type Activation = 'talk' | 'live' | null;

/**
 * GO-BOT, powered by BEING: condensed BEING story plus its two live
 * activations. Each opens the real beingbyengage.com demo in a compact
 * popup iframe (the site sends no frame-blocking headers), anchored to
 * the demo card, with camera/microphone permission delegated so the
 * activations behave exactly as they do on the BEING site.
 */
export function PoweredByBeing() {
	const [activation, setActivation] = useState<Activation>(null);

	return (
		<section id="powered-by-being" className="py-28">
			<Container>
				<SectionHeading
					eyebrow="Powered by BEING"
					title="Go-Bot, powered by BEING."
					description="Being — by Engage — is the personal AI compass for soul, mind, body and work. One compass for the whole of you: one app for the day in front of you, and the life you're actually building. That same engine drives every Go-Bot feature and unlocks every capability."
				/>

				<RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{beingPillars.map((pillar) => (
						<RevealItem key={pillar.name}>
							<div className="h-full rounded-2xl border border-border-strong bg-surface p-6">
								<h3 className="text-body-lg font-semibold">{pillar.name}</h3>
								<p className="mt-2 text-caption text-ink-secondary">{pillar.blurb}</p>
							</div>
						</RevealItem>
					))}
				</RevealGroup>

				<Reveal className="mt-12 flex flex-wrap items-center justify-center gap-4">
					<Button onClick={() => setActivation('talk')}>
						<Mic className="h-4 w-4" aria-hidden />
						Talk to Be
					</Button>
					<Button onClick={() => setActivation('live')}>
						<Camera className="h-4 w-4" aria-hidden />
						Show Be Live
					</Button>
					<a
						href={BEING_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-1.5 text-body font-medium text-gobot-700 transition-colors duration-(--duration-fast) hover:text-gobot-800"
					>
						beingbyengage.com
						<ArrowUpRight className="h-4 w-4" aria-hidden />
					</a>
				</Reveal>
			</Container>

			<Modal
				open={activation === 'talk'}
				onClose={() => setActivation(null)}
				title="Talk to Be"
				className="max-w-md p-5"
			>
				<p className="mb-3 text-caption text-ink-secondary">
					Tap the mic and talk. Be listens, then speaks back — live from beingbyengage.com.
				</p>
				{activation === 'talk' ? (
					<iframe
						src={`${BEING_URL}/#beEyes`}
						title="Talk to Be — live demo"
						allow="microphone; autoplay"
						className="h-[60svh] w-full rounded-xl border border-border-strong bg-surface-sunken"
					/>
				) : null}
			</Modal>

			<Modal
				open={activation === 'live'}
				onClose={() => setActivation(null)}
				title="Show Be Live"
				className="max-w-md p-5"
			>
				<p className="mb-3 text-caption text-ink-secondary">
					Turn on the camera, then ask Be what she sees — live from beingbyengage.com.
				</p>
				{activation === 'live' ? (
					<iframe
						src={`${BEING_URL}/#camStage`}
						title="Show Be Live — live demo"
						allow="camera; microphone; autoplay"
						className="h-[60svh] w-full rounded-xl border border-border-strong bg-surface-sunken"
					/>
				) : null}
			</Modal>
		</section>
	);
}

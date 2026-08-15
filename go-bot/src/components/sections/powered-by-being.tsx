'use client';

import { useState } from 'react';
import { ArrowUpRight, Camera, Mic } from 'lucide-react';
import { Button, Modal } from '@/components/ui';
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
 * The BEING block inside the AI Playground: condensed BEING story plus its
 * two live activations. Each opens the real beingbyengage.com demo in a
 * compact popup iframe (the site sends no frame-blocking headers), anchored
 * to the demo card, with camera/microphone permission delegated so the
 * activations behave exactly as they do on the BEING site.
 */
export function BeingActivations() {
	const [activation, setActivation] = useState<Activation>(null);

	return (
		<div className="mx-auto mt-20 max-w-4xl border-t border-border-subtle pt-14">
			<Reveal className="text-center">
				<p className="text-overline text-gobot-600">Powered by BEING</p>
				<h3 className="mt-3 text-headline font-semibold">Go-Bot, powered by BEING.</h3>
				<p className="mx-auto mt-4 max-w-2xl text-body-lg text-ink-secondary text-pretty">
					Being — by Engage — is the personal AI compass for soul, mind, body and work. One
					compass for the whole of you: one app for the day in front of you, and the life
					you&apos;re actually building. That same engine drives every Go-Bot feature and
					unlocks every capability.
				</p>
			</Reveal>

			<RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{beingPillars.map((pillar) => (
					<RevealItem key={pillar.name}>
						<div className="h-full rounded-2xl border border-border-subtle bg-surface p-5">
							<h4 className="text-body font-semibold">{pillar.name}</h4>
							<p className="mt-2 text-caption text-ink-secondary">{pillar.blurb}</p>
						</div>
					</RevealItem>
				))}
			</RevealGroup>

			<Reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
		</div>
	);
}

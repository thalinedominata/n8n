/**
 * Thin brand-orange rule separating stacked homepage sections — a quiet
 * horizon line where two light sections would otherwise blur together.
 */
export function SectionDivider() {
	return (
		<hr
			aria-hidden
			className="h-px border-0 bg-gradient-to-r from-transparent via-gobot-500/60 to-transparent"
		/>
	);
}

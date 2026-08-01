'use client';

import { GoBot, type GoBotProps } from './go-bot';

/**
 * Go-Bot preset library — the named versions pages load.
 *
 * Mood presets fix the expression; role presets fix the profession
 * accessory. Both remain thin wrappers over <GoBot>, so every page uses
 * the same character engine and stays in character.
 */

type MoodPresetProps = Omit<GoBotProps, 'mood'>;
type RolePresetProps = Omit<GoBotProps, 'role'>;

// ---------- Mood presets ----------
export const GoBotIdle = (props: MoodPresetProps) => <GoBot mood="idle" {...props} />;
export const GoBotThinking = (props: MoodPresetProps) => <GoBot mood="thinking" {...props} />;
export const GoBotListening = (props: MoodPresetProps) => <GoBot mood="listening" {...props} />;
export const GoBotTalking = (props: MoodPresetProps) => <GoBot mood="talking" {...props} />;
export const GoBotHappy = (props: MoodPresetProps) => <GoBot mood="happy" {...props} />;
export const GoBotConcerned = (props: MoodPresetProps) => <GoBot mood="concerned" {...props} />;
export const GoBotScanning = (props: MoodPresetProps) => <GoBot mood="scanning" {...props} />;
export const GoBotCharging = (props: MoodPresetProps) => <GoBot mood="charging" {...props} />;
export const GoBotWalking = (props: MoodPresetProps) => <GoBot mood="walking" {...props} />;

/** Hero-scale Go-Bot with his autonomous idle life. */
export const GoBotHero = (props: GoBotProps) => <GoBot size={340} {...props} />;

// ---------- Role presets ----------
export const GoBotMedical = (props: RolePresetProps) => <GoBot role="medical" {...props} />;
export const GoBotSecurity = (props: RolePresetProps) => <GoBot role="security" {...props} />;
export const GoBotPolice = (props: RolePresetProps) => <GoBot role="police" {...props} />;
export const GoBotEducation = (props: RolePresetProps) => <GoBot role="education" {...props} />;
export const GoBotConstruction = (props: RolePresetProps) => <GoBot role="construction" {...props} />;
export const GoBotFirefighter = (props: RolePresetProps) => <GoBot role="firefighter" {...props} />;
export const GoBotChildCare = (props: RolePresetProps) => <GoBot role="childcare" {...props} />;
export const GoBotElderCare = (props: RolePresetProps) => <GoBot role="eldercare" {...props} />;
export const GoBotDeveloper = (props: RolePresetProps) => <GoBot role="developer" {...props} />;

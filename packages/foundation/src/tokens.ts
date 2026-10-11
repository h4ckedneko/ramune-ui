export const FONT_IDS = [
  "heading",
  "body",
  "code",
] as const;

export const COLOR_IDS = [
  "background-1",
  "background-2",
  "surface-1",
  "surface-1a",
  "surface-2",
  "surface-2a",
  "surface-3",
  "surface-3a",
  "text-1",
  "text-2",
  "border-1",
  "border-2",
  "shadow",
  "overlay",
  "accent",
  "accent-fg",
  "neutral",
  "neutral-fg",
  "destructive",
  "destructive-fg",
  "info",
  "info-fg",
  "success",
  "success-fg",
  "warning",
  "warning-fg",
  "error",
  "error-fg",
] as const;

export const SPACING_IDS = [
  "0",
  "0-5",
  "1",
  "1-5",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
] as const;

export type FontId = typeof FONT_IDS[number];

export type ColorId = typeof COLOR_IDS[number];

export type SpacingId = typeof SPACING_IDS[number];

export type FontTokens = Record<FontId, string>;

export type ColorTokens = Record<ColorId, string>;

export type SpacingTokens = Record<SpacingId, string>;

/**
 * Motion Tokens 2026 — IMEA Radiodifusão Design System
 * Centralized easing, durations, and stagger delays.
 */

export const MOTION_TOKENS = {
  // Easing Curves (Custom 2026 Silicon Valley feel)
  ease: {
    expoOut: 'expo.out', // cubic-bezier(0.16, 1, 0.3, 1)
    powerOut: 'power3.out',
    power2Out: 'power2.out',
    springMagnetic: 'power2.out',
  },

  // Standard Durations (in seconds for GSAP)
  duration: {
    micro: 0.18,
    fast: 0.3,
    normal: 0.55,
    section: 0.75,
    counter: 1.8,
  },

  // Stagger Delays (in seconds)
  stagger: {
    tight: 0.06,
    normal: 0.09,
    cards: 0.12,
  },

  // Spatial Offsets (in px)
  distance: {
    subtle: 12,
    standard: 22,
    deep: 36,
  },
} as const;

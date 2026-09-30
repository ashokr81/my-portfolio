import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  try {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#818cf8', '#c084fc', '#34d399'],
    });
  } catch {
    // Graceful fallback if canvas is not supported
  }
};

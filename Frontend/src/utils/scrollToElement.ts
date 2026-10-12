export const scrollToElement = (id: string) => {
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'instant'
    : 'smooth';
  document.getElementById(id)?.scrollIntoView({ behavior });
};

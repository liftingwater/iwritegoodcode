import { writable } from 'svelte/store';

/**
 * Theme store to manage light/dark mode
 * Persists preference to localStorage
 */

function createThemeStore() {
  // Determine initial theme from localStorage or system preference
  const storedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
  
  let initialTheme = 'light';
  
  if (storedTheme) {
    initialTheme = storedTheme;
  } else if (typeof window !== 'undefined' && window.matchMedia) {
    // Check system preference if no stored preference
    initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  const { subscribe, set } = writable(initialTheme);

  return {
    subscribe,
    toggle: () => {
      let newTheme;
      const unsubscribe = subscribe(currentTheme => {
        newTheme = currentTheme === 'light' ? 'dark' : 'light';
      })();
      unsubscribe();
      
      set(newTheme);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', newTheme);
      }
      updateTheme(newTheme);
    },
    set: (theme) => {
      set(theme);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', theme);
      }
      updateTheme(theme);
    }
  };
}

function updateTheme(theme) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

export const theme = createThemeStore();

// Initialize theme on page load
if (typeof document !== 'undefined') {
  const storedTheme = localStorage.getItem('theme') || 'light';
  updateTheme(storedTheme);
}

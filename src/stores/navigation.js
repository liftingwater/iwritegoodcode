import { writable } from 'svelte/store';

/**
 * Navigation store to manage the current active page
 * 
 * Valid pages: 'projects', 'blog', 'guides'
 */
export const currentPage = writable('projects');

/**
 * Helper function to navigate to a page
 * @param {string} page - The page name to navigate to
 */
export function navigateTo(page) {
  if (['projects', 'blog', 'guides'].includes(page)) {
    currentPage.set(page);
  } else {
    console.warn(`Invalid page: ${page}. Valid pages are: projects, blog, guides`);
  }
}

'use client';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
};

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window !== 'undefined') {
    window.gtag('event', eventName, params);
  }
};
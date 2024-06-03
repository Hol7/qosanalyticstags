// src/analytics.js
import ReactGA from 'react-ga';

const TRACKING_ID = 'G-6CH0RQPCR9'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(TRACKING_ID);

export const trackEvent = (category, action, label = '') => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

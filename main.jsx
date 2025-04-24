import { createRoot } from 'react-dom/client';
import React from 'react';
import App from '/src/App.tsx';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
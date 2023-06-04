import React from 'react';
import './style.css';
import ClockClassComponent from './components/pure/ClockClassComponent.jsx';
import ClockFunctionComponent from './components/pure/ClockFunctionComponent.jsx';
export default function App() {
  return (
    <div>
      <ClockClassComponent />
      <ClockFunctionComponent />
    </div>
  );
}

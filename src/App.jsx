import React from 'react';

// implementig lazy loading

const Counter = React.lazy(() => import('./components/Counter'));

const App = () => {
  return (
    <div className="app">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Counter />
      </React.Suspense>
    </div>
  );
};

export default App;

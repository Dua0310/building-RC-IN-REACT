
import React from 'react';
import Card from './components/Card/Card';

function App() {
  const handleLearnMore = () => {
    alert('Learn more clicked!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to React Reusable Components Demo</h1>
      <Card
        title="Reusable Card Component"
        description="This card uses a reusable button inside."
        onButtonClick={handleLearnMore}
      />
    </div>
  );
}

export default App;

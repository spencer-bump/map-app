import React from 'react';
import Header from './Header';
import LeafletMap from './LeafletMap';

const App = () => {

  return (
    <div className="ui container" >
      <Header />
      <LeafletMap />
    </div>

  );
};

export default App;
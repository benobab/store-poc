import React, { useState } from 'react';
import { ListeningMutatingMethod } from './listeningMutatingMethod';
import { ListeningSubState } from './listeningSubState';
import { ListeningFullState } from './listeningFullState';
import { ListeningSubState2 } from './listeningSubState2';
import { ListeningSubState3 } from './listeningSubState3';
import { ListeningSubState4 } from './listeningSubState4';

const App: React.FC = () => {
  const [showNameCmp, setShowNameCmp] = useState<boolean>(false);
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    margin: 0,
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    flex: 1,
  };

  const itemStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    color: 'white',
  };

  const item1Style: React.CSSProperties = {
    ...itemStyle,
    backgroundColor: '#ff5733',
  };

  const item2Style: React.CSSProperties = {
    ...itemStyle,
    backgroundColor: '#33c1ff',
  };

  const item3Style: React.CSSProperties = {
    ...itemStyle,
    backgroundColor: '#75ff33',
  };

  const item4Style: React.CSSProperties = {
    ...itemStyle,
    backgroundColor: '#ff33a8',
  };
  
  const item5Style: React.CSSProperties = {
    ...itemStyle,
    backgroundColor: 'red',
  };

  const item6Style: React.CSSProperties = {
    ...itemStyle,
    backgroundColor: 'blue',
  };

  return (
    <div style={containerStyle}>
      <div style={rowStyle}>
        <div style={item1Style}><ListeningMutatingMethod/></div>
        <div style={item2Style} onClick={()=> setShowNameCmp(!showNameCmp)}>
          {showNameCmp ? <ListeningSubState/> : <>Nothing (but click)</>}
        </div>
      </div>
      <div style={rowStyle}>
        <div style={item3Style}><ListeningFullState/></div>
        <div style={item4Style}><ListeningSubState2/></div>
      </div>
      <div style={rowStyle}>
        <div style={item5Style}><ListeningSubState4/></div>
        <div style={item6Style}><ListeningSubState3/></div>
      </div>
    </div>
  );
};

export default App;

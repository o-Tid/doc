import React from 'react';
import { HardHat, Construction } from 'lucide-react';

function UnderConstruction() {
  return (
    <div className="under-construction" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      margin: '1rem 0',
    //   backgroundColor: '#FFF9C4',
      borderRadius: '8px',
    //   border: '2px dashed #F57F17'
    }}>
      <Construction size={32} color="#F57F17" style={{ marginRight: '8px' }} />
      <span style={{ color: '#F57F17', fontSize: '1.7rem' }}>Denne siden er under oppføring, skrivefeil og dårlige formuleringer kan forekomme </span>
      <HardHat size={32} color="#F57F17" style={{ marginLeft: '8px' }} />
    </div>
  );
}

export default UnderConstruction;
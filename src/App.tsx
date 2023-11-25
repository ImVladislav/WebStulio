import React from 'react';
import Face from './Face/Face';
import ThreeScene from './ThreeScene/ThreeScene';
import Try from './TreNew/Try';
import Text3d from './TreNew/Text3d';

const App: React.FC = () => {
  return (
    <div className="content-wrapper">
      <Face />
      <ThreeScene/>
      {/* Добавьте другие компоненты и содержимое вашего приложения */}
      <Try />
      <Text3d/>
    </div>


    
  );
};

export default App;

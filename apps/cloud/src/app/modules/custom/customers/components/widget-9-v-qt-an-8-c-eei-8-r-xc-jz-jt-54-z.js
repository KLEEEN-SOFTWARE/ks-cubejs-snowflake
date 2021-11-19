import React from 'react';
import { KUIConnect } from '@kleeen/core-react';
import { CardWidget } from '@kleeen/react/atomic-elements';
import { BackgroundUrl } from '@kleeen/react/components';

function Widget9VQtAn8CEei8RXcJzJt54Z({ translate, ...widget }) {
  return (
    <CardWidget {...widget}>
      <BackgroundUrl url="https://www.someka.net/wp-content/uploads/2017/01/World-Heat-Map-Excel-Template-Someka-SS03.png" />
    </CardWidget>
  );
}

export default KUIConnect(({ translate }) => ({ translate }))(Widget9VQtAn8CEei8RXcJzJt54Z);

import React from 'react';
import createExpobook from 'expobook';
import QuantityTracker from './src/components/Molecules/QuantityTracker'
import { textColors } from './src/constants/styles'

const expobook = createExpobook();

expobook.add('Quantity Tracker', () => <QuantityTracker tintcolor={textColors.red}/>);

export default expobook.build();
import React from 'react';
import createExpobook from 'expobook';
import FormExample from './src/components/atoms/input.js';

const expobook = createExpobook();

expobook.add('My Button', () => <FormExample/>);

export default expobook.build();
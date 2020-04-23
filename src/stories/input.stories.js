import React from 'react';
import Input from '../components/atoms/input';

export const Small = () => <Input size='small' testid="small-input" value="test" onChange={() => console.log("test")} />;
export const Medium = () => <Input size='medium' testid="medium-input" value="test" onChange={() => console.log("test")} />;
export const Large= () => <Input size='large' testid="large-input" value="test" onChange={() => console.log("test")} />;

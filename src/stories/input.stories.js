import React from 'react';
import Input from '../components/atoms/input';

export const Small = ({onChange}) => <Input onChange={() => onChange()} size='small' testid="small-input" placeholder="small input"/>;
export const Medium = ({onChange}) => <Input onChange={() => onChange()} size='medium' testid="medium-input" placeholder="medium input"/>;
export const Large= ({onChange}) => <Input onChange={() => onChange()} size='large' testid="large-input" placeholder="large input"/>;

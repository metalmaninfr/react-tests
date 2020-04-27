import React from 'react';
import WorkCard from '../components/layouts/work-card';
import moment from 'moment';

export const Works = props => (
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '600px' }}>
    <WorkCard title="My fav Song" date="2020-04-20" description="smoke weed every day" />
  </div>
);


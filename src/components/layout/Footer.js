import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';

const Footer = ({ muscles, category, onSelect }) => {
  const index = category 
        ? muscles.findIndex(muscle => muscle=== category) + 1
        : 0;  
  const onIndexSelect = (evt, index) => onSelect(index === 0 ? '' : muscles[index - 1]);
  console.log('Index is', index, category);

  return (
    <Paper>
        <Tabs
          value={index}
          onChange={onIndexSelect}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        <Tab label='All' />
        { muscles.map((muscle, index)=>
          <Tab key={index} label={muscle} />
          )}
        </Tabs>
      </Paper>
  )
}
export default Footer;
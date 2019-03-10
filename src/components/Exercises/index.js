import React, {Fragment } from 'react';
import {
    Grid, 
    Paper, 
    Typography,
    List,
    ListItem,
    ListItemText,
    } from '@material-ui/core';

export default function ({ exercises, category, onSelect, exercise, }) {
  const {  
    title =' Welcome...', 
    description = 'Please select an exercise from the list on the left',
  } = exercise;
  return (
    <div>
      <Grid container>
        <Grid item sm>
          <Paper style={styles.paper}>                    
              {exercises.map(([muscle, exercises], index)=>
              !category || category === muscle 
              ? <Fragment key={index}>    
                  <Typography                    
                    variant='h6'
                    style={{textTransform: 'capitalize'}}
                  >
                    {muscle}
                  </Typography>
                  <List component="nav">
                      {exercises.map(({ id, title, }, index)=>
                      <ListItem 
                        button 
                        key={index}
                        onClick={()=> onSelect(id)}
                      >
                        <ListItemText primary={title} />
                      </ListItem>
                      )}
                  </List>
                </Fragment>
              : null
                 )}              
          </Paper>
        </Grid>
        <Grid item sm>
          <Paper style={styles.paper}>
           <Typography variant='h4'>
              {title}
           </Typography>
            <Typography 
              variant='subtitle1'
              style={{marginTop: 20}}
            >
              {description}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

const styles={
  paper: {
    padding: 20, 
    margin: 10, 
    height: 500, 
    overflow: 'auto'
  }
}
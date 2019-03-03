import React, { Component, Fragment } from 'react';
import './App.css';
import {muscles, exercises } from '../store.js';

//Import components
import { Header, Footer } from '../components/layout';
import Exercises from '../components/Exercises';

class App extends Component {
  state={
    exercises,
    exercise: {},
    category: ''
  }
  getExercisesByMuscles=()=> 
    Object.entries(
      this.state.exercises.reduce((exercises , exercise)=> {
        const { muscles }= exercise;
        exercises[muscles] = exercises[muscles]
            ? [...exercises[muscles], exercise]
            : [exercise]
        return exercises;
      },{})
    );
  handleCategorySelected=(category)=> this.setState({category})
  handleExerciseSelected=(id)=> this.setState(({ exercises })=>({
    exercise: exercises.find(ex => ex.id === id)
  }));

  render() {
    const exercises =this.getExercisesByMuscles();
    const {category , exercise} = this.state;
    console.log(exercise);
    return (
      <Fragment>
        <Header/>
        
        <Exercises
          category={category}
          exercise={exercise}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
        />

        <Footer 
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

export default App;

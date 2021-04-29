import React from "react";
import { connect } from "react-redux";
import {addTodo} from '../action/index';

const Addtodo = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    let input  = e.target.userInput.value;
    props.dispatch(addTodo(input));
  };
  return (
    <div>
      <label>Todo List</label>
      <form onSubmit={submitHandler}>
        <input type="text"
         placeholder="add your task here"
         name="userInput"
          />
          <button>Submit</button>
      </form>
    </div>
  );
};

// const mapStateToProps = (state) => {
//     return {data:state.todo.data}
// };

export default connect()(Addtodo);

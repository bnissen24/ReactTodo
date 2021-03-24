import React from 'react';

import TaskItem from './TaskItem';

class TaskList extends React.Component {

  markDone = (task) => {
    const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
    let taskList = this.props.tasks;
    taskList.splice(taskIndex, 1);
    this.props.onUpdateTaskList(taskList);
  }

  render() {
    const todoItems = this.props.tasks.filter(task => task.column === 'todo')
      .map(task => {
        return <TaskItem task={task} key={task.id} markDone={this.markDone} />
      });

    const inprogressItems = this.props.tasks.filter(task => task.column === 'in-progress')
      .map(task => {
        return <TaskItem task={task} key={task.id} markDone={this.markDone} />
      });

    const reviewItems = this.props.tasks.filter(task => task.column === 'review')
      .map(task => {
        return <TaskItem task={task} key={task.id} markDone={this.markDone} />
      });

    const doneItems = this.props.tasks.filter(task => task.column === 'done')
      .map(task => {
        return <TaskItem task={task} key={task.id} markDone={this.markDone} />
      });

    return (
      <ul className="task-list list-group">
        <div>
          <h3>Todo</h3>
          { todoItems }
        </div>
        <div>
          <h3>In Progress</h3>
          { inprogressItems }
        </div>
        <div>
          <h3>Review</h3>
          { reviewItems }
        </div>
        <div>
          <h3>Done</h3>
          { doneItems }
        </div>
      </ul>
    )
  }
}

export default TaskList;
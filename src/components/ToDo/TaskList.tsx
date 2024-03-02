import { taskToggled } from '@store/ToDo/reducer';
import { selectAllTasks } from '@store/ToDo/selectors';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const TaskList = () => {
    const dispatch = useDispatch();

    const tasks = useSelector(selectAllTasks);

    if (!tasks.length) {
        return <p>No tasks</p>;
    }

    return (
        <div>
            <h3>Your Tasks: </h3>
            {tasks.map((task) => {
                return (
                    <div
                        key={task.id}
                        className=" p-1 my-1 border border-gray-200 flex items-center"
                    >
                        <label>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={(e) => {
                                    dispatch(taskToggled(task.id));
                                }}
                            />
                        </label>

                        <span className="ml-4">{task.name}</span>
                    </div>
                );
            })}
        </div>
    );
};

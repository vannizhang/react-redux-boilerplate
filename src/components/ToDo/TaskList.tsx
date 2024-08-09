import { taskToggled } from '@store/ToDo/reducer';
import {
    selectAllTasks,
    selectCountOfCompletedTasks,
} from '@store/ToDo/selectors';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const TaskList = () => {
    const dispatch = useDispatch();

    const tasks = useSelector(selectAllTasks);

    const countOfCompletedTasks = useSelector(selectCountOfCompletedTasks);

    if (!tasks.length) {
        return (
            <div className=" text-center mt-4">
                <p>You do not have any task in your list.</p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-2">
                <p>
                    {countOfCompletedTasks} out of {tasks.length} tasks are
                    completed
                </p>
            </div>

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

import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function EditTask(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const taskToEdit = location.state?.task || {};

    const [title, setTitle] = useState(taskToEdit.title || "");
    const [description, setDescription] = useState(taskToEdit.description || "");
    const [dueDate, setDueDate] = useState(taskToEdit.dueDate || "");
    const [dueTime, setDueTime] = useState(taskToEdit.dueTime || "");

    const handleSubmit = (e) => {
        e.preventDefault();

        props.editTask(
            title,
            description,
            dueDate,
            dueTime,
            taskToEdit.id
        );

        navigate("/");
    };

    return (
        <div className="taskform-container">
            <div className="taskform-card">

                <button
                    type="button"
                    className="back-btn"
                    onClick={() => navigate("/")}
                >
                    ← Back to Tasks
                </button>

                <h2>Edit Task</h2>

                <form onSubmit={handleSubmit} className="modern-form">

                    <div className="form-group">
                        <label htmlFor="title">Task Title</label>

                        <input
                            id="title"
                            type="text"
                            placeholder="What needs to be done?"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">
                            Description
                        </label>

                        <textarea
                            id="description"
                            placeholder="Add some details about this task..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="4"
                        />
                    </div>

                    <div className="form-row">

                        <div className="form-group">
                            <label htmlFor="dueDate">
                                Due Date
                            </label>

                            <input
                                id="dueDate"
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dueTime">
                                Due Time
                            </label>

                            <input
                                id="dueTime"
                                type="time"
                                value={dueTime}
                                onChange={(e) => setDueTime(e.target.value)}
                                required
                            />
                        </div>

                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                    >
                        Edit Task
                    </button>

                </form>
            </div>
        </div>
    );
}

export default EditTask;
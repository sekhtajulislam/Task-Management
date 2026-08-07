import { useNavigate } from "react-router-dom"

function TaskForm() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate back to the home page on submit
        
        navigate("/");
    };

    return (
        <div className="taskform-container">
            <div className="taskform-card">
                <button type="button" className="back-btn" onClick={() => navigate("/")}>
                    ← Back to Tasks
                </button>
                <h2>Create New Task</h2>
                <form onSubmit={handleSubmit} className="modern-form">
                    <div className="form-group">
                        <label htmlFor="title">Task Title</label>
                        <input id="title" type="text" placeholder="What needs to be done?" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" placeholder="Add some details about this task..." rows="4"></textarea>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="dueDate">Due Date</label>
                            <input id="dueDate" type="date" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dueTime">Due Time</label>
                            <input id="dueTime" type="time" required />
                        </div>
                    </div>
                    <button type="submit" className="submit-btn">Create Task</button>
                </form>
            </div>
        </div>
    )
}
export default TaskForm
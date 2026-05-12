import { useEffect, useState } from "react";

import {
    createIssue,
    getMyIssues,
} from "../services/issueService";

import Navbar from "../components/Navbar";

import "../styles/dashboard.css";


function EmployeeDashboard() {

    const [issues, setIssues] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "LOW",
    });


    // Fetch Issues
    const fetchIssues = async () => {

        try {

            const response = await getMyIssues();

            setIssues(response.data);

        } catch (error) {

            console.log(error);

        }
    };


    useEffect(() => {
        fetchIssues();
    }, []);


    // Handle Input
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };


    // Submit Issue
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await createIssue(formData);

            alert(response.data.message);

            setFormData({
                title: "",
                description: "",
            });

            fetchIssues();

        } catch (error) {

            alert("Failed to create issue");

        }
    };


    return (
        <>

            <Navbar />

            <div className="dashboard-container">

                <h1>Employee Dashboard</h1>


                {/* Create Issue Form */}
                <form className="issue-form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="title"
                        placeholder="Issue Title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                    >
                        <option value="LOW">LOW</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HIGH">HIGH</option>

                    </select>

                    <button type="submit">
                        Create Issue
                    </button>

                </form>


                {/* Issue List */}
                <div className="issue-list">

                    <h2>My Issues</h2>

                    {issues.map((issue) => (

                        <div className="issue-card" key={issue._id}>

                            <h3>{issue.title}</h3>

                            <p>{issue.description}</p>
                            <p>Priority: {issue.priority}</p>

                            <span>Status: {issue.status}</span>

                        </div>

                    ))}

                </div>

            </div>

        </>
    );
}

export default EmployeeDashboard;
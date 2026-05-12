import { useEffect, useState } from "react";

import {
    getAllIssues,
    updateIssueStatus,
} from "../services/issueService";

import Navbar from "../components/Navbar";

import "../styles/dashboard.css";


function AdminDashboard() {

    const [issues, setIssues] = useState([]);


    // Fetch All Issues
    const fetchIssues = async () => {

        try {

            const response = await getAllIssues();

            setIssues(response.data);

        } catch (error) {

            console.log(error);

        }
    };


    useEffect(() => {
        fetchIssues();
    }, []);


    // Update Status
    const handleStatusChange = async (id, status) => {

        try {

            await updateIssueStatus(id, status);

            fetchIssues();

        } catch (error) {

            console.log(error);

        }
    };


    return (
        <>

            <Navbar />

            <div className="dashboard-container">

                <h1>Admin Dashboard</h1>

                <div className="issue-list">

                    {issues.map((issue) => (

                        <div className="issue-card" key={issue._id}>

                            <h3>{issue.title}</h3>

                            <p>{issue.description}</p>
                            <p>
                                <strong>Priority:</strong> {issue.priority}
                            </p>

                            <p>
                                <strong>Employee:</strong>{" "}
                                {issue.createdBy?.name}
                            </p>

                            <select
                                value={issue.status}
                                onChange={(e) =>
                                    handleStatusChange(issue._id, e.target.value)
                                }
                            >

                                <option value="OPEN">
                                    OPEN
                                </option>

                                <option value="IN_PROGRESS">
                                    IN_PROGRESS
                                </option>

                                <option value="RESOLVED">
                                    RESOLVED
                                </option>

                            </select>

                        </div>

                    ))}

                </div>

            </div>

        </>
    );
}

export default AdminDashboard;
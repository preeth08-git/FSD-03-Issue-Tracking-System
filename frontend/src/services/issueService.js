import axios from "axios";

const API = "http://localhost:5000/api/issues";


// CREATE ISSUE
export const createIssue = async (issueData) => {

  const token = localStorage.getItem("token");

  return await axios.post(API, issueData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


// GET MY ISSUES
export const getMyIssues = async () => {

  const token = localStorage.getItem("token");

  return await axios.get(`${API}/myissues`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


// GET ALL ISSUES
export const getAllIssues = async () => {

  const token = localStorage.getItem("token");

  return await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


// UPDATE ISSUE STATUS
export const updateIssueStatus = async (id, status) => {

  const token = localStorage.getItem("token");

  return await axios.put(
    `${API}/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
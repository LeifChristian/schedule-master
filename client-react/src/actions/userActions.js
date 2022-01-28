import axios from "axios";

import {
  // CREATE_PROJECT,
  // UPDATE_PROJECT,
  // DELETE_PROJECT,
  USERS_LOADING,
  GET_USERS,
  // PROJECT_LOADING,
  // GET_PROJECTS,
  // PROJECTS_LOADING
} from "./types";

// Get all projects for specific user
export const getUsers = () => (dispatch) => {
  dispatch(setUserLoading());
  axios
    .get("/api/users")
    .then((res) =>
      dispatch({
        type: GET_USERS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_USERS,
        payload: null,
      })
    );
};

export const setUserLoading = () => {
  return {
    type: USERS_LOADING,
  };
};

// // Get specific project by id
// export const getProject = (id) => (dispatch) => {
//   dispatch(setProjectLoading());
//   axios
//     .get(`/api/users/${id}`)
//     .then((res) =>
//       dispatch({
//         type: GET_USERS,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch({
//         type: GET_USERS,
//         payload: null,
//       })
//     );
// };

// // Create Project
// export const createProject = projectData => dispatch => {
//   axios
//     .post("/api/projects/create", projectData)
//     .then(res =>
//       dispatch({
//         type: CREATE_PROJECT,
//         payload: res.data
//       })
//     )
//     .catch(err => console.log(err));
// };

// // Update Project
// export const updateProject = projectData => dispatch => {
//   axios
//     .patch("/api/projects/update", projectData)
//     .then(res =>
//       dispatch({
//         type: UPDATE_PROJECT,
//         payload: res.data
//       })
//     )
//     .catch(err => console.log(err));
// };

// // Delete Project
// export const deleteProject = (id, history) => dispatch => {
//   axios
//     .delete(`/api/projects/delete/${id}`)
//     .then(res =>
//       dispatch({
//         type: DELETE_PROJECT,
//         payload: id
//       })
//     )
//     .then(res => history.push("/dashboard"))
//     .catch(err => console.log(err));
// };

// // Get all projects for specific user
// export const getProjects = () => dispatch => {
//   dispatch(setProjectsLoading());
//   axios
//     .get("/api/projects")
//     .then(res =>
//       dispatch({
//         type: GET_PROJECTS,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_PROJECTS,
//         payload: null
//       })
//     );
// };

// // Project loading
// export const setProjectLoading = () => {
//   return {
//     type: PROJECT_LOADING
//   };
// };

// Project loading

// // Projects loading
// export const setProjectsLoading = () => {
//   return {
//     type: PROJECTS_LOADING
//   };
// };

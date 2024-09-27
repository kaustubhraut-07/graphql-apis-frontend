import React, { useState } from 'react';
import { gql, useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { Users, createTask } from "./graphql/queries/query";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [viewTasks, { loading, data, error }] = useLazyQuery(gql(Users));

  const [taskscreation, { data: addTasksRes }] = useMutation(gql(createTask));
const UserId = "66f5285c68544556fa183d82"
const completed = true
  const onFormSubmit = (e) => {
    e.preventDefault();
    taskscreation({
      variables: {
        name,
        // email,
        // password,
        user : UserId,
        description,
        completed : completed
      }
    });
  };

  return loading ? <h3>{loading}</h3> : (
    <div>
      <h1>Users</h1>
      <h3>Task List </h3>

      <button onClick={() => viewTasks()}>View Tasks</button>
      {data?.tasks?.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.description}</p>
        </div>
      ))}
      <form onSubmit={onFormSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default App;

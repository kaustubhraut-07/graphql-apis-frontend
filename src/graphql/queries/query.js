import { gql } from "@apollo/client";

export const Users = `#graphql
    query ExampleQuery {
        hello,
  # users {
  #   name
  # },
            tasks {
                name,
                description
            },
  # task(id: $tasksID ){
  #   name
  # }
    
  
}

`


export const createTask = `#graphql

mutation createTask($name: String!, $description: String!, $completed: Boolean!, $user: String!) {
  createTask(name: $name, description: $description, completed: $completed, user: $user) {
        name,
        description,
        completed,
        user
  }
}

`
const rootURL = "http://localhost:3000/tasks";

export async function getAllTasks() {
  const response = await fetch(rootURL);
  return await response.json();
}

export async function addTask(task) {
  const response = await fetch(rootURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return await response.json();
}

export async function completeTask(id) {
  const response = await fetch(rootURL + "/" + id + "/completed", {
    method: "PUT",
  });
  return await response.json();
}

export async function deleteTask(id) {
  const response = await fetch(rootURL + "/" + id + "/delete", {
    method: "DELETE",
  });
  return await response.json();
}

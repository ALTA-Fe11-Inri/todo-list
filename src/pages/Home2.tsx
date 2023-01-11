import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Button from "../components/Button";
import { Input } from "../components/Input";

interface TodoType {
  id: string;
  content: string;
  created_at: boolean;
}

const Home2 = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  /*
  GET: axios.get(url, config)
  DELETE: axios.delete(url, config)
  POST: axios.post(url, body, config)
  PUT: axios.put(url, body, config)
  */
  function fetchData() {
    axios
      .get("https://api.todoist.com/rest/v2/tasks", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  function handleAddTask() {
    const body = {
      content: inputTask,
    };
    axios
      .post("https://api.todoist.com/rest/v2/tasks", body, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      })
      .then((res) => {
        alert("Berhasil menambahkan todo");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => fetchData());
  }

  function handleEditTask(todo: TodoType) {
    const body = {
      content: inputTask,
    };
    axios
      .put("https://api.todoist.com/rest/v2/tasks", body, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      })
      .then((res) => {
        alert("Berhasil menambahkan todo");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => fetchData());
  }

  function handleDeleteTask(todo: TodoType) {
    axios
      .delete("https://api.todoist.com/rest/v2/tasks", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <Layout>
      <div className="rounded-2xl w-full flex flex-col p-6 bg-white dark:bg-gray-500 shadow-xl">
        <Input
          id="input-task"
          label="Insert a new task"
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <Button label="Add Task" onClick={() => handleAddTask()} />
      </div>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="p-2 mb-2 w-full bg-slate-400 gap-2 flex flex-col"
        >
          <p className="break-words">{todo.content}</p>
          <Button label="Edit" onClick={() => handleEditTask(todo)} />
          <Button label="Hapus" onClick={() => handleDeleteTask(todo)} />
        </div>
      ))}
    </Layout>
  );
};

export default Home2;

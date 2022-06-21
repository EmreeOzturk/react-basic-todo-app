import Header from "./components/Header";
import Form from "./components/Form";
import React from "react";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = React.useState([]);
  const [text, setText] = React.useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    if (text.length < 3 && text.length > 0) {
      alert("Please enter a task with at least 3 characters");
      return;
    }
    if (text.length > 0) {
      setTasks([...tasks, text]);
      setText("");
    }
  };
  const handleDelete = (event) => {
    event.preventDefault();
    
    event.target.parentNode.remove(); 
    
  }


  return (
    <div className="App">
      <Header title="To-Do App" />
      <Form
        text={text}
        handleTextChange={handleTextChange}
        handleOnClick={handleOnClick}
        
      />
      <Tasks tasks={tasks} handleDelete = {handleDelete} />
    </div>
  );
}

export default App;

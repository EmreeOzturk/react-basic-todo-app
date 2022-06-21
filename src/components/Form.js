function Form(props) {
  return (
    <div className="form">
      <form action="">
        <input  onChange={props.handleTextChange} type="text" placeholder="Enter your task" value={props.text} />
        <button onClick={props.handleOnClick} type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;

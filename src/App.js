import Todo from "./components/Todo";

//JSX - Javascript with embedded HTML
// App interacts with outside world - Like Main Class
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/> 
      <Todo text='Master React'/>
      <Todo text='Teach React'/>

    </div>
  );
}
//Export to make it available to other files
export default App;

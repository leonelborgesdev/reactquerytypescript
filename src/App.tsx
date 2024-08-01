
import './App.css';
import { useQuery } from '@tanstack/react-query';

const todoId= 1;

function App() {

  const { isLoading, error, data} = useQuery(['todos',todoId],()=>
    fetch('').then(response=> response.json())
  )

  return (
    <div className="App">
      <h1>Todo: {data}</h1>
    </div>
  );
}

export default App;

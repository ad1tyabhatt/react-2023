import './App.css';

function App() {

  const date= new Date()
  const dateString = date.toLocaleTimeString()
  return (
    <>
      <h1>Today is {dateString}</h1>
    </>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
function Welcome(props) {
  return <div>
    <h1>Hello, {props.name}</h1>
  </div>;
}
function App() {
  return (
       <div>
         <Welcome name="liu"/>
         <Welcome name="liu123"/>
         <Welcome name="liu1123123123"/>
       </div>
  );
}

export default App;

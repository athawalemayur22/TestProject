//import logo from './logo.svg';
import './App.css';
import UserDetail from './component/UserDetail';
import Border from './component/Border'

function App() {
  let name = "mayur";
  let age = 26;

  let obj = [
    { name: "Mayur", age: 26 },
    { name: "rohan", age: 28 },
    { name: "soham", age: 30 }
  ]

  return (
    <Border className="border margin-border">
      <p>My name is : {name}</p>
      <p>{name} age is : {age} years</p>
      <div className="margin-left">
      <UserDetail name={obj[0].name} age={obj[0].age}/>
      <UserDetail name={obj[1].name} age={obj[1].age}/>
      <UserDetail name={obj[2].name} age={obj[2].age}/>
      </div>
    </Border>
  );
}

export default App;

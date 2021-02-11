import './App.css';
import mypic from '../resources/mypic.jpg'
import ToDoTasks from '../ToDoTasks/ToDoTasks'

function App() {
  return (
    <div className="App">
      <header>
        <img src={mypic} className="coverPhoto" alt="Cover image"></img>
        <h1>
        Vivek Kaushik's Personal Portfolio Website
        </h1>
      </header>
        <p>{headline1} {headline2} </p>
        <p>{headline3} {headline4}</p>
        <ToDoTasks></ToDoTasks>
        <p>Checkout my LinkedIn <a href="https://www.linkedin.com/in/vivek-kaushik/" target="_blank">Vivek Kaushik LinkedIn</a></p>
        <p>Checkout Github Repo </p>
        <p>Stay tuned.</p>
    </div>
  );
}
const headline1 = "This is a React based FrontEnd website website to demonstrate recruiters my knowledge and understanding of the subject.";
const headline2 = "I'm planning to learn ReactJS and NodeJS this year 2021, using this as my personal learning project.";
const headline3 = "This website is hosted on Azure Static Website with complete CI/CD using github.";
const headline4 = "I'll be adding various functionalities such as ToDo Task lists which only I'll be able to edit/delete using Azure AD authentication.";
export default App;

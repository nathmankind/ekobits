import "./App.css";
import Person from "./components/Person";
import Tweet from "./components/Tweet";

function App() {
  let age1 = 25;
  let age2 = 20;
  let age3 = 22;
  let hobbyList = ["Sleeping", "Dancing", "Hiking", "Singing"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>JSX Exercise </h1>
        <div className="o-tweet__container">
          <Tweet
            name="Delle Bamz"
            username="dellybamz"
            message="This is the tweet that made it to the top list"
            date="2020-11-29"
          />
          <Tweet
            name="Johdy Alba"
            username="jollz"
            message="This is the most engaging tweet but didn't make it to the top for some reasons"
            date="2020-12-01"
          />
          <Tweet
            name="Kimberly Lawrence"
            username="kimberly"
            message="This is the tweet that's at the rock bottom"
            date="2020-12-02"
          />
        </div>
        <div className="o-person__container">
          <Person name="Anthony" age={age1} hobbies={hobbyList} />
          <Person name="Bellaswerosy" age={age2} hobbies={hobbyList} />
          <Person name="Anthony" age={age3} hobbies={hobbyList} />
        </div>
      </header>
    </div>
  );
}

export default App;

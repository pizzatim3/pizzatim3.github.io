import pizza from './pizza.png';
import './App.css';

var currentCode;
var animationDuration = 25;
var logoHeight = 40

function App() {
Initialise()
  return (
    <div className="App">
      <header className="App-header">
          <p>
            pizza time
          </p>
        <a onClick={OnClick}><img src={pizza} className="App-logo" alt="rotating pizza - click to copy the number to your clipboard"/></a>
        <p>
          your number is {currentCode}
        </p>
      </header>
    </div>
  );
}

function Initialise(){
  
  console.log("stop trying to hack my website -ben")
  GenerateCode()
  document.documentElement.style.setProperty('--animation-duration', animationDuration + 's');
  document.documentElement.style.setProperty('--logo-height', logoHeight + 'vmin');
}

function GenerateCode() {
  var min = 1667; //lowest 5 digit number divisible by 6 divided by 6
  var max = 16666; //highest 5 digit number divisible by 6 divided by 6
  currentCode = Math.floor(Math.random() * (max - min + 1) + min) * 6;
}

function OnClick() {
  navigator.clipboard.writeText(currentCode)
  animationDuration = animationDuration / 1.5;
  if (animationDuration >= 0.0000059604644775390625) {
    document.documentElement.style.setProperty('--animation-duration', animationDuration + 's');
  } else {
    window.open('https://www.youtube.com/watch?v=czTksCF6X8Y','_self');
  }
  logoHeight = logoHeight * 1.1
  document.documentElement.style.setProperty('--logo-height', logoHeight + 'vmin');
}

export default App;

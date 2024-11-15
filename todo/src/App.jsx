
import './App.css'
import Header from './component/Header'
import Content from './component/Content'

function App() {

  // This function will be called when the page is loaded every time we shouldnot use this type of functions

  function handleClick()
  {
    console.log("Welcome to React")
  }
  // we need to use arrow fuctuon more in react since the event should be occured wehn the button is click
  // which can be achieved only through arrow function rather than normal functions
  const handleClick2 = (e) => {
    console.log(e.target);
    console.log(e)
    console.log(e.target.innerText)

  }
  const getText = () => {
    console.log("sdfsfs")
  }


  return (
    <>
    <Header/>
    <Content/>
    
    </>
  )
}

export default App

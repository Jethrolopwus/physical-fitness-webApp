import { Link } from "react-router-dom";
import Image from "../images/bryant-churckyno-_1eBN9MzA_c-unsplash.jpg"


const MainHeaderHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of Global Fitness World</h1>
          <p>When you try out ypur fitness journey with us, you cannot regret it but rather you would stand a chance to compete globally.</p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img  src={Image} alt="mainHeaderImage"/>
          </div>
        </div>

      </div>

    </header>
  )
}

export default MainHeaderHeader
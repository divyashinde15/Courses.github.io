import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import php from './images/php.png';
import python from './images/python.png';
import java from './images/java.png'

const App =()=>{
  return(
    <React.Fragment>
      <h1 className="text-center text-danger my-5">COURSES</h1>
      <div className="container">
  <div className="row">
    <div className="col-sm">
    <div class="card">
  <img class="card-img-top" src={php} alt="Card image cap" height="200px"/>
  <div class="card-body">
    <h5 class="card-title">PHP</h5>
    <p class="card-text">Learn from the world-class experts & be part of 10000+ professionals trained & certified. 100% Certification Journey Support.</p>
    <a href="php.js" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card">
  <img class="card-img-top" src={python} alt="Card image cap" height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Python</h5>
    <p class="card-text"> Complete Python Programming Masterclass Beginner to Advanced · Python Programming for Beginners in Data Science.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card">
  <img class="card-img-top" src={java} alt="Card image cap" height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Java</h5>
    <p class="card-text">Java Courses · Java Programming Masterclass for Software Developers Selenium WebDriver with Java Basics to Advanced+Frameworks.</p>
    <a href="#" class="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  </div>
</div>
    </React.Fragment>
  )
}
export default App;
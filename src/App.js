import React, { Component } from 'react';
import './App.css';
import Events from './components/Events'

class App extends Component{

  render() {
  return (
    <div className="main-wrap clearfix">
<main role="main" className="container">

<div className="row">
<div className="col-12">
<div className="ct-box">
<Events />

</div>
</div>
</div>

</main>
    </div>

  );

}
}

export default App;

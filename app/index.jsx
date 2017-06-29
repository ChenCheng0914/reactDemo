import '../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

function App(){
    //JSX here!
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github User</h3>
        </section>
      </div>
    )
};

const app = document.createElement('div');
$('body').append(app);
ReactDOM.render(<App />, app);
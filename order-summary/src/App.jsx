import './App.css';

function App() {
  return (
    <div className="card-container">
      <img src="src\assets\images\illustration-hero.svg"></img>
      <div className="details">
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="plan-container">
          <img src="src\assets\images\icon-music.svg"></img>
          <div className="package-container">
            <h2>Annual Plan</h2>
            <p>$59.99/year</p>
          </div>
          <a href="#">Change</a>
        </div>
        <a className="btn-proceed">Proceed to Payment</a>
        <a className="btn-cancel">Cancel Order</a>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import CardContainer from './ProductCards';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Navigation';
import { BuyModalWindow } from './modalwindow';
import About from './About';
import { SignInForm } from './modalwindow';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        loggedin: false,
        name: "",
      }
    };
    this.showBuyModalWindow = this.showBuyModalWindow.bind(this);
    this.showSignInModalWindow = this.showSignInModalWindow.bind(this);
    this.toggleBuyModalWindow = this.toggleBuyModalWindow.bind(this);
    this.toggleSignInModalWindow = this.toggleSignInModalWindow.bind(this);


  }

  handleSignedIn(user) {
    this.setState({
      user: user
    });
  }

  
  showBuyModalWindow(id,price){
    const state = this.state;
    const newState = Object.assign({},state,{showBuyModal:true,productid:id,price:price});
    this.setState(newState);
  }

  toggleBuyModalWindow(){
    const state = this.state;
    const newState = Object.assign({},state,{showBuyModal:!state.showBuyModal});
    this.setState(newState); 
  }

  showSignInModalWindow() {
    console.log('Before setState', this.state.showSignInModal);
    this.setState({ showSignInModal: true }, () => {
    console.log('After setState', this.state.showSignInModal);
  });
  }
  
  toggleSignInModalWindow() {
    this.setState({ showSignInModal: !this.state.showSignInModal });
  }

  componentDidMount() {
    fetch('user.json')
      .then(res => res.json())
      .then((result) => {
        console.log('Fetch...');
        this.setState({
          user: result
        });
      });
  }
  render() {
    return (
      <Router>
        <Nav user={this.state.user} showModalWindow={this.showSignInModalWindow} />
        <div className='container pt-4 mt-4'>
          <Routes>
            <Route 
              path="/" 
              element={<CardContainer location='cards.json' showBuyModal={this.showBuyModalWindow} />} 
            />
            <Route 
              path="/promos" 
              element={<CardContainer location='promos.json' promo={true} showBuyModal={this.showBuyModalWindow} />} 
            />
            <Route 
              path="/about" 
              element={<About />} 
            />
          </Routes>
        </div>
        <BuyModalWindow 
          showModal={this.state.showBuyModal} 
          toggle={this.toggleBuyModalWindow} 
          user={this.state.user.ID} 
          productid={this.state.productid} 
          price={this.state.price} 
        />
        {/* SignInForm 조건부 렌더링 */}
        {this.state.showSignInModal &&  
    <div style={{
      position: 'fixed',       // 화면 기준으로 고정
      top: 50,                 // 위쪽에서 50px
      left: '50%',             // 수평 중앙
      transform: 'translateX(-50%)', // 정확히 중앙 정렬
      zIndex: 9999,            // 다른 요소보다 위로
      background: 'white',     // 배경색
      padding: '20px',
      border: '1px solid black',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }}>
      <h2>Sign In</h2>
      <SignInForm handleNewUser={() => console.log('New user flow')} />
      <button 
        style={{marginTop: '10px'}} 
        onClick={this.toggleSignInModalWindow}
      >
        Close
      </button>
    </div>
  }
      </Router>
    );
  }
}

export default App;
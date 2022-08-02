import logo from './../../logo_acc_512.png';

export default function Home(){
    return (
        <div className="App-background">
          <header >
            <img src={logo} alt="logo" className="Acc-logo" />
          </header>
    
          <a href="/portfolio">Portfolio</a>
    
          <a href="/about">About</a>
    
          </div>
    );
}


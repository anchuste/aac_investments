import spainFlag from './../../Resources/icons/spain-flag.png';
import ukFlag from './../../Resources/icons/uk-flag.png';
import { useState } from 'react';

export default function Navbar({currentPage}) {

    let current = currentPage;
    const [language, setLanguage] = useState('ES');

    function changeLanguage(newLanguage) {
        //console.log("Changing language to: " + newLanguage);
        setLanguage(newLanguage);
    }

    return (
            <nav className="navbar navbar-expand-lg" data-bs-theme="dark" style={{backgroundColor: "#12372A"}}>
              <div className="container-fluid">
              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    {current === 'home' && 
                        
                            <a className="nav-link active" href="/">Home</a>
                        }
                    {current !== 'home' && 
                        
                            <a className="nav-link" href="/">Home</a>
                        }
                    
                    {current === 'portfolio' &&
                        
                            <a className="nav-link active" href="/portfolio">Portfolio</a>
                        }
                    
                    {current !== 'portfolio' &&
                        
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        }
                    
                    {current === 'trackrecord' &&
                        
                            <a className="nav-link active" href="/trackrecord">Trackrecord</a>
                        }
                    
                    {current !== 'trackrecord' &&
                        
                            <a className="nav-link" href="/trackrecord">Trackrecord</a>
                        }
                    
                    {current === 'about' &&
                        
                            <a className="nav-link active" href="/about">About</a>
                     }
                    
                    {current !== 'about' &&
                        
                            <a className="nav-link" href="/about">About</a>
                        }

                    
                        <a className="nav-link" href="/language">Language</a>
                    
                    </ul>
                </div>
                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" >
                        {language === 'ES' && <img src={spainFlag}/>}
                        {language === 'EN' && <img src={ukFlag}/>}                     
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" onClick={() => changeLanguage('ES')}>ES 
                            <img src={spainFlag} alt="Es la bandera de España" style={{marginLeft: "0.3em", marginTop: "-0.2em"}}/>
                    </a>
                    <a className="dropdown-item" onClick={() => changeLanguage('EN')}>EN 
                            <img src={ukFlag} alt="Es la bandera de Reino Unido" style={{marginLeft: "0.3em", marginTop: "-0.2em"}}/>
                    </a>
                </div>
              </div>
              
            </nav>
        );
}
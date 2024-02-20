import spainFlag from './../../Resources/icons/spain-flag.png';
import ukFlag from './../../Resources/icons/uk-flag.png';
import './../..//Resources/translation/i18n';
import { useTranslation, Trans } from 'react-i18next';
import './styles.css';

import { useState } from 'react';

export default function Navbar({currentPage}) {
    const { t, i18n } = useTranslation();

    let current = currentPage;
    const [language, setLanguage] = useState('es');

    function changeLanguage(newLanguage) {
        //console.log("Changing language to: " + newLanguage);
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
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
                        
                            <a className="nav-link active" href="/">{t('nav.home')}</a>
                        }
                    {current !== 'home' && 
                        
                            <a className="nav-link" href="/">{t('nav.home')}</a>
                        }
                    
                    {current === 'portfolio' &&
                        
                            <a className="nav-link active" href="/portfolio">{t('nav.portfolio')}</a>
                        }
                    
                    {current !== 'portfolio' &&
                        
                            <a className="nav-link" href="/portfolio">{t('nav.portfolio')}</a>
                        }
                    
                    {current === 'trackrecord' &&
                        
                            <a className="nav-link active" href="/trackrecord">{t('nav.trackrecord')}</a>
                        }
                    
                    {current !== 'trackrecord' &&
                        
                            <a className="nav-link" href="/trackrecord">{t('nav.trackrecord')}</a>
                        }
                    
                    {current === 'about' &&
                        
                            <a className="nav-link active" href="/about">{t('nav.about')}</a>
                     }
                    
                    {current !== 'about' &&
                        
                            <a className="nav-link" href="/about">{t('nav.about')}</a>
                        }
                    </ul>
                </div>
                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" >
                        {language === 'es' && <img src={spainFlag}/>}
                        {language === 'en' && <img src={ukFlag}/>}                     
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" onClick={() => changeLanguage('es')}>ES 
                            <img src={spainFlag} alt="Es la bandera de España" style={{marginLeft: "0.3em", marginTop: "-0.2em"}}/>
                    </a>
                    <a className="dropdown-item" onClick={() => changeLanguage('en')}>EN 
                            <img src={ukFlag} alt="Es la bandera de Reino Unido" style={{marginLeft: "0.3em", marginTop: "-0.2em"}}/>
                    </a>
                </div>
              </div>
              
            </nav>
        );
}
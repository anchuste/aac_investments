import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Navbar({currentPage}) {

    let current = currentPage;

    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                    {current === 'home' && 
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>}
                    {current !== 'home' && 
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>}
                    
                    {current === 'portfolio' &&
                        <li className="nav-item">
                            <a className="nav-link active" href="/portfolio">Portfolio</a>
                        </li>}
                    
                    {current !== 'portfolio' &&
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>}
                    
                    {current === 'trackrecord' &&
                        <li className="nav-item">
                            <a className="nav-link active" href="/trackrecord">Trackrecord</a>
                        </li>}
                    
                    {current !== 'trackrecord' &&
                        <li className="nav-item">
                            <a className="nav-link" href="/trackrecord">Trackrecord</a>
                        </li>}
                    
                    {current === 'about' &&
                        <li className="nav-item">
                            <a className="nav-link active" href="/about">About</a>
                        </li>}
                    
                    {current !== 'about' &&
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>}

                    <li className="nav-item">
                        <a className="nav-link" href="/language">Language</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
}
import logo from './../../logo_acc_512.png';
import './styles.css';

export default function Header() {
    return (
            <>
                <header>
                    <div style={{textAlign: "right"}}>
                        <img style={{width: "25px", height: "15px", marginRight: "10px"}}
                            alt="Spanish flag" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png">
                        </img>
                        <img style={{width: "25px", height: "15px",}}
                            alt="Spanish flag" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/320px-Flag_of_the_United_Kingdom_%281-2%29.svg.png">
                        </img>
                    </div>
                </header>
                <a href="/">
                    <img src={logo} alt="logo" className="Acc-logo" />
                </a>
            </>
        
    );
}
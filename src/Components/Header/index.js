import logo from './../../logo_acc_512.png';
import './styles.css';

export default function Header() {
    return (
            <>
                <a href="/">
                    <img src={logo} alt="logo" className="Acc-logo" />
                </a>
            </>
        );
}
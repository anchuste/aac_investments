import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import Navbar from '../../Components/Navbar';
import './styles.css'

export default function About() {
    return (
        <div className="App-background">
            <Navbar currentPage={"about"}></Navbar>
            <Header></Header>
            <PageTitle title="About"></PageTitle>
        </div>
    );
}

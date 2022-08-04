import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import './styles.css'

export default function About() {
    return (
        <div className="App-background">
            <Header></Header>
            <PageTitle title="About"></PageTitle>
            <p> Página desarrollada por Alberto Anchuste. </p>
        </div>
    );
}

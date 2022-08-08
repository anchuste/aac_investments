import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import './styles.css'

export default function About() {
    return (
        <div className="App-background">
            <Header></Header>
            <PageTitle title="About"></PageTitle>
            <p> Página desarrollada con el framework de Javascript, React: </p>
            <a href="https://es.reactjs.org/">React</a>
            <p> La página está alojada de manera estática en un bucket S3, el servicio de AWS.</p>
            <p> Ha sido realizada por Alberto Anchuste en agosto de 2022</p>
        </div>
    );
}

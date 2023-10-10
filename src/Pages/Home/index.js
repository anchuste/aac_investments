import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import './styles.css'

export default function Home(){
    return (
        <div className="App-background">
          <Header></Header>
          <PageTitle title="Home"></PageTitle>

          <p className="main_paragraph"> 
          Publicación de las estrategias de inversión de los fondos del inversionista privado AAC para los años 2021 y 2022 con objetivo de retornar beneficios en 2-3 años. 
          La información de nuestra cartera se encuentra en la sección Portfolio.
          </p>
          <p className="main_paragraph"> 
          Por otro lado, en la sección Track record se muestra todo el historial de inversiones del fondo.
          </p>
    
          <a href="/portfolio">Portfolio</a>

          <a href="/trackrecord">Track record</a>
    
          <a href="/about">About</a>
    
          </div>
    );
}


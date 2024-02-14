import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import Navbar from '../../Components/Navbar';
import { useTranslation, Trans } from 'react-i18next';
import './styles.css';

export default function Home(){
    const { t, i18n } = useTranslation();
    return (
        <>
          <Navbar currentPage={"home"}></Navbar>
          <div className="App-background">
          <Header></Header>
          <PageTitle title="Home"></PageTitle>

          <p className="main_paragraph"> 
          {t('home.stocksStrategy')}
          </p>
          <p className="main_paragraph"> 
          {t('home.secondSection')}
          </p>
        </div>
      </>
    );
}


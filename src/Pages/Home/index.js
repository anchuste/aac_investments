import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import Navbar from '../../Components/Navbar';
import { useTranslation } from 'react-i18next';
import './homeStyles.css';

export default function Home(){
    const { t, i18n } = useTranslation();
    return (
        <>
          <Navbar currentPage={"home"}></Navbar>
          <div>
          <Header></Header>
          <PageTitle title="Home"></PageTitle>

          <p> 
          {t('home.stocksStrategy')}
          </p>
          <p> 
          {t('home.secondSection')}
          </p>
        </div>
      </>
    );
}


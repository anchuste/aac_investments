import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import { useLocation } from 'react-router-dom'

export default function StockDetail({ stockDetail }) {
    
    console.log("StockDetail() - stockDetail: ", {stockDetail});

    return (
        <div className="App-background">
          <Header></Header>
          <PageTitle title="Stock Detail"></PageTitle>
          </div>
    );
}

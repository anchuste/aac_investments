import { useEffect, useState } from 'react';
export const TrackrecordInfoTable = ({ trackrecordInfo }) => {

    console.log("Se renderiza el componente TrackrecordInfoTable")

    const [trackrecordInfoReceived, setTrackrecordInfoReceived] = useState([]);
    const [sortDirection, setSortDirection] = useState(['desc']);
    const [fieldToSort, setfieldToSort] = useState(['portfolioPercentage']);

    useEffect(() => {
        console.log("Use effect - TrackrecordInfoTable");
        setTrackrecordInfoReceived(trackrecordInfo);
        console.log("Use effect - TrackrecordInfoTable final: ", trackrecordInfoReceived);
        //sortPortfolio('portfolioPercentage', 'desc');
    }, []);

    
    console.log('trackrecordInfoReceived: ', trackrecordInfoReceived);

 
    return (
        <>
            <thead>
            <tr>
                <th>
                    <button
                        type="button"
                        className="btn_header">
                    Stock
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        className="btn_header">
                    Return value
                    {fieldToSort === 'portfolioPercentage' && sortDirection === 'desc' &&  <i className="fa fa-sort-desc" />}
                    {fieldToSort === 'portfolioPercentage' && sortDirection === 'asc' &&  <i className="fa fa-sort-asc" />}
                    </button>
                </th>
                <th>
                    <button
                        type="button"
                        className="btn_header">
                    Return days
                    {fieldToSort === 'date' && sortDirection === 'desc' &&  <i className="fa fa-sort-desc" />}
                    {fieldToSort === 'date' && sortDirection === 'asc' &&  <i className="fa fa-sort-asc" />}
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
                {undefined != trackrecordInfoReceived && trackrecordInfoReceived.length > 0 && trackrecordInfoReceived.map((stock) => {
                    const list = (
                    <tr key={stock['id_trackrecord']}>
                        <td>{stock['titulo_valor']} </td>
                        <td>{stock['rentabilidad']}%</td>
                        {stock['dias_en_cartera'] == 0 && <td>n/a </td>}
                        {stock['dias_en_cartera'] != 0 && <td>{stock['dias_en_cartera']}</td>}
                    </tr>
                    );
                    return list;
                })}
            </tbody>
        </>
    );
}
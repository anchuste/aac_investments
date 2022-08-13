export default function RowsStockInfoTable(stocksInfo) {
    const stocksInfoDestruct = stocksInfo.stocksInfo;
    return (
            <tbody>
            {stocksInfoDestruct.map((stock) => {
                const list = (
                <tr>
                    <td>{stock.title} </td>
                    <td>{stock.portfolio}</td>
                    <td>{stock.lastAddedStockDate}</td>
                </tr>
                );
                return list;
            })}
          </tbody>
    );
}
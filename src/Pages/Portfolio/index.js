import Header from '../../Components/Header';
import PageTitle from '../../Components/PageTitle';
import './styles.css'

export default function Portfolio(){
    return (
        <div className="App-background">
            <Header></Header>
            <PageTitle title="Portfolio"></PageTitle>

            <table class="container">
	            <thead>
		            <tr>
			            <th><h2>Stock	</h2></th>
			            <th><h2>% of Portfolio</h2></th>
		            </tr>
	            </thead>

	<tbody>
		<tr>
			<td>Adobe Inc. (ADBE)</td>
			<td>14.29</td>
		</tr>
		<tr>
			<td>Electronic Arts Inc. (EA)</td>
			<td>8.79</td>
		</tr>
		<tr>
			<td>International Consolidated Airlines Group S.A. (IAG.MC)</td>
			<td>30</td>
		</tr>
        <tr>
			<td>Meta Platforms, Inc. (META)</td>
			<td>24.70</td>
		</tr>
        <tr>
			<td>Micron Technology, Inc. (MU)</td>
			<td>10.49</td>
		</tr>
        <tr>
			<td>Starbucks Corporation (SBUX)</td>
			<td>11.70</td>
		</tr>
        <tr>
			<td>TransUnion (TRU)</td>
			<td>13.06</td>
		</tr>
        <tr>
			<td>Visa Inc. (V)</td>
			<td>11.31</td>
		</tr>
	</tbody>
</table>
          
        </div>
    );
}


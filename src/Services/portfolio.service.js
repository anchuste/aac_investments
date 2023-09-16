
const getPortfolioURL = 'https://cxmhacvpisple4wedaqgzp6q4e0acrnw.lambda-url.eu-west-1.on.aws';

export const getPortfolio = () => {

    return new Promise((resolve, reject) => {

        fetch(getPortfolioURL)
            .then(result => result.json())
            .then(data => {
                resolve(data);
        })

    
    });
}
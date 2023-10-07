
const getTrackrecordURL = 'https://7cqmccvhoodohhlnc4627mmt640aylgy.lambda-url.eu-west-1.on.aws';

export const getTrackrecord = () => {

    return new Promise((resolve, reject) => {

        fetch(getTrackrecordURL)
            .then(result => result.json())
            .then(data => {
                resolve(data);
        })    
    });
}
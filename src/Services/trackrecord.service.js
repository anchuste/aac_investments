
const getTrackrecordURL = 'https://fragrant-firefly-8be0.project-utils.workers.dev/api/trackrecord/getAll';

export const getTrackrecord = () => {

    return new Promise((resolve, reject) => {
        fetch(getTrackrecordURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                console.log('getTrackrecord() - catched exception: ', error);
                reject(error);
            });
    });
}

/*
try {
  const response = await fetch('https://httpbin.org/status/429');
  // network error in the 4xx–5xx range
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  // use response here if we didn't throw above
  doSomethingWith(response);
} catch (error) {
  console.log(error);
}
*/ 
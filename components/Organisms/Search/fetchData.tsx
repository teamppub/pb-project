import axios from 'axios';

export async function fetchData() {
  const response = await axios
    .get('components/Organisms/List/data')
    .then(function (response) {
      // 성공 핸들링
      console.log(response);
    });

  // return Promise.resolve(response.data.result);
}

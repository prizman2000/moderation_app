import axios from 'axios';

const apiPath = 'http://614fdaefa706cd00179b7310.mockapi.io/api';

export const api = ({url, data = {}, method, credentials, headers = {}, cancelToken}) =>

    new Promise(async (resolve, reject) => {
        const appendData = {};
        if (data !== undefined) appendData[method === 'get' ? 'params' : 'data'] = data;

        let res = await axios({
            method: method || 'post',
            url: apiPath + url,
            timeout: 100000,
            ...appendData,
            headers,
            credentials: credentials,
        }).then(resolve).catch(reject);

    });

export default api;

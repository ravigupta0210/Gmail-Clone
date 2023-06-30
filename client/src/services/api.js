import axios from 'axios';

const API_URI = '';

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
    // eslint-disable-next-line
    const { params, urlParams, ...body } = requestData;

    return await axios({
        method: serviceUrlObject.method,
        url: `${API_URI}/${serviceUrlObject.endpoint}/${type}`,
        data: requestData
    })
}

export default API_GMAIL;
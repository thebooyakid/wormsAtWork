import apiClientNoAuth from './clientNoAuth';

const endpoint = '/custom';

export const getCustoms = async (cancelToken) => {
    let error;
    let customs;

    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    if (response.ok){
        customs = response.data.customs
    }else{
        error = "An unexpected error has occurred.  Please try again."
    }

    return{
        error,
        customs
    }
}
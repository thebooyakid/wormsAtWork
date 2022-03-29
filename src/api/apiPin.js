import apiClientNoAuth from './clientNoAuth';

const endpoint = '/pin';

export const getPins = async (cancelToken) => {
    let error;
    let pins;

    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    if (response.ok){
        pins = response.data.pins
    }else{
        error = "An unexpected error has occurred.  Please try again."
    }

    return{
        error,
        pins
    }
}
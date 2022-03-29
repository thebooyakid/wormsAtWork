import apiClientNoAuth from './clientNoAuth';

const endpoint = '/painting';

export const getPainting = async (id, cancelToken) => {
    let error;
    let painting;

    const response = await apiClientNoAuth(cancelToken).get(endpoint+`/${id}`);
    if (response.ok){
        painting = response.data;
    }else{
        error = "An unexpected error has occurred.  Please try again."
    };

    return{
        error,
        painting
    };
};

export const getPaintings = async (cancelToken)=>{
    let error;
    let paintings;

    const response = await apiClientNoAuth(cancelToken).get(endpoint);
    
    if (response.ok){
        paintings = response.data.paintings;
    }else{
        error = 'An unexpected error has occured. Please try again.';
    };

    return{
        error,
        paintings
    };
};
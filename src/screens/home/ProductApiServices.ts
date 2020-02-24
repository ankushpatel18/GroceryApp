

export async function fetchProductListApi(path) {
    const response= await fetch(path);
    const responseData = (response.json())
    if (response.status === 200) {
        return responseData;
    }
    else {
        return undefined;
    }
}
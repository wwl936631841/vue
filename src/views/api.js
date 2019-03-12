export function getPipeDefectData(url, params) {
    return unfetch({
        url: '/users',
        params: params
    });
}
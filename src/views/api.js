export function getPipeDefectData(params) {
    return unfetch({
        url: '/news/index',
        params: params
    });
}
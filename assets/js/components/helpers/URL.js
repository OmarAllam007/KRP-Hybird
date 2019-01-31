export default function (path) {
    let basePath = 'http://hubdesk-crm.test';

    if (!/^\//.test(path)) {
        path = '/' + path;
    }

    return basePath + path;
}

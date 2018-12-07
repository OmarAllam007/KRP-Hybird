export default function (path) {
    let basePath = 'http://krp_laravel_project.test';

    if (!/^\//.test(path)) {
        path = '/' + path;
    }

    return basePath + path;
}

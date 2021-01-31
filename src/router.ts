import { RouteNode } from 'route-node'

let currentPageHandler = undefined;
const exercisesNodes = new RouteNode('exercises', '/exercises', [
    { name: 'list', path: '/' },
    { name: 'show', path: '/:id<\\d+>' }
]);
const rootNode = new RouteNode('', '', [exercisesNodes]);
console.log(window.location.pathname);
const match = rootNode.matchPath(window.location.pathname);
console.log(match);
console.log(match.name);

/*
const routes = {
    '/exercises': { page: Exercises },
    '/exercises/:id<d+>': { page: ExercisePage },

    getPageHandler() {
        let path = this.findPath(window.location.pathname);
        if (path === undefined) {
            window.history.replaceState({info: 'exercises'}, '', '/exercises');
            path = this.findPath(window.location.pathname);
        }
        console.log(path);
        return this[path.path].pageHandler;
    },
    findPath(pathname) {
        const paths = Object.getOwnPropertyNames(this)
            .filter((name) => name.startsWith('/'))
            .map((pathName) => new Path(pathName));
        return paths.find((path) => path.test(window.location.pathname));
    }
};
*/

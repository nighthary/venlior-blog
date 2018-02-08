export default class Resource {

    static getImg = (key) => {
        const imgs = {
            'search': require('../assets/images/icon-search.png'),
        };
        return imgs[key]
    }
}
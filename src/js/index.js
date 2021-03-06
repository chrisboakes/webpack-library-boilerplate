// Optional styling for library - This will compile to a css file in dist folder
import '../scss/style.scss';

export default class {
    constructor(name) {
        let messageContainer = document.querySelector('.message');

        if (messageContainer) {
            messageContainer.innerHTML = this.sayHello(name);
        }
    }

    sayHello(name) {
        return `Hi ${name}`;
    }
}

import BaseComponent from "../BaseComponent.js";

export default class navbar extends BaseComponent {

    render() {
        let $header = document.createElement('nav');
        $header.className = 'navbar navbar-expand-lg navbar-light bg-light';
        $header.innerHTML = 'welcome';

        return $header;
    }
}
import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
        document.addEventListener('DOMContentLoaded', function() {
            const height = document.getElementById('menuMobile') as HTMLElement;
            console.log(height);
            console.log((document.documentElement.clientHeight  - 60) + 'px');
            height.style.setProperty('height', (document.documentElement.clientHeight - 60) + 'px');
        }, false);
    }
    title = 'app';
    mobileMenuActive = false;

    selected(el: MouseEvent) {
        let items =  (<HTMLElement>el.currentTarget).parentElement.parentElement.children;
        for (let i = 0; i < items.length; i++) {
            (<HTMLElement>items.item(i).firstChild).style.removeProperty('background-color');
        }
        (<HTMLElement>el.currentTarget).style.setProperty('background-color', '#c0c0c0');
    }
    setWidth() {
        const height = document.getElementById('menuMobile') as HTMLElement;
        console.log(height);
        console.log((document.documentElement.clientHeight  - 60) + 'px');
        height.style.setProperty('height', (document.documentElement.clientHeight - 60) + 'px');
    }
}


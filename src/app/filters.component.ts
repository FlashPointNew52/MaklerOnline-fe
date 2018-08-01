import { Component} from '@angular/core';

@Component({
    selector: 'app-filters-box',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
    city = 'ХАБАРОВСК';
    openNews = false;
    manager = false;
    realtor = false;
    width = document.documentElement.clientWidth;
    selected(el: MouseEvent, name) {
        const items = document.getElementsByClassName(name) as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < items.length; i++) {
            (<HTMLElement>items.item(i)).style.removeProperty('background-color');
            (<HTMLElement>items.item(i)).style.removeProperty('color');
        }
        (<HTMLElement>el.currentTarget).style.setProperty('background-color', '#5E5E5E');
        (<HTMLElement>el.currentTarget).style.setProperty('color', 'white');
    }
    clear() {
        const offer = document.getElementsByClassName('offer') as HTMLCollectionOf<HTMLElement>;
        const typeOfObject = document.getElementsByClassName('typeOfObject') as HTMLCollectionOf<HTMLElement>;
        const countOfRooms = document.getElementsByClassName('countOfRooms') as HTMLCollectionOf<HTMLElement>;
        const cost = document.getElementsByClassName('cost') as HTMLCollectionOf<HTMLElement>;
        const sort = document.getElementsByClassName('sort') as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < offer.length; i++) {
            offer.item(i).style.setProperty('background-color', 'white');
            offer.item(i).style.setProperty('color', '#5E5E5E');
        }
        for (let i = 0; i < typeOfObject.length; i++) {
            typeOfObject.item(i).style.setProperty('background-color', 'white');
            typeOfObject.item(i).style.setProperty('color', '#5E5E5E');
        }
        for (let i = 0; i < countOfRooms.length; i++) {
            countOfRooms.item(i).style.setProperty('background-color', 'white');
            countOfRooms.item(i).style.setProperty('color', '#5E5E5E');
        }
        for (let i = 0; i < cost.length; i++) {
            cost.item(i).style.setProperty('background-color', 'white');
            cost.item(i).style.setProperty('color', '#5E5E5E');
        }
        for (let i = 0; i < sort.length; i++) {
            sort.item(i).style.setProperty('background-color', 'white');
            sort.item(i).style.setProperty('color', '#5E5E5E');
        }
    }
}

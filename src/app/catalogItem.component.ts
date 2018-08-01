import {OnInit, Component, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Item} from './item';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-catalog-item',
    templateUrl: './catalogItem.component.html',
    styleUrls: ['./catalogItem.component.css']
})
export class CatalogItemComponent implements OnInit {
  //  @Input() item: Item;
    item = new Item();
    additional = false;
    address: string;
    house_num: string;
    price: number;
    roomsCount: number;
    floor: number;
    floorsCount: number;
    squareTotal: number;
    mode = 'full';
    width = 450; // ширина изображения
    count = 1; // количество изображений
    position = 0;
    short: boolean;
    subscription: Subscription;
    objects: {object: Item, short: boolean, mode: string}[] = [];
    watched: any[] = [];
    constructor(route: ActivatedRoute) {
        this.subscription = route.params.subscribe(params => {
            this.item.address = params['address'];
            this.item.house_num = params['house_num'];
            this.item.price = params['price'];
            this.item.floor = params['floor'];
            this.item.floorsCount = params['floorsCount'];
            this.item.roomsCount = params['roomsCount'];
            this.item.squareTotal = params['squareTotal'];
            this.saveItem();
        });

    }
    ngOnInit() {
        this.rem();
    }
    saveItem() {
        console.log(this.watched);
        let obj: Item;
        obj = this.item;
        this.watched.push({object: obj, short: true, mode: 'full'});
        if (this.watched.length > 1) {
            for ( let i = 0 ; i <= this.watched.length; i++) {
                if (i !== (this.watched.length - 1)) {
                    this.watched[i].short = false;
                    this.watched[i].mode = 'short';
                    console.log('work!');
                    console.log(JSON.stringify(this.watched));
                } else {
                    this.watched[i].short = true;
                    this.watched[i].mode = 'full';
                }
            }
        }
    }
    rem() {
        const items = document.getElementsByClassName('catalog-item') as HTMLCollectionOf<HTMLElement>;
        const widthMobile = document.documentElement.clientWidth;
        console.log(widthMobile);
        if (widthMobile < 1200) {
            this.width = 370;
        }
        if (widthMobile < 1000) {
            this.width = 350;
        }
        if (widthMobile < 600) {
            let phone = document.getElementsByClassName('phone') as HTMLCollectionOf<HTMLElement>;
            let magnifier = document.getElementsByClassName('magnifier') as HTMLCollectionOf<HTMLElement>;
            for (let i = 0; i < phone.length; i++) {
                phone[i].style.setProperty('left', (widthMobile - 180) + 'px');
            }
            for (let i = 0; i < magnifier.length; i++) {
                magnifier[i].style.setProperty('left', ((widthMobile - 70) / 2) + 'px');
            }
        }
        if (widthMobile < 450) {
            this.width = widthMobile;
        }
        for (let i = 0; i < items.length; i++) {
            items.item(i).style.setProperty('border', 'none');
        }
        console.log(this.width);
    }
    prev() {
        const list = document.getElementById('carousel-ul') as HTMLElement;
        this.position = Math.min(this.position + this.width * this.count, 0);
        list.style.setProperty('margin-left', this.position + 'px');
    }
    next() {
        const listElems = document.getElementsByClassName('carousel-li') as HTMLCollectionOf<HTMLElement>;
        const list = document.getElementById('carousel-ul') as HTMLElement;
        this.position = Math.max(this.position - this.width * this.count, -this.width * (listElems.length - this.count));
        list.style.setProperty('margin-left', this.position + 'px');
        console.log(this.position + 'px');
    }
}

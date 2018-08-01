import { OnInit, Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Item} from './item';

@Component({
    selector: 'app-objects',
    template: `
        <div class="breadcrumbs">
            <div *ngFor="let crumb of breadcrumbs; let i = index" class="crumb" (click)="showObj(crumb);selected($event)"><div class="inner-crumb">ул. <span style="margin-right: 5px;margin-left: 3px;text-transform: uppercase">{{crumb.address}}</span><span style="margin-right: 10px">{{crumb.house_num}}</span></div><div style="width: 16px; height: 16px;"><img class="del" (click)="clear(i)" src="../assets/cross.png" width="15px" height="15px"/></div></div>
        </div>
        <div class="filters-menu-desktop">
            <div class="button1" [class.open]="filtersInnerActive && founded && !itemsActive"
                 (click)="itemsActive = true;filtersInnerActive = false; founded = true;payActive = false">
                <a>СПИСОК</a>
            </div>
            <div class="button1" [class.open]="itemsActive && founded" (click)="itemsActive = false;
            filtersInnerActive = true; founded = true;payActive = false "><a>ФИЛЬТРЫ</a></div>
            <!-- -->
            <div class="linehr"></div>
            <div class="button2" [class.open]="(founded && itemsActive) || (founded && filtersInnerActive)">
                <a style="margin-right: 7px;">Найдено:</a><span id="founded">{{items.length}}</span>
            </div>
        </div>
        <div class="main">
            <div class="inner-left">
                <div class="map" [class.open]="filtersActive">
                    <agm-map *ngIf="mapActive" class="map-inner" [latitude]="lat" [longitude]="lng" [zoom]="15" [disableDefaultUI]="true" [styles]="styles">
                       <!-- <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker> -->
                    </agm-map>
                    <app-desktop-object *ngIf="!mapActive" [item]="item" (showContactEvent)="pay($event)" (similarClicked)="similarObj($event)"></app-desktop-object>
                </div>
                <div class="filters" [class.open]="filtersActive" [class.mobile-open]="mobileFiltersActive">
                    <div class="scroll-items" [class.open]="itemsActive" *ngIf="!payActive">
                        <div *ngIf="!mobile">
                            <app-item *ngFor="let obj of items, let i = index" [item] = "obj" [mode]="'middle'" [similarOpen] = "false"
                                      (click)="getObj(i)">
                            </app-item>
                        </div>
                        <div *ngIf="mobile">
                            <app-item *ngFor="let obj of items, let i = index" [item] = "obj" [mode]="'middle'"
                                      [routerLink]="['/catalog-item', obj]"  routerLinkActive="active">
                            </app-item>
                        </div>
                    </div>
                    <app-filters-box *ngIf="!payActive" id="filters-box" [class.open]="filtersInnerActive"></app-filters-box>
                    <div *ngIf="payActive"><app-login [otherComponent]="false" style="border-left: 1px solid #9E9E9E"></app-login></div>
                </div>
            </div>
        </div>
    `, styles: [`
        .inner-left{
            display: flex;
            overflow-y: scroll;
            height: 100%;
        }
        .del{
            display: none;
        }
        .crumb:hover .del{
            display: block;
        }
        .breadcrumbs{
            display: flex;
            position: fixed;
            right: 450px;
            top: 130px;
            height: 65px;
            align-items: center;
            font-family: Cadillac, sans-serif;
            font-size: 14px;
            color: white;
        }
        .breadcrumbs div{
            margin-right: 7px;
        }
        .crumb, .inner-crumb{
            height: 20px;
            display: flex;
        }
        .crumb:hover{
            border-bottom: 1px #fdfdfd solid;
        }
        .linehr{
            flex: 0 0 1%;
            height: 50px;
            margin-top: 7px;
            border-left: #404040 1px solid;
            width: 2px;
        }
        .main{
            display: flex;
            height: max-content;
            width: 100vw;
            min-height: calc(100vh - 195px);
            position: fixed;
            left: 0;
            top: 195px;
        }
        .map-inner{
            margin: 0;
            padding: 0;
            border: 0;
            height: calc(100vh - 180px);
            width: calc(100vw - 450px);
            min-height: calc(100vh - 203px);
        }
        .filters{
            height: max-content;
            min-height: calc(100vh - 195px);
            width: 450px;
            display: flex;
            flex-direction: column;
            position: fixed;
            right: 0;
            top: 195px;
        }
        .filters-menu-desktop{
            display: flex;
            position: fixed;
            right: 0;
            top: 130px;
            width: 450px;
            height: 65px;
        }
        .filters-menu-desktop .button1,  .filters-menu-desktop .button2{
            display: none;
        }
        .filters-menu-desktop .button1.open{
            border-left: 1px solid #404040;
            flex: 0 0 50%;
            transition: 0.4s;
        }
        .filters-menu-desktop .button2.open{
            flex: 0 0 49%;
        }
        .filters-menu-desktop .button1.open, .filters-menu-desktop .button2.open{
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Cadillac, sans-serif;
            font-size: 14px;
            color: white;
        }
        .button1:hover{
            color: white;
            background-color: #202b2f;
        }
        app-filters-box{
            display: none;
        }
        app-filters-box.open{
            display: flex;
            flex-direction: column;
            background-color: white;
            overflow-y: scroll;
            height: 100%;
        }
        .scroll-items{
            display: none;
        }
        .scroll-items.open{
            display: block;
            overflow-y: scroll;
            height: 100%;
        }
        app-filters-box::-webkit-scrollbar { width: 0;height: 0; }
        .scroll-items.open::-webkit-scrollbar { width: 0;height: 0; }
        .inner-left::-webkit-scrollbar { width: 0;height: 0; }

        @media all and (max-width: 1520px){
            .filters-menu-desktop{
                width: 370px;
            }
            .map-inner{
                width: calc(100vw - 370px);
            }
            .filters{
                width: 370px;
            }
            .filters-menu-desktop{
                width: 370px;
            }
            .breadcrumbs{
                right: 370px;
            }
            .inner-left{
                height: 100%;
            }
        }
        @media all and (max-width: 1200px){
            .filters-menu-desktop{
                width: 350px;
            }
            .map-inner{
                width: calc(100vw - 350px);
            }
            .filters{
                width: 350px;
            }
            .filters-menu-desktop{
                width: 350px;
            }
            .breadcrumbs{
                right: 350px;
            }
        }
        @media all and (max-width: 1000px){
            .filters.mobile-open{
                display: flex;
                justify-content: center;
                background-color: white;
                width: 350px;
            }
            .scroll-items.open{
                padding: 0;
                height: 100%;
            }
            .filters-menu-desktop{
                display: none;
            }
            .main{
                min-height: calc(100vh - 60px);
                top: 0;
            }
            .map-inner{
                height: calc(100vh - 60px);
            }
            .filters{
                top: 0;
                min-height: calc(100% - 60px);
            }
        }
        @media all and (max-width: 450px) {
            .map{
                display: none;
            }
            .filters, .filters.mobile-open{
                width: 100vw;
            }
            .scroll-items.open{
                width: 100vw;
                margin-top: 0;
                margin-bottom: 60px;
            }
        }
        `]
})
export class ObjectsComponent implements OnInit {
    items: Item[] = [];
    item: Item;
    itemsActive = true;
    filtersInnerActive = true;
    founded = false;
    filtersActive: boolean =  true;
    mobileFiltersActive: boolean = true;
    mapActive = true;
    mobile = false;
    breadcrumbs: Item[] = [];
    payActive = false;
    lat = 48.4862268;
    lng = 135.0826369;
    styles = [
        {
            "featureType": "landscape",
            "stylers": [
                {
                    "color": "#f0f0f0"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#cceab0"
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "water",
            "stylers": [
                {
                    "color": "#87c2f8"
                }
            ]
        }
    ];
    constructor(route: ActivatedRoute) {
        route.params.forEach((urlParams) => {
            if (urlParams['itemsActive'] === "true") {
                this.itemsActive = true;
            } else {
                this.itemsActive = false;
            }
            if (urlParams['filtersInnerActive'] === "true") {
                this.filtersInnerActive = true;
            } else {
                this.filtersInnerActive = false;
            }
            if (urlParams['founded'] === "true") {
                this.founded = true;
            } else {
                this.founded = false;
            }
        });
    }

    ngOnInit() {
        const widthMobile = document.documentElement.clientWidth;
        const heightMobile = document.documentElement.clientHeight;
        let scrollItems = document.getElementsByClassName('scroll-items open')  as HTMLCollectionOf<HTMLElement>;
        let filtersBox = document.getElementsByClassName('app-filters-box')  as HTMLCollectionOf<HTMLElement>;
        if (widthMobile < 1000) {
            for (let i = 0; i < scrollItems.length; i++) {
                scrollItems.item(i).style.setProperty('height', heightMobile - 60 + 'px');
            }
            for (let i = 0; i < filtersBox.length; i++) {
                filtersBox.item(i).style.setProperty('height', heightMobile - 60 + 'px');
            }
        }
        if (widthMobile < 600) { this.mobile = true; }

        this.items.push(new Item('Калинина', '71А', 26000, 3, 7, 10, 45));
        this.items.push(new Item('Ленина', '5', 20000, 5, 5, 10, 40.3));
        this.items.push(new Item('Руднева', '79', 23500, 3, 6, 9, 48));
        this.items.push(new Item('Станционная', '13', 17000, 2, 4, 5, 33));
    }
    selected(el: MouseEvent) {
        let items =  document.getElementsByClassName('inner-crumb')  as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < items.length; i++) {
            items.item(i).style.removeProperty('border-bottom');
        }
        (<HTMLElement>el.currentTarget).style.setProperty('border-bottom', '1px #fdfdfd solid');
    }
    lastObj() {
        let items =  document.getElementsByClassName('inner-crumb')  as HTMLCollectionOf<HTMLElement>;
        for (let i = 0; i < items.length; i++) {
            console.log( items.item(i));
            items.item(i).style.removeProperty('border-bottom');
        }
        items.item(items.length - 1).style.setProperty('border-bottom', '1px #fdfdfd solid');
    }
    getObj(index) {
        let check = 0;
        this.item = this.items[index];
        if (this.breadcrumbs.length !== 0) {
            for (let i = 0; i < this.breadcrumbs.length; i++) {
                if (this.item === this.breadcrumbs[i]) {
                    check++;
                }
            }
            if (check === 0) { this.breadcrumbs.push(this.item); /* this.lastObj(); */ }
        } else { this.breadcrumbs.push(this.item); /* this.lastObj(); */ }
       // console.log(this.breadcrumbs.length);
        this.mapActive = false;
    }
    showObj(crumb) {
        this.item = crumb;
    }
    clear(index) {
        this.breadcrumbs.splice(index, 1);
        if (this.breadcrumbs.length === 0) {
            this.mapActive = true;
        }
    }
    pay(check) {
        this.payActive = check;
        this.filtersInnerActive = true;
        this.founded = true;
        this.itemsActive = false;
    }
    similarObj(obj: Item) {
        let check = 0;
        console.log(obj);
        this.item = obj;
        for (let i = 0; i < this.breadcrumbs.length; i++) {
            if (obj === this.breadcrumbs[i]) {
                check++;
            }
        }
        if (check === 0) { this.breadcrumbs.push(this.item); }
       // console.log(this.breadcrumbs.length);
    }
}

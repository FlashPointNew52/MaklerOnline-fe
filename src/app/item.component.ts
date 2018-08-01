import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Item} from './item';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-item',
    template: `
        <div class="catalog-item">
            <div class="top-block" *ngIf="(mode == 'short') || (mode == 'middle') || (mode == 'full')" [class.short]="(mode == 'short')">
                <div class="street"><span>ул. {{item.address}} {{item.house_num}}</span></div>
                <div class="price"><span style="margin-right: 8px">₽</span><span>{{item.price}}/мес.</span></div>
            </div>
         <div *ngIf="(mode == 'middle') || (mode =='full')">
            <div class="photo-block">
                <div class="magnifier"><img src="../assets/лупа.png"></div>
                <div class="user-info">
                    <div class="user-photo">
                        <img src="../assets/photo.PNG" width="40px" height="40px"/>
                    </div>
                    <div class="user">
                        <span>Иванов Иван</span>
                        <span>info@mail.ru</span>
                    </div>
                    <div class="rating">
                        <div class="rating_block" style="margin-left: 15px">
                            <input name="rating" value="5" id="rating_5" type="radio" />
                            <label for="rating_5" class="label_rating"></label>

                            <input name="rating" value="4" id="rating_4" type="radio" />
                            <label for="rating_4" class="label_rating"></label>

                            <input name="rating" value="3" id="rating_3" type="radio" />
                            <label for="rating_3" class="label_rating"></label>

                            <input name="rating" value="2" id="rating_2" type="radio" />
                            <label for="rating_2" class="label_rating"></label>

                            <input name="rating" value="1" id="rating_1" type="radio" />
                            <label for="rating_1" class="label_rating"></label>
                        </div>
                        <span style="width: 30px; font-size: 14px">4,25</span>
                    </div>
                </div>
            </div>
            <div class="bottom-block">
                <div class="topPart">
                    <div class="info">
                        <div class="rooms"><span>{{item.roomsCount}} комнатная квартира</span></div>
                        <div><span>{{item.floor}}/{{item.floorsCount}} этаж </span><span> {{item.squareTotal}}кв.м</span></div>
                        <div>Без комиссии</div>
                    </div>
                    <div class="buttons">
                    <div class="phone">
                        <a>Показать контакт</a>
                    </div>
                    </div>
                </div>
            </div>
         </div>
            <div *ngIf="(mode == 'full')">
                        <div class="additional">
                            <div class="inner-add-top">
                                <span>ДОПОЛНИТЕЛЬНОЕ ОПИСАНИЕ</span>
                            </div>
                            <div class="line"></div>
                            <div class="additional-block top">
                                <p>Уютная двушка с отличным ремонтом в 150 метрах от м. Молодежная. Полностью оборудована мебелью и техникой, всё в отличном состоянии.</p>

                                <div class="bottomPart">
                                    <img src="../assets/1.png">
                                    <img src="../assets/2.png">
                                    <img src="../assets/3.png">
                                    <img src="../assets/4.png">
                                    <img src="../assets/5.png">
                                    <img src="../assets/6.png">
                                </div>
                            </div>
                            <div class="map-mobile">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16
        9316.54631581446!2d134.97334583897464!3d48.46475950516245!2m3
        !1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5efae9c6b0368ac9%3A0xfa
        97bc0e5fba7f50!2z0KXQsNCx0LDRgNC-0LLRgdC6LCDQpdCw0LHQsNGA0L7Q
        stGB0LrQuNC5INC60YDQsNC5!5e0!3m2!1sru!2sru!4v1530008713402" class="map-inner"></iframe>
                            </div>
                            <div class="nearby-block">
                                <span >ЧТО РЯДОМ</span>
                                <span style="font-size: 12px;color: #42494c;">Объекты инфраструктуры, развлечения, питания...</span>
                            </div>
                            <div class="line"></div>
                            <div class="additional-nearby-block">
                                <div class="inner-additional">
                                    <div class="nearby">
                                        <span>Центральный продовольственный рынок </span>
                                        <span class="bottom-text">Рынок · улица Льва Толстого, 19</span>
                                    </div>
                                    <div style="flex: 0 0 10%">
                                        <span>50м</span>
                                    </div>
                                </div>
                                <div class="inner-additional">
                                    <div class="nearby">
                                        <span>Железнодорожный вокзал Хабаровск-1</span>
                                        <span class="bottom-text">Железнодорожный вокзал · Ленинградская улица, 58</span>
                                    </div>
                                    <div style="flex: 0 0 10%">
                                        <span>500м</span>
                                    </div>
                                </div>
                                <div class="inner-additional">
                                    <div class="nearby">
                                        <span>Площадь Ленина</span>
                                        <span class="bottom-text">Хабаровск, Россия</span>
                                    </div>
                                    <div style="flex: 0 0 10%">
                                        <span>300м</span>
                                    </div>
                                </div>
                                <div class="inner-additional">
                                    <div class="nearby">
                                        <span>Парк Динамо</span>
                                        <span class="bottom-text">Парк культуры и отдыха · Россия, Хабаровск, парк Динамо</span>
                                    </div>
                                    <div style="flex: 0 0 10%">
                                        <span>300м</span>
                                    </div>
                                </div>
                                <div class="inner-additional">
                                    <div class="nearby">
                                        <span>Кинотеатр Дружба</span>
                                        <span class="bottom-text">Кинотеатр · Амурский бульвар, 56А</span>
                                    </div>
                                    <div style="flex: 0 0 10%">
                                        <span>400м</span>
                                    </div>
                                </div>
                                <div class="inner-additional">
                                    <div class="nearby">
                                        <span>Краевой музыкальный театр </span>
                                        <span class="bottom-text">Театр · улица Карла Маркса, 64</span>
                                    </div>
                                    <div style="flex: 0 0 10%">
                                        <span>300м</span>
                                    </div>
                                </div>
                            </div>
                            <div class="additional-rating-block">
                                <div class="inner-add-top">
                                    <span>РЕЙТИНГ ПРИВЛЕКАТЕЛЬНОСТИ</span>
                                </div>
                                <div class="line"></div>
                                <app-rating style="padding: 20px 20px 40px 30px;"></app-rating>
                            </div>
                            <div class="similar-objects">
                                <span style="flex: 0 0 calc(90% - 30px);padding-left: 30px;">ПОХОЖИЕ ОБЪЕКТЫ РЯДОМ</span>
                                <img src="../assets/plus.png" style="float: right" (click)="similar =! similar">
                            </div>
                            <div class="carousel" [class.open]="similar" id="carousel">
                                <div class="arrow left" (click)="prev()"><img src="../assets/arrowl.png"></div>
                                <div class="objects">
                                    <ul id="carousel-ul">
                                        <li class="carousel-li" *ngFor="let obj of items, let i = index"  [routerLink]="['/catalog-item', obj]"  routerLinkActive="active"><app-item class="app"  [item] = "obj" [mode]="'middle'"
                                        >
                                        </app-item></li>
                                    </ul>
                                </div>
                                <div class="arrow right" (click)="next()"><img src="../assets/arrowr.png"></div>
                            </div>
                            <div class="similar-objects">
                                <span style="flex: 0 0 calc(90% - 30px);padding-left: 30px;">ОФОРМИТЬ РАССЫЛКУ</span>
                                <img src="../assets/plus.png" style="float: right" (click)="openNews = !openNews">
                            </div>
                            <div class="news" [class.open]="openNews">
                                <p class="add-text">Не нашли ,что искали? Нет времени на поиск? Оформите подписку, и получайте объекты на Вашу почту.</p>
                                <input type="text" value="Введите ваш e-mail" class="email">
                                <input type="button" value="ОФОРМИТЬ ПОДПИСКУ" class="news-button">
                            </div>
                            <div class="similar-objects">
                                <span style="flex: 0 0 calc(90% - 30px);padding-left: 30px;">НАНЯТЬ ПЕРСОНАЛЬНОГО МЕНЕДЖЕРА</span>
                                <img src="../assets/plus.png" style="float: right" (click)="manager = !manager">
                            </div>
                            <div class="news" [class.open]="manager">
                                <p class="add-text">Заказывая эту услугу,вы нанимаеете персонального менеджера.Который найдет нужные вам варианты,договорится  о просмотре объектов в удобное Вам время,,и проконтролирует юридическую чистоту заключения договора найма жилья.Также Вы получите отчет о проделанной работе,на Вашу почту и в личный кабинет сайта.</p>
                                <input type="button" value="НАНЯТЬ ПЕРСОНАЛЬНОГО МЕНЕДЖЕРА" class="news-button">
                            </div>
                            <div class="similar-objects">
                                <span style="flex: 0 0 calc(90% - 30px);padding-left: 30px;">НАНЯТЬ РИЭЛТОРА</span>
                                <img src="../assets/plus.png" style="float: right" (click)="realtor =! realtor">
                            </div>
                            <div class="news" [class.open]="realtor">
                                <p class="add-text">Заказывая эту услугу,вы нанимаеете персонального менеджера.Который найдет нужные вам варианты,договорится  о просмотре объектов в удобное Вам время,,и проконтролирует юридическую чистоту заключения договора найма жилья.Также Вы получите отчет о проделанной работе,на Вашу почту и в личный кабинет сайта.</p>
                                <input type="button" value="НАНЯТЬ РИЭЛТОРА" class="news-button">
                            </div>
                            <div class="similar-objects">
                                <span style="flex: 0 0 calc(90% - 30px);padding-left: 30px;">ЗАКАЗАТЬ ВЫПИСКУ С ЕГРН</span>
                                <img src="../assets/plus.png" style="float: right" (click)="egrn =! egrn">
                            </div>
                            <div class="news" [class.open]="egrn">
                                <p class="add-text">Заказывая эту услугу,вы нанимаеете персонального менеджера.Который найдет нужные вам варианты,договорится  о просмотре объектов в удобное Вам время,,и проконтролирует юридическую чистоту заключения договора найма жилья.Также Вы получите отчет о проделанной работе,на Вашу почту и в личный кабинет сайта.</p>
                                <input type="button" value="ЗАКАЗАТЬ ОБЩИЕ СВЕДЕНИЯ ОБ ОБЪЕКТЕ" class="news-button">
                                <input type="button" value="ЗАКАЗАТЬ ПЕРЕХОД ПРАВА СОБСТВЕННОСТИ" class="news-button">
                            </div>
                        </div>
            </div>
        </div>
    `, styles: [`
        .user{
            display: flex;
            flex-direction: column;
            flex: 0 0 40%;
        }
        .user-info{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 10px;
            display: flex;
            align-items: center;
            height: 55px;
            width: 100%;
            position: relative;
            bottom: -173px;
            left: 0;
            background-color: rgba(38,47,50,0.85);
            color: white;
        }
        .user-photo{
            width: 40px;
            height: 40px;
            margin: 0 10px;
            flex: 0 0 10%;
        }
        .rating{
            display: flex;
            align-items: center;
        }
        .rating_block{
            width: 85px;
            height: 15px;
            margin-right: 30px;
        }
        .rating_block input{
            margin-right: 3px;
        }
        .rating_block input[type="radio"]{
            display: none;
        }
        .label_rating{
            float: right;
            display: block;
            width: 15px;
            height: 15px;
            background: url("../assets/staruser.png") no-repeat 50% 0;
            cursor: pointer;
            margin-right: 2px;
        }
        .rating_block .label_rating:hover,
        .rating_block .label_rating:hover ~ .label_rating,
        .rating_block input[type="radio"]:checked ~ .label_rating {
            background-position: 50% -15px;
        }
        .catalog-item{
            width: 450px;
            background-color: white;
            border-bottom: 1px #bdc0c1 solid;
        }
        .inner-add-top{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            color: #5E5E5E;
            padding: 16px 0 30px 30px;
            font-size: 16px;
        }
        .magnifier{
            display: none;
            position: relative;
            top: 80px;
            left: 195px;
            z-index: 1;
            width: 70px;
            height: 70px;
        }
        .top-block{
            height: 60px;
            width: calc(100% - 40px);
            display: flex;
            padding-left: 30px;
        }
        .top-block.short{
            background-color: #202b2f;
            color: white;
        }
        .street{
            font-size: 14px;
            flex: 0 0 60%;
            display: flex;
            align-items: center;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            color: #3b4345;
        }
        .price{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 20px;
            flex: 0 0 calc(40% - 15px);
            display: flex;
            align-items: center;
            color: #3b4345;
        }
        .price img{
            width: 20px;
            height: 20px;
            margin-right: 15px;
        }
        .photo-block{
            height: 228px;
            width: 450px;
            background: url("../assets/interer-mini.png");
            background-size: 100%;
        }
        .phone{
            flex: 0 0 40%;
            height: 34px;
            display: flex;
            width: 180px;
            align-items: center;
            justify-content: center;
            font-family: Cadillac, sans-serif;
            font-size: 12px;
            background-color: #db5151;
            color: white;
            margin-top: 14px;
            letter-spacing: 0.05em;
        }
        .bottom-block{
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        .info{
            display: flex;
            flex-direction: column;
            flex: 0 0 55%;
            font-size: 12px;
            color: #5E5E5E;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            line-height: 20px;
        }
        .rooms{
            font-weight: bold;
        }
        .roundButton{
            margin-right: 10px;
            outline: none;
            width: 30px;
            height: 30px;
            border-radius: 15px;
            border: #5e5e5e 1px solid;
            background-color: white;
        }
        .topPart{
            display: flex;
            margin: 10px 0 15px 30px;
        }
        .phone-icon{
            background-color: white;
            height: 22px;
            width: 22px;
            border-radius: 11px;
            margin: 0 10px 0 10px;
        }
        .phone-icon img{
            width: 20px;
            height: 20px;
            margin: 1px 0 0 1px;
        }
        .map-inner{
            display: none;
            margin: 0;
            padding: 0;
            border: 0;
            height: 30vh;
            width: 100%;
        }
        .bottomPart{
            display: flex;
            margin-left: 25px;
        }
        .bottomPart img{
            padding: 0 10px;
            width: 34px;
            height: 34px;
            border-left: 1px solid #cacaca;
        }
        .additional{
            display: flex;
            flex-direction: column;
        }
        .additional-block{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 12px;
            padding: 30px 40px;
            border-bottom: 1px solid white;
        }
        .additional-block.top{
            background-color: white;
            color: #5E5E5E;
            padding: 10px 30px;
        }
        .additional-nearby-block{
            color: #5E5E5E;
            background-color: white;
            padding: 20px 30px 0 30px;
        }
        .nearby-block{
            font-family: Cadillac, sans-serif;
            font-size: 16px;
            letter-spacing: 0.05em;
            display: flex;
            flex-direction: column;
            padding: 16px 0 16px 30px;
            color: #5e5e5e;
        }
        .similar-objects{
            background-color: #ced0d1;
            font-size: 16px;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            height: 60px;
            display: flex;
            align-items: center;
            color: #5e5e5e;
            border-bottom: 1px solid #a2a0a0;
        }
        .news{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 12px;
            padding: 20px 30px;
            display: none;
            flex-direction: column;
            animation:fade ease-in 0.3s;
            transition: .3s;
        }
        .news.open{
            display: flex;
            -webkit-animation:fade ease-in 0.3s;
            animation:fade ease-in 0.3s;
            transition: .3s;
        }
        .nearby{
            flex: 0 0 90%;
            display: flex;
            flex-direction: column;
        }
        .bottom-text{
            font-size: 11px;
            color: #42494c;
        }
        .inner-additional{
            display: flex;
            margin-bottom: 15px;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 12px;
        }
        .additional-block span, .additional-rating-block span{
            margin-bottom: 30px;
        }
        .additional-rating-block{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 12px;
            color: #5E5E5E;
            display: flex;
            flex-direction: column;
        }
        .add-text{
            font-size: 12px;
            width: 350px;
            color: #5E5E5E;
            padding-bottom: 10px;
        }
        .email{
            -webkit-appearance: none;
            border-radius: 0;
            padding: 0;
            font-family: Cadillac, cursive;
            letter-spacing: 0.05em;
            font-size: 12px;
            background-color: white;
            color: #5E5E5E;
            border: 1px solid #c0c0c0;
            outline: none;
            margin-right: 10px;
            width: 385px;
            height: 40px;
            margin-bottom: 10px;
            text-align: center;
            transition: 0.4s;
        }

        .news-button{
            -webkit-appearance: none;
            border-radius: 0;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 12px;
            background-color: white;
            color: #5E5E5E;
            outline: none;
            border: 1px solid #c0c0c0;
            width: 385px;
            height: 40px;
            margin-bottom: 10px;
            transition: 0.4s;
        }
        .news-button:hover{
            background-color: #202b2f;
            color: white;
        }
        .realtor{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 10px;
            color: #989898;
            width: 190px;
            padding-left: 160px;
        }
        .carousel{
            width: 450px;
            height: 372px;
            display: none;
            transform-origin: 0 0;
        }
        .carousel.open{
            display: flex;
            -webkit-animation:fade ease-in 0.3s;
            animation:fade ease-in 0.3s;
        }
        .carousel ul{
            width: 9999px;
            margin: 0;
            padding: 0;
            list-style: none;
            transition: margin-left 250ms;
            font-size: 0;
        }
        .carousel li{
            display: inline-block;
        }
        .app{
            display: block;
            width: 450px;
        }
        .arrow {
            padding: 0;
            display: block;
        }
        .arrow.left{
            width: 44px;
            height: 44px;
            position: relative;
            left: 10px;
            top: 160px;
            z-index: 1;
        }
        .objects{
            overflow: hidden;
            margin-left: -27px;
            flex: 0 0 100%;
        }
        .arrow.right{
            padding-right: 17px;
            position: relative;
            top: 160px;
            right: 44px;
            width: 44px;
            height: 44px;
            float: right;
            z-index: 1;
        }
        .arrow:focus {
            outline: none;
        }
        .map-mobile{
            display: none;
        }
        .line{
            border-bottom: 1px solid #cacaca;
            width: auto;
            margin-left: 15px;
            margin-right: 15px;
        }
        @media all and (max-width: 1520px){
            .photo-block, .catalog-item, .carousel app-item{
                width: 370px;
            }
        }
        @media all and (max-width: 1200px){
            .photo-block{
                background-size: auto 100%;
                width: 350px;
            }
            .street{
                flex: 0 0 50%;
            }
            .price{
                flex: 0 0 calc(50% - 15px);
                font-size: 17px;
            }
            .phone{
                left: 170px;
            }
            .magnifier{
                left: 155px;
            }
            .rating_block{
                margin-right: 15px;
            }
            .catalog-item{
                width: 350px;
            }
            .user{
                flex: 0 0 35%;
            }
            .carousel app-item{
                width: 350px;
            }
        }
        @media all and (max-width: 1000px){
            .rating_block{
                margin-right: 10px;
            }
            .label_rating{
                margin-right: 1px;
            }
            .top-block{
                padding-left: 25px;
                width: calc(100% - 25px);
            }
            .topPart{
                margin: 10px 0 15px 15px;
            }
            .roundButton{
                margin-right: 6px;
            }
            .photo-block{
                background-size: auto 100%;
            }
            .street{
                margin-left: 0;
            }
        }
        @media all and (max-width: 600px){
            .photo-block{
                width: 100vw;
                background: url("../assets/interer-mini.png") center;
                background-size: 100%;
            }
            .carousel{
                width: 100vw;
            }
            .price{
                padding: 0;
            }
            .street{
                margin-left: 0;
            }
            .top-block{
                padding-left: 25px;
            }
            .catalog-item{
                width: 100vw;
            }
            .photo-block{
                background-size: 100vw 100%;
            }
            .topPart{
                margin: 10px 0 15px 25px;
            }
            .bottomPart{
                margin-left: 25px;
            }
            .bottomPart img{
                padding: 0 6px;
            }
            .magnifier{
                display: block;
            }
            .user-info{
                bottom: -70px;
            }
            .phone{
                top: -70px;
            }
            .app{
                width: 100vw;
            }
            .add-text, .email{
                width: auto;
            }
            .email{
                margin-right: 0;
            }
        }
        `]
})
export class ItemComponent implements OnInit {
    @Input() item: Item;
    @Input() mode: string;
    @Input() similarOpen: any;
    similar = false;
    openNews = false;
    manager = false;
    realtor = false;
    egrn = false;
    width = 450; // ширина изображения
    count = 1; // количество изображений
    position = 0;
    items: Item[] = [];
    short: boolean;
   // watched: {object: Item, short: boolean}[] = [];
    watched: any[] = [];
    @Output('getStreetEvent')  streetItem = new EventEmitter<Item>();

    ngOnInit() {
       // console.log(this.similarOpen);
        // console.log(typeof this.similarOpen);
        let catalogItem = document.getElementsByClassName('catalog-item') as HTMLCollectionOf<HTMLElement>;
        let photoBlock = document.getElementsByClassName('photo-block') as HTMLCollectionOf<HTMLElement>;
        let app = document.getElementsByClassName('app') as HTMLCollectionOf<HTMLElement>;
        let phone = document.getElementsByClassName('phone') as HTMLCollectionOf<HTMLElement>;
        let user = document.getElementsByClassName('user') as HTMLCollectionOf<HTMLElement>;
        let street = document.getElementsByClassName('street') as HTMLCollectionOf<HTMLElement>;
        let price = document.getElementsByClassName('price') as HTMLCollectionOf<HTMLElement>;
        if ((this.similarOpen === "true") || (this.similarOpen === true)) {
            for (let i = 0; i < catalogItem.length; i++) {
                catalogItem[i].style.setProperty('width', '370px');
            }
            for (let i = 0; i < photoBlock.length; i++) {
                photoBlock[i].style.setProperty('width', '370px');
            }
            for (let i = 0; i < app.length; i++) {
                app[i].style.setProperty('width', '370px');
            }
            for (let i = 0; i < phone.length; i++) {
                phone[i].style.setProperty('width', '145px');
            }
            for (let i = 0; i < user.length; i++) {
                user[i].style.setProperty('flex', '0 0 30%');
            }
            for (let i = 0; i < street.length; i++) {
                street[i].style.setProperty('flex', '0 0 50%');
            }
            for (let i = 0; i < price.length; i++) {
                price[i].style.setProperty('flex', '0 0 calc(50% - 15px)');
            }
        } else if (this.similarOpen === false) {
            for (let i = 0; i < catalogItem.length; i++) {
                catalogItem[i].style.setProperty('width', '450px');
            }
            for (let i = 0; i < photoBlock.length; i++) {
                photoBlock[i].style.setProperty('width', '450px');
            }
            for (let i = 0; i < app.length; i++) {
                app[i].style.setProperty('width', '450px');
            }
            for (let i = 0; i < phone.length; i++) {
                phone[i].style.setProperty('width', '180px');
            }
            for (let i = 0; i < user.length; i++) {
                user[i].style.setProperty('flex', '0 0 40%');
            }
            for (let i = 0; i < street.length; i++) {
                street[i].style.setProperty('flex', '0 0 60%');
            }
            for (let i = 0; i < price.length; i++) {
                price[i].style.setProperty('flex', '0 0 calc(40% - 15px)');
            }
        }
        this.streetItem.next(this.item);
        const widthMobile = document.documentElement.clientWidth;
        if (widthMobile < 600) {
            let magnifier = document.getElementsByClassName('magnifier') as HTMLCollectionOf<HTMLElement>;
            for (let i = 0; i < phone.length; i++) {
                phone[i].style.setProperty('left', (widthMobile - 180) + 'px');
            }
            for (let i = 0; i < magnifier.length; i++) {
                magnifier[i].style.setProperty('left', ((widthMobile - 70) / 2) + 'px');
            }
            this.width = widthMobile;
        }
        this.items.push(new Item('Калинина', '71А', 26000, 3, 7, 10, 45));
        this.items.push(new Item('Ленина', '5', 2000, 5, 5, 10, 40.3));
        this.items.push(new Item('Калинина', '71А', 26000, 3, 7, 10, 45));
        this.items.push(new Item('Ленина', '5', 2000, 5, 5, 10, 40.3));
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
    }
}

import {OnInit, OnChanges, AfterViewInit, Component, Input, Output, EventEmitter} from '@angular/core';
import {Item} from './item';
import { AgmCoreModule } from '@agm/core';
import { } from '@types/googlemaps';

@Component({
    selector: 'app-desktop-object',
    template: `
        <div class="photo-map-block" (window:resize) = "onResize()">
            <div class="photo-block">
                <div class="photoGallery">
                        <div class="photos">
                            <ul id="photoGallery-ul">
                                <li class="photoGallery-li" *ngFor="let img of photos"><div class="photo-img" (window:resize) = "onResize()"><img class="inner-img" src="{{img.image}}"/></div></li>
                            </ul>
                        </div>
               <!--     <div class="photo-carousel">
                        <div class="arrow photo-left" (click)="prevImg()"><img src="../assets/arrowl.png"></div>
                        <div style="margin-left: 15px; margin-right: 15px;z-index: 1;">{{number}}/{{photos.length}}</div>
                        <div class="arrow photo-right" (click)="nextImg()"><img src="../assets/arrowr.png"></div>
                    </div> -->
                </div>
                <div class="user-info" (window:resize) = "onResize()">
                    <div class="user-photo">
                        <div style="display: flex; justify-content: center;">
                            <img src="../assets/photo.PNG" width="43px" height="43px"/>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; flex: 0 0 10%;">
                        <span>Иванов Иван</span>
                        <span>info@mail.ru</span>
                    </div>
                    <div class="rating">
                        <div class="rating_block" style="margin-left: 10px">
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
                    <div class="photo-carousel1">
                        <div class="arrow photo-left" (click)="prevImg()"><img src="../assets/arrowl.png"></div>
                        <div style="margin-left: 15px; margin-right: 15px;z-index: 1;">{{number}}/{{photos.length}}</div>
                        <div class="arrow photo-right" (click)="nextImg()"><img src="../assets/arrowr.png"></div>
                    </div>
                </div>
            </div>
            <div class="map">
                <agm-map class="map-inner" [latitude]="lat" [longitude]="lng" [zoom]="15" [disableDefaultUI]="true" [styles]="styles">
                    <!-- <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker> -->
                </agm-map>
                <div class="map-buttons">
                    <div class="map-button"><div class="map-button-word">КАРТА</div></div>
                    <div class="map-button-line"></div>
                    <div class="map-button"><div class="map-button-word">ПАНОРАМА</div></div>
                    <div class="map-button-line"></div>
                    <div class="map-button"><div class="map-button-word">МАРШРУТЫ</div></div>
                </div>
            </div>
        </div>

        <!-- дополнительные три блока -->
        <div class="additional" [class.tablet]="width < 1425">
            <div style="display: flex; flex-direction: column">
                <div class="two-blocks" [class.tablet]="width < 1425">
                    <div [class.block]="width > 1545"> <!-- первый блок -->
                        <div class="inner-add-top">
                            <span>ОПИСАНИЕ ОБЪЕКТА</span>
                        </div>
                        <div class="line"></div>
                        <div class="inner-additional-block">
                            <div class="test">
                                <div class="address-block">
                                    <div class="price"><!-- <img src="../assets/ruble.png"> --> <span style="margin-right: 8px">₽</span> <span>{{item.price}}</span><span style="font-size: 14px">/мес.</span></div>
                                     <div class="street">
                                         <span>ул.</span> <span style="text-transform: uppercase;margin-left:5px">{{item.address}}</span> <span style="margin-left:5px">{{item.house_num}}</span>
                                     </div>
                                     <span style="color: #252f32;; font-size: 12px">г.Хабаровск, Центральный район</span>
                                </div>
                                <div class="info">
                                    <div class="rooms"><span>{{item.roomsCount}} комнатная квартира</span></div>
                                    <div><span>{{item.floor}}/{{item.floorsCount}} этаж </span><span> {{item.squareTotal}}кв.м</span></div>
                                    <div>Без комиссии</div>
                                </div>
                                <div class="description">
                                    <p>Уютная двушка с отличным ремонтом в 150 метрах от м. Молодежная. Полностью оборудована мебелью и техникой, всё в отличном состоянии.</p>
                                    <p style="margin-top: 30px">Можно с детьми,Можно с животными, Можно курить, Можно
                                        под мероприятия,Можно на месяц</p>
                                </div>
                            </div>
                            <div class="line add" style="margin-left: 30px"></div>
                            <div class="button-block">
                                <div class="button-inner-text">"ПЛАТИТЕ ТОЛЬКО ЗА АРЕНДУ"</div>
                                <div class="button-inner-line"></div>
                                <p>Мы проверяем каждое объявление и гарантируем, что объект сдается без комиссии. </p>
                                <input type="button" value="ПОКАЗАТЬ КОНТАКТЫ" class="news-button" (click)="showContact()">
                            </div>
                        </div>
                    </div>
                    <div [class.block]="width > 1545"> <!-- второй блок -->
                        <div class="line top"></div>
                        <div class="inner-add-top">
                            <span>РЕЙТИНГ ПРИВЛЕКАТЕЛЬНОСТИ</span>
                        </div>
                        <div class="line"></div>
                        <div class="inner-additional-block additional-rating-block">
                            <div class="test">
                                <div style="margin: 0 0 30px 30px;padding-top: 5px;">
                                    <app-rating></app-rating>
                                </div>
                            </div>
                            <div class="line add"></div>
                            <div class="button-block">
                                <div class="button-inner-text">"ДОБАВЬТЕ ОБЪЕКТ В ИЗБРАННОЕ"</div>
                                <div class="button-inner-line"></div>
                                <p>Вы всегда можете просмотреть объекты из множества интересных Вам, и выбрать то что нужно. </p>
                                <input type="button" value="ДОБАВИТЬ В ИЗБРАННОЕ" class="news-button">
                            </div>
                        </div>
                    </div> <!-- конец второго блока -->
                    <div [class.block]="width > 1545"> <!-- третий блок -->
                        <div class="line top"></div>
                        <div class="nearby-block">
                            <span style="color: #3b4345">ЧТО РЯДОМ</span>
                            <span style="font-size: 12px;color: #4b4b4b">Объекты инфраструктуры, развлечения, питания...</span>
                        </div>
                        <div class="line"></div>
                        <div class="inner-additional-block plus">
                            <div class="test">
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
                            </div>
                            <div class="line add" style="margin-right: 30px"></div>
                            <div class="nearby-button-block">
                                <div class="button-block">
                                    <div class="button-inner-text">"ИНФОРМАЦИЯ ИЗ ГОСУДАРСТВЕННОГО  РЕЕСТРА"</div>
                                    <div class="button-inner-line"></div>
                                    <p>Закажите выписку из Единого Государственного реестра, и Вы будете знать кто является собственником. </p>
                                    <input type="button" value="ЗАКАЗАТЬ ВЫПИСКУ С ЕГРН" class="news-button">
                                </div>
                                <div class="button-block" *ngIf="width < 1545">
                                    <div class="button-inner-text">"ПЛАТИТЕ ТОЛЬКО ЗА АРЕНДУ НЕДВИЖИМОСТИ"</div>
                                    <div class="button-inner-line"></div>
                                    <p>Мы проверяем каждое объявление и гарантируем, что объект сдается без комиссии.  </p>
                                    <input type="button" value="ОФОРМИТЬ РАССЫЛКУ" class="news-button">
                                </div>
                            </div>
                        </div>
                    </div> <!-- конец третьего блока -->
                </div>
            </div>
        </div>

        <!-- Блок с похожими объектами -->
        <div class="similar-objects">
            <div class="carousel-text">
                <span style="font-size: 24px;font-weight: bold;">ПОХОЖИЕ ОБЪЕКТЫ РЯДОМ</span>
                <span style="font-size: 12px">Объекты рядом с ул. {{item.address}} {{item.house_num}}</span>
            </div>
            <div class="line"></div>
            <div class="carousel">
                <div class="arrow left" (click)="prev()"><img src="../assets/arrowl.png"></div>
                <div class="objects">
                    <ul id="carousel-ul">
                        <li class="carousel-li" *ngFor="let obj of items" (click)="getSimilarObject(obj)"><app-item [similarOpen] = "true"  [item] = "obj" [mode]="'middle'"
                        >
                        </app-item></li>
                    </ul>
                </div>
                <div class="arrow right" (click)="next()"><img src="../assets/arrowr.png"></div>
            </div>
        </div>
        <div class="bottom-buttons"> <!-- блок кнопок -->
            <div class="button-block" *ngIf="width > 1545">
                <div class="button-inner-text">"ПЛАТИТЕ ТОЛЬКО ЗА АРЕНДУ НЕДВИЖИМОСТИ"</div>
                <div class="button-inner-line"></div>
                <p>Мы проверяем каждое объявление и гарантируем, что объект сдается без комиссии.  </p>
                <input type="button" value="ОФОРМИТЬ РАССЫЛКУ" class="news-button">
            </div>
            <div class="button-block">
                <div class="button-inner-text">"ПЛАТИТЕ ТОЛЬКО ЗА АРЕНДУ НЕДВИЖИМОСТИ"</div>
                <div class="button-inner-line"></div>
                <p>Мы проверяем каждое объявление и гарантируем, что объект сдается без комиссии.  </p>
                <input type="button" value="НАНЯТЬ РИЭЛТОРА" class="news-button">
            </div>
            <div class="button-block">
                <div class="button-inner-text">"ПЛАТИТЕ ТОЛЬКО ЗА АРЕНДУ НЕДВИЖИМОСТИ"</div>
                <div class="button-inner-line"></div>
                <p>Мы проверяем каждое объявление и гарантируем, что объект сдается без комиссии.  </p>
                <input type="button" value="НАНЯТЬ ПЕРСОНАЛЬНОГО МЕНЕДЖЕРА" class="news-button">
            </div>
        </div>
    `, styles: [`
        .nearby-button-block{
            display: flex;
        }
        .block{
            flex: 0 0 33%;
        }
        .bottom-buttons{
            display: flex;
            width: calc(100vw - 460px);
            margin-top: 30px;
        }
        .street{
            font-size: 14px;
            flex: 0 0 60%;
            display: flex;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            color: #3b4345;
        }
        .price{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 20px;
            flex: 0 0 calc(50% - 15px);
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            color: #3b4345;
        }
        .price img{
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
        .address-block{
            display: flex;
            flex-direction: column;
            color: #202B2F;
            padding-left: 30px;
            padding-bottom: 15px;
        }
        .photoGallery, .photoGallery ul, .photoGallery li{
            height: 100%;
        }
        .photo-carousel1{
            display: flex;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            color: white;
            font-size: 14px;
            align-items: center;
        }
        .carousel, .photoGallery{
            width: auto;
            transform-origin: 0 0;
            display: flex;
            -webkit-animation:fade ease-in 0.3s;
            animation:fade ease-in 0.3s;
        }
        .carousel-text{
            margin-left: 30px;
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
        }
        .carousel ul, .photoGallery ul{
            width: 9999px;
            margin: 0;
            padding: 0;
            list-style: none;
            transition: margin-left 250ms;
            font-size: 0;
        }
        .carousel li, .photoGallery li{
            display: inline-block;
        }
        .carousel app-item{
            display: block;
            width: 370px;
            margin-left: 30px;
            border-top: 1px solid #9E9E9E;
            border-right: 1px solid #9E9E9E;
            border-left: 1px solid #9E9E9E;
        }
        .photoGallery img{
            display: block;
        }
        .arrow {
            padding: 0;
            display: block;
        }
        .arrow.left{
            width: 44px;
            height: 44px;
            position: relative;
            left: 35px;
            top: 160px;
            z-index: 1;
        }
        .arrow.photo-left, .arrow.photo-right{
            width: 15px;
            height: 35px;
            z-index: 1;
        }
        .arrow.photo-left img, .arrow.photo-right img{
            width: 15px;
            height: 35px;
        }
        .objects{
            overflow: hidden;
            margin-left: -27px;
            flex: 0 0 100%;
        }
        .photos{
            overflow: hidden;
            flex: 0 0 100%;
        }
        .arrow.right{
            padding-right: 17px;
            position: relative;
            top: 160px;
            left: -44px;
            width: 44px;
            height: 44px;
            float: right;
            z-index: 1;
        }
        .arrow:focus {
            outline: none;
        }
        .similar-objects{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            color: #252f32;
            width: calc(100vw - 450px);
            margin-top: 30px;
        }
        .similar-objects, .button-block{
            display: flex;
            flex-direction: column;
        }
        .button-block{
            align-items: center;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            color:  #3b4345;
            margin: 60px 30px 30px 30px;
            font-size: 12px;
        }
        .button-block p{
            color: #262f32;
            line-height: 17px;
        }
        .button-inner-text{
            color:  #3b4345;
            font-size: 14px;
        }
        .button-block span{
            margin-bottom: 20px;
            text-align: center;
        }
        .button-inner-line {
            width: 105px;
            height: 1px;
            border-bottom: 2px solid #9d8c6c;
            margin-top: 25px;
            margin-bottom: 20px;
        }
        .news-button{
            -webkit-appearance: none;
            border-radius: 0;
            font-size: 12px;
            background-color: #262f32;
            color: white;
            outline: none;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            border: none;
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            transition: 0.4s;
        }
        .news-button:hover{
            background-color: #c8c8c8;
        }
        .photo-map-block{
            display: flex;
            width: calc(100vw - 450px);
        }
        .photo-block{
            flex: 0 0 66%;
            height: 500px;
        }
        .photo-img{
            height: 100%;
            background-color: #dfdfdf;
            display: flex;
            justify-content: center;
        }
        .photo-img img{
            width: auto;
            height: auto;
            max-height: 500px;
        }
        .map{
            flex: 0 0 34%;
            height: 500px;
            width: auto;
            overflow: hidden;
        }
        .map-inner{
            border: none;
            height: calc(50vh + 15px);
            width: 100%;
        }
        .additional{
            display: flex;
            width: calc(100vw - 450px);
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            color: #5E5E5E;
        }
        .additional.tablet{
            flex-direction: column;
        }
        .two-blocks{
            display: flex;
            flex: 0 0 66%;
        }
        .two-blocks.tablet, .one-nearby-block.tablet{
            width: calc(100vw - 450px);
        }
        .two-blocks .inner-additional-block{
            flex: 0 0 50%;
        }
        .inner-additional-block{
            flex: 0 0 33%;
            font-size: 12px;
        }
        .inner-additional-block.plus{
            display: flex;
            flex-direction: column;
        }
        .inner-add-top{
            color: #3b4345;
            padding: 30px 0 40px 30px;
            font-size: 16px;
        }
        .line{
            border-bottom: 1px solid #d3d5d6;
            width: auto;
            margin: 0 30px 30px 30px;
        }
        .line.add{
            margin: 0;
            color: #bdc0c1;
        }
        .line.top{
            display: none;
        }
        .info{
            display: flex;
            flex-direction: column;
            flex: 0 0 60%;
            font-size: 12px;
            color: #262f32;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            line-height: 20px;
            padding-left: 30px;
        }
        .rooms{
            font-weight: bold;
        }
        .description{
            margin: 0 30px 30px 30px;
            font-size: 12px;
            color: #262f32;
        }
        .additional-rating-block{
            color: #5E5E5E;
            display: flex;
            flex-direction: column;
        }
        .nearby-block{
            font-size: 16px;
            display: flex;
            flex-direction: column;
            padding: 30px 0 26px 30px;
            color: #262f32;
        }
        .additional-nearby-block{
            color: #5E5E5E;
            background-color: white;
            padding: 0 20px 30px 30px;
        }
        .nearby{
            flex: 0 0 90%;
            display: flex;
            flex-direction: column;
        }
        .bottom-text{
            font-size: 11px;
            color: #4b4b4b;
        }
        .inner-additional{
            display: flex;
            padding: 7px 7px 7px 15px;
            font-size: 12px;
            align-items: center;
        }
        .user-info{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 10px;
            display: flex;
            align-items: center;
            height: 50px;
            width: 100%;
            position: relative;
            bottom: 50px;
            left: 0;
            background-color: rgba(38,47,50,0.85);
            color: white;
        }
        .user-photo{
            width: 45px;
            height: 45px;
            flex: 0 0 10%;
        }
        .map-buttons{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 12px;
            background-color: rgba(38,47,50,0.85);
            color: white;
            display: flex;
            align-items: center;
            position: relative;
            bottom: 65px;
            height: 50px;
        }
        .map-button-line{
            height: 40px;
            border-left: #262f32 1px solid;
        }
        .map-button{
            height: 50px;
            flex: 0 0 33%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.4s;
        }
        .map-button:hover{
            background-color: rgba(38,47,50,1);
        }
        .map-button:hover > .map-button-word{
            border-bottom: 1px solid white;
        }
        .map-button-word{
            padding-top: 5px;
            height: 20px;
        }
        .test{
            padding-bottom: 5px;
        }
        .user-photo img{
            border: 1px solid white;
        }
        .rating{
            display: flex;
            align-items: center;
            flex: 0 0 65%;
        }
        .rating_block{
            width: 85px;
            height: 15px;
            margin-right: 10px;
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
        @media all and (min-width: 1515px){
            .map-inner{
                height: calc(50vh + 15px);
            }
            .photo-map-block, .photo-block, .map{
                height: 50vh;
            }
            .photo-img img{
                max-height: 50vh;
            }
        }
        @media all and (max-width: 1515px){
            .map-buttons{
                bottom: 72px;
            }
            .map-inner {
                height: 522px;
            }
            .line{
                margin: 0 20px 30px 30px;
            }
            .line.top{
                display: block;
                margin: 30px 20px 0px 30px;
            }
            .photo-map-block{
                flex-direction: column;
            }
            .line.add{
                display: none;
            }
            .additional-rating-block{
                flex-direction: row;
            }
            .inner-additional-block{
                display: flex;
                flex: 0 0 50%;
            }
            .two-blocks{
                flex-direction: column;
            }
            .test{
                flex: 0 0 50%;
            }
            .button-block{
                flex: 0 0 calc(50% - 60px);
            }
            .inner-add-top{
                padding: 20px 0 20px 30px;
            }
            .nearby-block{
                padding: 16px 0 20px 30px;
            }
            .button-inner-line{
                border-bottom: 1px solid #9f8e6a;
            }
            .photo-map-block, .additional, .two-blocks, .two-blocks.tablet, .one-nearby-block.tablet,.photos, .photoGallery, .photoGallery-li, .photo-img, .inner-img{
                width: calc(100vw - 370px);
            }
            .photo-img img{
                width: auto;
                max-width: calc(100vw - 370px);
            }
            .similar-objects{
                width: calc(100vw - 370px);
            }
            .carousel,.photoGallery{
                width: calc(100vw - 370px);
            }
            .photoGallery li{
                width: calc(100vw - 370px);
            }
            .bottom-buttons{
                width: calc(100vw - 370px);
            }
            .carousel app-item{
                width: 370px;
            }
            .user-info{
                width: calc(100vw - 370px);
            }
        }
        @media all and (max-width: 1200px){
            .photo-map-block, .additional, .two-blocks, .two-blocks.tablet, .one-nearby-block.tablet,.photos, .photoGallery, .photoGallery-li, .photo-img, .inner-img{
                width: calc(100vw - 350px);
            }
            .photo-img img{
                width: auto;
                max-width: calc(100vw - 350px);
            }
            .line, .description{
                width: auto;
            }
            .line.top{
                margin: 0 20px 0px 30px;
            }
            .bottomPart img{
                padding: 0 10px;
                width: 25px;
                height: 25px;
            }
            .similar-objects{
                width: calc(100vw - 350px);
            }
            .carousel,.photoGallery{
                width: calc(100vw - 350px);
            }
            .photoGallery li{
                width: calc(100vw - 350px);
            }
            .bottom-buttons{
                width: calc(100vw - 350px);
            }
            .carousel app-item{
                width: 350px;
            }
            .user-info{
                width: calc(100vw - 350px);
            }
        }
        @media all and (max-width: 800px){
            .photo-map-block, .additional, .two-blocks{
                width: calc(100vw - 350px);
            }
            .two-blocks, .inner-additional-block, .bottom-buttons, .nearby-button-block{
                flex-direction: column;
            }
            .two-blocks.tablet, .one-nearby-block.tablet {
                width: calc(100vw - 350px);
            }
            .map-inner{
                height: 450px;
            }
            .description{
                padding-right: 20px;
            }
            .user-photo{
                width: 35px;
                height: 35px;
            }
            .user-photo img{
                width: 33px;
                height: 33px;
            }
        }
    `]
})

export class DesktopObjectComponent implements OnInit, AfterViewInit {
    @Input() item: Item;
    similar: Item;
    items: Item[] = [];
    photos: any[] = [];
    width: number;
    widthPhotoBlock = 500;
    positionPhoto = 0;
    countPhoto = 1;
    widthImg = 482; // ширина изображения
    count = 1; // количество изображений
    position = 0;
    pay = false;
    number = 1;
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
    @Output() showContactEvent = new EventEmitter();
    @Output() similarClicked = new EventEmitter();

    ngOnInit() {
        this.items.push(new Item('Калинина', '71А', 26000, 3, 7, 10, 45));
        this.items.push(new Item('Ленина', '5', 2000, 5, 5, 10, 40.3));
        this.items.push(new Item('Калинина', '71А', 26000, 3, 7, 10, 45));
        this.items.push(new Item('Ленина', '5', 2000, 5, 5, 10, 40.3));

        this.photos = [
            { 'image': '../assets/image1.png' },
            { 'image': '../assets/image2.png' },
            { 'image': '../assets/image3.png' },
            { 'image': '../assets/image4.png' }
        ];

        this.width = document.documentElement.clientWidth;

        let height = 0;
        let test = document.getElementsByClassName('test')  as HTMLCollectionOf<HTMLElement>;
        let inner = document.getElementsByClassName('inner-additional')  as HTMLCollectionOf<HTMLElement>;

        if (this.width < 1200) {
            this.widthImg = 382;
        } else {
            for (let i = 0; i < test.length; i++) {
                let h = test[i].offsetHeight;
                console.log('h:' + h);
                if (h > height) {
                    height = h;
                    console.log('height:' + height);
                }
            }
            for (let i = 0; i < test.length; i++) {

                test.item(i).style.setProperty('height', height + 'px');
            }
        }

        for (let i = 0; i < inner.length; i++) {
            if ((i % 2) === 0) {
                inner.item(i).style.setProperty('background-color', '#f5f6f6');
            }
        }


    }
    ngAfterViewInit() {
        this.onResize();
    }
    onResize() {
        let blocks = document.getElementsByClassName('photo-block')  as HTMLCollectionOf<HTMLElement>;
        let photo = document.getElementsByClassName('photos')  as HTMLCollectionOf<HTMLElement>;
        let gallery = document.getElementsByClassName('photoGallery')  as HTMLCollectionOf<HTMLElement>;
        let galleryli = document.getElementsByClassName('photoGallery-li')  as HTMLCollectionOf<HTMLElement>;
        let images = document.getElementsByClassName('photo-img')  as HTMLCollectionOf<HTMLElement>;
        let inner = document.getElementsByClassName('inner-img')  as HTMLCollectionOf<HTMLElement>;
        let widthin = blocks.item(0).offsetWidth;
        this.widthPhotoBlock = blocks.item(0).offsetWidth;
        let deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 1515) {
            for (let i = 0; i < images.length; i++) {
                images.item(i).style.setProperty('width', widthin + 'px');
            }
            for (let i = 0; i < inner.length; i++) {
                inner.item(i).style.setProperty('max-width', widthin + 'px');
            }
            for (let i = 0; i < gallery.length; i++) {
                gallery.item(i).style.setProperty('width', widthin + 'px');
            }
            for (let i = 0; i < photo.length; i++) {
                photo.item(i).style.setProperty('width', widthin + 'px');
            }
            for (let i = 0; i < galleryli.length; i++) {
                galleryli.item(i).style.setProperty('width', widthin + 'px');
            }
        }
        if ((deviceWidth > 1200) && (deviceWidth <= 1515)) {
            for (let i = 0; i < images.length; i++) {
                images.item(i).style.setProperty('width', 'calc(100vw - 370px)');
            }
            for (let i = 0; i < inner.length; i++) {
                inner.item(i).style.setProperty('max-width', 'calc(100vw - 370px)');
            }
            for (let i = 0; i < gallery.length; i++) {
                gallery.item(i).style.setProperty('width', 'calc(100vw - 370px)');
            }
            for (let i = 0; i < photo.length; i++) {
                photo.item(i).style.setProperty('width', 'calc(100vw - 370px)');
            }
            for (let i = 0; i < galleryli.length; i++) {
                galleryli.item(i).style.setProperty('width', 'calc(100vw - 370px)');
            }
            this.widthPhotoBlock = document.documentElement.clientWidth - 370;
        }
        if (deviceWidth < 1200) {
            for (let i = 0; i < images.length; i++) {
                images.item(i).style.setProperty('width', 'calc(100vw - 350px)');
            }
            for (let i = 0; i < inner.length; i++) {
                inner.item(i).style.setProperty('max-width', 'calc(100vw - 350px)');
            }
            for (let i = 0; i < gallery.length; i++) {
                gallery.item(i).style.setProperty('width', 'calc(100vw - 350px)');
            }
            for (let i = 0; i < photo.length; i++) {
                photo.item(i).style.setProperty('width', 'calc(100vw - 350px)');
            }
            for (let i = 0; i < galleryli.length; i++) {
                galleryli.item(i).style.setProperty('width', 'calc(100vw - 350px)');
            }
            this.widthPhotoBlock = document.documentElement.clientWidth - 350;
        }

    }
   getSimilarObject(item: Item) {
       this.similar = item;
        this.similarClicked.emit(this.similar);
    }
    showContact() {
        this.pay = true;
        this.showContactEvent.emit(this.pay);
    }
    prev() {
        const list = document.getElementById('carousel-ul') as HTMLElement;
        this.position = Math.min(this.position + this.widthImg * this.count, 0);
        list.style.setProperty('margin-left', this.position + 'px');
    }
    next() {
        const listElems = document.getElementsByClassName('carousel-li') as HTMLCollectionOf<HTMLElement>;
        const list = document.getElementById('carousel-ul') as HTMLElement;
        this.position = Math.max(this.position - this.widthImg * this.count, -this.widthImg * (listElems.length - this.count));
        list.style.setProperty('margin-left', this.position + 'px');
    }
    prevImg() {
        const list = document.getElementById('photoGallery-ul') as HTMLElement;
        this.positionPhoto = Math.min(this.positionPhoto + this.widthPhotoBlock * this.countPhoto, 0);
        list.style.setProperty('margin-left', this.positionPhoto + 'px');
        if (this.number > 1) {
            this.number--;
        }

    }
    nextImg() {
        const listElems = document.getElementsByClassName('photoGallery-li') as HTMLCollectionOf<HTMLElement>;
        const list = document.getElementById('photoGallery-ul') as HTMLElement;
        this.positionPhoto = Math.max(this.positionPhoto - this.widthPhotoBlock * this.countPhoto, -this.widthPhotoBlock * (listElems.length - this.countPhoto));
        list.style.setProperty('margin-left', this.positionPhoto + 'px');
        if (this.number < this.photos.length) {
            this.number++;
        }
    }
}

import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div class="main">
            <div class="inner-main">
                <div class="countLine">
                    <div id="num1">
                        <span style="font-size: 53px;font-family: 'Sarina', cursive">356</span>
                        <span class="text">ОБЪЕКТОВ ДОБАВЛЕНО ЗА СЕГОДНЯ</span>
                    </div>
                    <div id="num2">
                        <span style="font-size: 53px;font-family: 'Sarina', cursive">417</span>
                        <span class="text">ДОБАВЛЕНО ЗА СЕГОДНЯ ЗАЯВОК НА ОБЪЕКТЫ</span>
                    </div>
                    <div id="num3">
                        <span style="font-size: 53px;font-family: 'Sarina', cursive">981</span>
                        <span class="text">ПРОВЕРЕННЫХ ОБЪЕКТОВ</span>
                    </div>
                </div>
                <div class="title">
                    <div class="logoTitle1"><span>MAKLERONLINE</span></div>
                    <div class="logoTitle2"><span>ZAVRUS PRESENT</span></div>
                    <div class="logoTitle3"><span>АРЕНДА НЕДВИЖИМОСТИ</span><span>БЕЗ КОМИССИИ</span></div>
                </div>
                <div><img src="../assets/background.jpg" class="mainImg"/></div>
            </div>
        </div>
    `, styles: [`
        .title{
            font-family: Helvetica, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .text{
            font-family: Cadillac, sans-serif;
            font-size: 12px;
            font-weight: bold;
        }
        .logoTitle1{
            font-size: 26px;
            margin-top: 80px;
        }
        .logoTitle2{
            font-size: 12px;
            margin-top: 10px;
        }
        .logoTitle3{
            font-size: 34px;
            margin-top: 60px;
            color: #404040;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .main{
            height: max-content;
            width: 100vw;
            min-height: calc(100vh - 195px);
            background: url("../assets/background.jpg");
            background-size: 400vw 100vh;
            position: fixed;
            left: 0;
            top: 195px;
        }
        .inner-main{
            height: 100%;
            overflow-y: scroll;
        }
        .inner-main::-webkit-scrollbar { width: 0;height: 0; }
        .mainImg{
            width: 100vw;
        }
        .countLine{
            height: 214px;
            width: 100vw;
            background-color: white;
            display: flex;
            align-items: center;
        }
        #num1, #num2, #num3{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #num1, #num3{
            flex: 0 0 35%;
        }
        #num2{
            flex: 0 0 30%;
        }
        @media all and (min-width: 1000px){
            .main .logoTitle1,.main .logoTitle2,.main .logoTitle3{
                display: none;
            }
            .main{
                background: none;
            }
            .inner-main::-webkit-scrollbar { width: 0;height: 0; }
        }
        @media all and (max-width: 1000px){
            .countLine{
                display: none;
            }
            .main{
                min-height: calc(100vh - 60px);
                background-position-x: 60%;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-size: auto calc(100vh - 60px);
                top: 0;
                margin: 0;
            }
            .mainImg{
                display: none;
            }
        }
        @media all and (max-width: 450px){
            .logoTitle3{
                font-size: 26px;
            }
        }
    `]
})
export class HomeComponent implements OnInit {
    ngOnInit() {
       // alert(document.documentElement.clientWidth + "X" + document.documentElement.clientHeight);
    }
}

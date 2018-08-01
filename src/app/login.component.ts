import { OnInit, Input, Component} from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
        <div class="main">
            <div class="left-block" [class.close]="!openBlock">
                <div class="dark-layer"></div>
                <div class="logo">
                    <div><span style="font-size: 24px">MAKLERONLINE</span></div>
                    <div><span style="font-size: 10px;margin-left: 25px">ГРУППА КОМПАНИЙ ZAVRUS</span></div>
                </div>
                <div class="text-block">
                    <div style="flex: 0 0 10%"></div>
                    <div class="text font">
                        <span>МАКСИМУМ</span>
                        <span>ВОЗМОЖНОСТЕЙ</span>
                        <span style="font-size: 70px">ВЫБОРА НЕДВИЖИМОСТИ</span>
                    </div>
                    <div style="flex: 0 0 10%"></div>
                </div>

            </div>
            <div class="right-block">
                <div class="advert font">
                    <span>"Только реальные объекты</span>
                    <span>в режиме онлайн".</span>
                    <div style="display: flex;margin-top: 7px;">
                        <div class="line"></div>
                        <span style="font-size: 11px">Команда Маклеронлайн</span>
                    </div>
                </div>
                <div class="buttons font">
                    <div class="button">ВХОД В ДОМЕН</div>
                    <div class="linehr"></div>
                    <div class="button">РЕГИСТРАЦИЯ</div>
                </div>
                <div class="social font">
                    <span>ВОЙТИ ЧЕРЕЗ</span>
                    <div class="social-icons">
                        <img src="../assets/facebook.png">
                        <img class="icon" src="../assets/twitter.png"/>
                        <img class="icon" src="../assets/google.png"/>
                        <img class="icon" src="../assets/youtube.png"/>
                        <img class="icon" src="../assets/pinterest.png"/>
                        <img class="icon" src="../assets/instagram.png"/>
                    </div>
                </div>
                <div class="input-block font">
                    <span>ВОЙТИ ЧЕРЕЗ ВАШ E-mail</span>
                    <input type="text">
                </div>
                <div class="input-block font">
                    <span>КОД ДОСТУПА</span>
                    <input type="text">
                    <a href="" style="font-size: 10px">Забыли пароль</a>
                </div>
                <div class="check-block font" style="margin-top: 40px;">
                    <div class="input" (click)="check=!check"><img *ngIf="check" src="../assets/check-mark.png" height="20px" width="20px"> </div>
                    <span>Регистрируясь в домене, я согласен с условиями использования и политикой конфиденциальности.</span>
                </div>
                <div class="check-block font">
                    <div class="input" (click)="checkNews=!checkNews"><img *ngIf="checkNews" src="../assets/check-mark.png" height="20px" width="20px"> </div>
                    <span>​ Я даю согласие на подписку на обновления и новостную рассылку.</span>
                </div>
                <div class="button-next">ДАЛЕЕ</div>
            </div>
        </div>
    `, styles: [`
        .main{
            display: flex;
            min-height: calc(100vh - 195px);
            position: fixed;
            top: 195px;
        }
        .font{
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            color: #252f32;
        }
        .text-block{
            position: relative;
            left: 0;
            z-index: 1;
        }
        .text{
            display: flex;
            flex-direction: column;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            font-size: 50px;
            color: white;
        }
        .left-block{
            background-image: url("../assets/background.jpg");
            background-size: auto 100vh;
        }
        .left-block.close{
            display: none;
        }
        .left-block, .dark-layer{
            height: calc(100vh - 195px);
            width: calc(100vw - 450px);
        }
        .dark-layer{
            background-color: #202b2f;
            position: relative;
            top: 0;
            left: 0;
            opacity: 0.85;
        }
        .logo{
            margin-left: 65px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: Helvetica, sans-serif;
            position: relative;
            left: 0;
            z-index: 1;
            color: white;
        }
        .right-block{
            height: calc(100vh - 195px);
            width: calc(450px - 80px);
            padding-left: 80px;
            overflow-y: scroll;
        }
        .right-block::-webkit-scrollbar { width: 0;height: 0; }
        .advert{
            width: 290px;
            font-size: 14px;
            margin-bottom: 150px;
            font-style: italic;
            margin-top: 60px;
            display: flex;
            flex-direction: column;
        }
        .line{
            height: 3px;
            width: 35px;
            border-bottom: #9d8c6c solid 1px;
            margin-right: 15px;
            margin-left: 40px;
        }
        .buttons{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 290px;
            margin-bottom: 35px;
        }
        .button{
            height: 40px;
            flex: 0 0 49%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #3b4345;
        }
        .linehr{
            flex: 0 0 2%;
            height: 36px;
            margin-top: 2px;
            margin-bottom: 2px;
            border-left: #9e9e9e 1px solid;
            width: 2px;
            margin-left: 5px;
        }
        .social{
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
        }
        .social span, .input-block span{
            font-size: 12px;
            margin-bottom: 5px;
        }
        .social-icons img{
            height: 35px;
            width: 35px;
        }
        .icon{
            margin-left: 15px;
        }
        .input-block{
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
        }
        .input-block input{
            -webkit-appearance: none;
            border-radius: 0;
            padding: 0;
            outline: none;
            width: 290px;
            margin-top: 5px;
            border: 1px solid #c0c0c0;
            height: 30px;
            margin-bottom: 5px;
        }
        .input-block a{
            text-decoration: none;
            color: #252f32;
            margin-top: 10px;
        }
        .check-block{
            display: flex;
            margin-bottom: 17px;
        }
        .check-block .input{
            height: 19px;
            width: 19px;
            border: 1px solid #c0c0c0;
            margin-right: 40px;
        }
        .check-block span{
            font-size: 12px;
            width: 230px;
            color: #252f32;
        }
        .button-next{
            font-size: 12px;
            background-color: #202b2f;
            color: white;
            height: 40px;
            width: 290px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Cadillac, sans-serif;
            letter-spacing: 0.05em;
            margin-top: 36px;
            margin-bottom: 36px;
        }
        `]
})
export class LoginComponent implements OnInit {
    @Input() otherComponent: boolean;
    openBlock = true;
    height: number;
    width: number;
    check = false;
    checkNews = false;
    ngOnInit() {
        let hei = document.getElementsByClassName('left-block')  as HTMLCollectionOf<HTMLElement>;
        let logo = document.getElementsByClassName('logo') as HTMLCollectionOf<HTMLElement>;
        let text = document.getElementsByClassName('text-block') as HTMLCollectionOf<HTMLElement>;
        this.height = hei.item(0).offsetHeight;
        this.width = hei.item(0).offsetWidth;
        if (this.otherComponent === false) {
           this.openBlock = false;
        } else {
            this.openBlock = true;
        }
        console.log(this.openBlock);
        logo.item(1).style.setProperty('top', -this.height + 100 + 'px');
        text.item(0).style.setProperty('top', -this.height + 300 + 'px');
        text.item(0).style.setProperty('margin-left', ((this.width / 100) * 15) + 'px');
    }
}

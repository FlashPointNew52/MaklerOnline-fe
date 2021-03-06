import { Component} from '@angular/core';

@Component({
    selector: 'app-rating',
    template: `
        <div class="rating"  style="margin-bottom: 20px">
            <span style="width: 100px;">Общий рейтинг</span>
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
            <span style="width: 30px">4,25</span>
        </div>
        <div class="rating">
            <span>Месторасположения</span>
            <div class="rating_block1">
                <input name="rating1" value="5" id="rating1_5" type="radio" />
                <label for="rating1_5" class="label_rating1"></label>

                <input name="rating1" value="4" id="rating1_4" type="radio" />
                <label for="rating1_4" class="label_rating1"></label>

                <input name="rating1" value="3" id="rating1_3" type="radio" />
                <label for="rating1_3" class="label_rating1"></label>

                <input name="rating1" value="2" id="rating1_2" type="radio" />
                <label for="rating1_2" class="label_rating1"></label>

                <input name="rating1" value="1" id="rating1_1" type="radio" />
                <label for="rating1_1" class="label_rating1"></label>
            </div>
        </div>
        <div class="rating">
            <span>Транспортная доступность</span>
            <div class="rating_block2">
                <input name="rating2" value="5" id="rating2_5" type="radio" />
                <label for="rating2_5" class="label_rating2"></label>

                <input name="rating2" value="4" id="rating2_4" type="radio" />
                <label for="rating2_4" class="label_rating2"></label>

                <input name="rating2" value="3" id="rating2_3" type="radio" />
                <label for="rating2_3" class="label_rating2"></label>

                <input name="rating2" value="2" id="rating2_2" type="radio" />
                <label for="rating2_2" class="label_rating2"></label>

                <input name="rating2" value="1" id="rating2_1" type="radio" />
                <label for="rating2_1" class="label_rating2"></label>
            </div>
        </div>
        <div class="rating">
            <span>Престижность района</span>
            <div class="rating_block3">
                <input name="rating3" value="5" id="rating3_5" type="radio" />
                <label for="rating3_5" class="label_rating3"></label>

                <input name="rating3" value="4" id="rating3_4" type="radio" />
                <label for="rating3_4" class="label_rating3"></label>

                <input name="rating3" value="3" id="rating3_3" type="radio" />
                <label for="rating3_3" class="label_rating3"></label>

                <input name="rating3" value="2" id="rating3_2" type="radio" />
                <label for="rating3_2" class="label_rating3"></label>

                <input name="rating3" value="1" id="rating3_1" type="radio" />
                <label for="rating3_1" class="label_rating3"></label>
            </div>
        </div>
        <div class="rating">
            <span> Придомовая территория</span>
            <div class="rating_block4">
                <input name="rating4" value="5" id="rating4_5" type="radio" />
                <label for="rating4_5" class="label_rating4"></label>

                <input name="rating4" value="4" id="rating4_4" type="radio" />
                <label for="rating4_4" class="label_rating4"></label>

                <input name="rating4" value="3" id="rating4_3" type="radio" />
                <label for="rating4_3" class="label_rating4"></label>

                <input name="rating4" value="2" id="rating4_2" type="radio" />
                <label for="rating4_2" class="label_rating4"></label>

                <input name="rating4" value="1" id="rating4_1" type="radio" />
                <label for="rating4_1" class="label_rating4"></label>
            </div>
        </div>
        <div class="rating">
            <span>Наличие парковки</span>
            <div class="rating_block5">
                <input name="rating5" value="5" id="rating5_5" type="radio" />
                <label for="rating5_5" class="label_rating5"></label>

                <input name="rating5" value="4" id="rating5_4" type="radio" />
                <label for="rating5_4" class="label_rating5"></label>

                <input name="rating5" value="3" id="rating5_3" type="radio" />
                <label for="rating5_3" class="label_rating5"></label>

                <input name="rating5" value="2" id="rating5_2" type="radio" />
                <label for="rating5_2" class="label_rating5"></label>

                <input name="rating5" value="1" id="rating5_1" type="radio" />
                <label for="rating5_1" class="label_rating5"></label>
            </div>
        </div>
        <div class="rating">
            <span>Вид из окна</span>
            <div class="rating_block6">
                <input name="rating6" value="5" id="rating6_5" type="radio" />
                <label for="rating6_5" class="label_rating6"></label>

                <input name="rating6" value="4" id="rating6_4" type="radio" />
                <label for="rating6_4" class="label_rating6"></label>

                <input name="rating6" value="3" id="rating6_3" type="radio" />
                <label for="rating6_3" class="label_rating6"></label>

                <input name="rating6" value="2" id="rating6_2" type="radio" />
                <label for="rating6_2" class="label_rating6"></label>

                <input name="rating6" value="1" id="rating6_1" type="radio" />
                <label for="rating6_1" class="label_rating6"></label>
            </div>
        </div>
        <div class="rating">
            <span>Система безопасности</span>
            <div class="rating_block7">
                <input name="rating7" value="5" id="rating7_5" type="radio" />
                <label for="rating7_5" class="label_rating7"></label>

                <input name="rating7" value="4" id="rating7_4" type="radio" />
                <label for="rating7_4" class="label_rating7"></label>

                <input name="rating7" value="3" id="rating7_3" type="radio" />
                <label for="rating7_3" class="label_rating7"></label>

                <input name="rating7" value="2" id="rating7_2" type="radio" />
                <label for="rating7_2" class="label_rating7"></label>

                <input name="rating7" value="1" id="rating7_1" type="radio" />
                <label for="rating7_1" class="label_rating7"></label>
            </div>
        </div>
        <div class="rating">
            <span>Экология</span>
            <div class="rating_block8">
                <input name="rating8" value="5" id="rating8_5" type="radio" />
                <label for="rating8_5" class="label_rating8"></label>

                <input name="rating8" value="4" id="rating8_4" type="radio" />
                <label for="rating8_4" class="label_rating8"></label>

                <input name="rating8" value="3" id="rating8_3" type="radio" />
                <label for="rating8_3" class="label_rating8"></label>

                <input name="rating8" value="2" id="rating8_2" type="radio" />
                <label for="rating8_2" class="label_rating8"></label>

                <input name="rating8" value="1" id="rating8_1" type="radio" />
                <label for="rating8_1" class="label_rating8"></label>
            </div>
        </div>
    `, styles: [`
        .rating{
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        .rating span{
            width: 227px;
            color: #262f32;
        }
        .rating_block,.rating_block1,.rating_block2,.rating_block3,.rating_block4,.rating_block5,.rating_block6,.rating_block7,.rating_block8 {
            width: 85px;
            height: 15px;
            margin-right: 30px;
        }
        .rating_block input,.rating_block1 input,.rating_block2 input,
        .rating_block3 input,.rating_block4 input,
        .rating_block5 input,.rating_block6 input,.rating_block7 input,.rating_block8 input{
            margin-right: 3px;
        }
        .rating_block input[type="radio"],.rating_block1 input[type="radio"],.rating_block2 input[type="radio"],
        .rating_block3 input[type="radio"],.rating_block4 input[type="radio"],
        .rating_block5 input[type="radio"],.rating_block6 input[type="radio"],.rating_block7 input[type="radio"],.rating_block8 input[type="radio"]{
            display: none;
        }
        .label_rating, .label_rating1, .label_rating2, .label_rating3, .label_rating4, .label_rating5, .label_rating6, .label_rating7, .label_rating8 {
            float: right;
            display: block;
            width: 15px;
            height: 15px;
            background: url("../assets/starnew.png") no-repeat 50% 0;
            cursor: pointer;
            margin-right: 2px;
        }
        .rating_block .label_rating:hover,
        .rating_block .label_rating:hover ~ .label_rating,
        .rating_block input[type="radio"]:checked ~ .label_rating {
            background-position: 50% -15px;
        }
        .rating_block1 .label_rating1:hover,
        .rating_block1 .label_rating1:hover ~ .label_rating1,
        .rating_block1 input[type="radio"]:checked ~ .label_rating1 {
            background-position: 50% -15px;
        }
        .rating_block2 .label_rating2:hover,
        .rating_block2 .label_rating2:hover ~ .label_rating2,
        .rating_block2 input[type="radio"]:checked ~ .label_rating2 {
            background-position: 50% -15px;
        }
        .rating_block3 .label_rating3:hover,
        .rating_block3 .label_rating3:hover ~ .label_rating3,
        .rating_block3 input[type="radio"]:checked ~ .label_rating3 {
            background-position: 50% -15px;
        }
        .rating_block4 .label_rating4:hover,
        .rating_block4 .label_rating4:hover ~ .label_rating4,
        .rating_block4 input[type="radio"]:checked ~ .label_rating4 {
            background-position: 50% -15px;
        }
        .rating_block5 .label_rating5:hover,
        .rating_block5 .label_rating5:hover ~ .label_rating5,
        .rating_block5 input[type="radio"]:checked ~ .label_rating5 {
            background-position: 50% -15px;
        }
        .rating_block6 .label_rating6:hover,
        .rating_block6 .label_rating6:hover ~ .label_rating6,
        .rating_block6 input[type="radio"]:checked ~ .label_rating6 {
            background-position: 50% -15px;
        }
        .rating_block7 .label_rating7:hover,
        .rating_block7 .label_rating7:hover ~ .label_rating7,
        .rating_block7 input[type="radio"]:checked ~ .label_rating7 {
            background-position: 50% -15px;
        }
        .rating_block8 .label_rating8:hover,
        .rating_block8 .label_rating8:hover ~ .label_rating8,
        .rating_block8 input[type="radio"]:checked ~ .label_rating8 {
            background-position: 50% -15px;
        }
        @media all and (max-width: 1200px){
            .rating span{
                width: 195px;
            }
        }
        @media all and (max-width: 1000px){
            .rating_block,.rating_block1,.rating_block2,.rating_block3,.rating_block4,.rating_block5,.rating_block6,.rating_block7,.rating_block8 {
                margin-right: 10px;
            }
            .label_rating, .label_rating1, .label_rating2, .label_rating3, .label_rating4, .label_rating5, .label_rating6, .label_rating7, .label_rating8 {
                margin-right: 1px;
            }
        }
    `]
})
export class StarRatingComponent {}

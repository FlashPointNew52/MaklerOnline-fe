import { BrowserModule } from '@angular/platform-browser';
import {  NgModule} from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { CatalogItemComponent } from './catalogItem.component';
import {FiltersComponent} from './filters.component';
import {HomeComponent} from './home.component';
import {ObjectsComponent} from './objects.component';
import {ItemComponent} from './item.component';
import {StarRatingComponent} from './starRating.component';
import {LoginComponent} from './login.component';
import {Item} from './item';
import {DesktopObjectComponent} from './desktopObject.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'objects/:itemsActive/:filtersInnerActive/:founded', component: ObjectsComponent},
    { path: 'catalog-item', component: CatalogItemComponent, data: {item: Item}},
    { path: 'filters', component: FiltersComponent},
    { path: 'item', component: ItemComponent},
    { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
      AppComponent,
      CatalogItemComponent,
      FiltersComponent,
      HomeComponent,
      ObjectsComponent,
      ItemComponent,
      StarRatingComponent,
      DesktopObjectComponent,
      LoginComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      CommonModule,
      FormsModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBA7Esd0lVJz22NXVugIw4noKq43zU5oiU'
      })
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

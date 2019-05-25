import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeControllerComponent } from './home-controller/home-controller.component';
import { LanguageBarComponent } from './language-bar/language-bar.component';
import { SnippetCardComponent } from './snippet-card/snippet-card.component';
import { SnippetAdderComponent } from './snippet-adder/snippet-adder.component';

import { UtilityComponentModule } from './utility-component/utility-component.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeControllerComponent,
    LanguageBarComponent,
    SnippetCardComponent,
    SnippetAdderComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    UtilityComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

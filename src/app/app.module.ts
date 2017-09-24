import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {HomeComponent} from './home/home.component';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {LoaderInterceptor} from "./interceptors/loader-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlimLoadingBarModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
    declarations: [
        AppComponent,
        LoaderComponent,
        UserPageComponent,
        UserListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

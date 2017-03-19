import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';// Imports for loading & configuring the in-memory web api
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './heroes/hero-search/hero-search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),//InMemoryWebApiModule将Http客户端默认的后端服务 — 这是一个辅助服务，负责与远程服务器对话 — 替换成了内存 Web API服务：
    AppRoutingModule
    // RouterModule.forRoot([
    //   {
    //     path: 'heroes',
    //     component: HeroesComponent
    //   }, {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   }, {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    //   }, {
    //     path: 'detail/:id',
    //     component: HeroDetailComponent
    //   }
    // ])
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    AppComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

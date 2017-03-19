import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

/*
将路由抽出到一个变量中。你将来可能会导出它，而且它让路由模块模式更加明确。
添加RouterModule.forRoot(routes)到imports。
添加RouterModule到exports，这样关联模块的组件可以访问路由的声明，比如RouterLink和RouterOutlet。
无declarations！声明是关联模块的任务。
如果你有守卫服务，添加模块providers；本例子无守卫服务。
*/
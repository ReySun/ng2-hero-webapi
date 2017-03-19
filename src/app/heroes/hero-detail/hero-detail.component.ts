import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';//我们不会再从父组件的属性绑定中接收英雄数据。 新的HeroDetailComponent应该从ActivatedRoute服务的可观察对象params中取得id参数， 并通过HeroService服务获取具有这个指定id的英雄数据。

import 'rxjs/add/operator/switchMap';//然后导入switchMap运算符，之后会与路由参数Observable一起使用。

import { Hero } from '../../hero';

import { HeroService } from '../../hero.service';
@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  //注入ActivatedRoute和HeroService服务到构造函数中，将它们的值保存到私有变量中
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  //使用之前注入的Location服务， 利用浏览器的历史堆栈，导航到上一步
  goBack(): void {
    this.location.back();
  }



  //save方法使用 hero 服务的update方法来持久化对英雄名字的修改，然后导航回前一个视图
  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
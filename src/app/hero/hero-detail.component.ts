import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from '../hero.service';

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
) {}

/* we use the params observable to extract the id parameter value from the ActivatedRoute service and use
   the HeroService to fetch the hero with that id. */
ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
    /* Do I need to unsubscribe?
      The Router manages the observables it provides and localizes the subscriptions. 
      The subscriptions are cleaned up when the component is destroyed, protecting against memory leaks, 
      so we don't need to unsubscribe from the route params Observable.*/
}

goBack(): void {
  this.location.back();
}


}
import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]

})
export class HeroesComponent implements OnInit {
 
  heroes: Hero[];
  selectedHero: Hero;
 
  /*
AppComponent should fetch and display heroes without a fuss. Where do we call the getHeroes method? In a constructor? 
We do not!

Years of experience and bitter tears have taught us to keep complex logic out of the constructor, especially anything 
that might call a server as a data access method is sure to do.

The constructor is for simple initializations like wiring constructor parameters to properties.
It's not for heavy lifting. We should be able to create a component in a test and not worry that it might do real
work — like calling a server! — before we tell it to do so.
  */

constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

 getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}


onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

}



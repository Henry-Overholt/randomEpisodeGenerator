import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'people-carousel',
  templateUrl: './people-carousel.component.html',
  styleUrls: ['./people-carousel.component.css'],
})
export class PeopleCarouselComponent implements OnInit {
  @Input() arrayOfPeople: any[];
  @Input() title: string;
  @Input() id: string;
  @Input() typeOfId: string;
  posterPath: string;
  people: any[] = [];
  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.posterPath = this.peopleService.posterPath;
    if (this.arrayOfPeople) {
      this.getPeople();
    } else {
      if (this.typeOfId === 'show') {
        this.peopleService.getPeopleOfShow(this.id).subscribe((res) => {
          if (this.title.toLowerCase() === 'cast') {
            this.people = res.cast;
          } else if (this.title.toLocaleLowerCase() === 'crew') {
            this.people = res.crew;
          }
        });
      } else {
        this.peopleService.getPeopleOfFilm(this.id).subscribe((res) => {
          if (this.title.toLowerCase() === 'cast') {
            this.people = res.cast;
          } else if (this.title.toLocaleLowerCase() === 'crew') {
            this.people = res.crew;
          }
        });
      }
    }
  }
  getPeople() {
    this.arrayOfPeople.forEach((person) => {
      this.peopleService.getPeople(person.id).subscribe((res) => {
        this.people.push(res);
      });
    });
  }
  navigateToPerson(id: any) {
    if (this.title.toLowerCase() != 'crew') {
      this.router.navigate([`people/${id}`]);
    }
  }
}

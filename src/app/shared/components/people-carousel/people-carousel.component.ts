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
  posterPath: string;
  people: any[] = [];
  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.posterPath = this.peopleService.posterPath;
    this.getPeople();
  }
  getPeople() {
    this.arrayOfPeople.forEach((person) => {
      this.peopleService.getPeople(person.id).subscribe((res) => {
        this.people.push(res);
      });
    });
  }
  navigateToPerson(id: any) {
    this.router.navigate([`people/${id}`]);
  }
}

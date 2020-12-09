import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'people-carousel',
  templateUrl: './people-carousel.component.html',
  styleUrls: ['./people-carousel.component.css'],
})
export class PeopleCarouselComponent implements OnInit {
  @Input() arrayOfPeople: any[];
  posterPath: string;
  people: any[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.posterPath = this.apiService.posterPath;
    this.getPeople();
  }
  getPeople() {
    this.arrayOfPeople.forEach((person) => {
      this.apiService.getPeople(person.id).subscribe((res) => {
        this.people.push(res);
      });
    });
  }
}

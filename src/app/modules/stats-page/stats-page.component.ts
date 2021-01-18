import { Component, OnInit } from '@angular/core';
import { StatsService } from './../../shared/services/stats/stats.service';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css'],
})
export class StatsPageComponent implements OnInit {
  constructor(private statsService: StatsService) {}

  ngOnInit(): void {}
}

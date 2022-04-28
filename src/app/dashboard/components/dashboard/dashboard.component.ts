import { Component, OnInit } from '@angular/core';
import { Image } from '../../models/image.model';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public gallery: Image[] = [];

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.fetchGallery();
  }

  public loadMoreImages(pageNumber: number) {
    this.dashboardService.searchGallery(pageNumber)
      .subscribe((gallery) => this.gallery.push(...gallery));
  }

  private fetchGallery() {
    this.dashboardService.searchGallery()
      .subscribe((gallery) => this.gallery.push(...gallery));
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from '~/dashboard/models/album.model';
import { AlbumsService } from '~/dashboard/services/albums.service';
import { IconsService } from '~/shared/services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public availableAlbums$: Observable<Album[]>;

  constructor(
    private albumsService: AlbumsService,
    private router: Router,
    private iconsService: IconsService
  ) {
    this.iconsService.registerIcons();
  }

  public ngOnInit() {
    localStorage.setItem('user', JSON.stringify({id: 123456, username: "bobo", password: "bobo"}));
    this.availableAlbums$ = this.albumsService.albumsList$;
  }

  public openAlbum(id: number) {
    this.router.navigate([`/dashboard/album/${id}`]);
  }
}

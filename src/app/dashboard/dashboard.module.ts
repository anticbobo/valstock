import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumComponent } from '~/dashboard/components/album/album.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SharedModule } from '~/shared/shared.module';
import { DashboardRoutingComponent } from './components/dashboard-routing.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  declarations: [
    DashboardRoutingComponent,
    DashboardComponent,
    ImageDetailsComponent,
    GalleryComponent,
    AlbumComponent
  ],
})
export class DashboardModule {}

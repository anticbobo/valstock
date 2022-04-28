import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from '~/dashboard/components/album/album.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardRoutingComponent } from './components/dashboard-routing.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardRoutingComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: ":id",
        component: ImageDetailsComponent
      },
      {
        path: "album/:id",
        component: AlbumComponent
      }
    ]
  },
  {
    path: "**",
    component: DashboardComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { DashtextComponent } from './dashtext/dashtext.component';
import { PageoneComponent } from './pageone/pageone.component';
import { PhotosComponent } from './photos/photos.component';

export const routes: Routes = [
    { path: '', component: DashComponent },
    { path: 'dash', component: DashtextComponent },
    { path: 'pageOne', component: PageoneComponent },
    { path: 'photos', component: PhotosComponent },
];

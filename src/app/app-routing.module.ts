import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full' },
  {
    path: 'all',
    loadChildren: () =>
      import('./modules/all-data/all-data.module').then((m) => m.AllDataModule),
  },
  {
    path: 'activated',
    loadChildren: () =>
      import('./modules/activated/activated.module').then(
        (m) => m.ActivatedModule
      ),
  },
  { path: '**', redirectTo: '/all' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

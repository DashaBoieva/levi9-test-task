import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllActivatedComponent } from './components/all-activated/all-activated.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AllActivatedComponent,
  },
];

@NgModule({
  declarations: [AllActivatedComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ActivatedModule {}

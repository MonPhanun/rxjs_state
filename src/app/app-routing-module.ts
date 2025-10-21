import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './core/pages/layout/layout';
import { HomePage } from './core/pages/home-page/home-page';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: HomePage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserServiceResolver } from './resolver/user-service.resolver';

const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    resolve: { user: UserServiceResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

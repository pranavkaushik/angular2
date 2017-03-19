import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import{ UserdetailsComponent } from './user/userdetails.component';

export const router: Routes =[
    { path: '', redirectTo: '/user', pathMatch: 'full' },
    {path:'user' ,pathMatch:'full' , component: UserComponent},
    {path:'detail' ,pathMatch:'full' , component: UserdetailsComponent}
    
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
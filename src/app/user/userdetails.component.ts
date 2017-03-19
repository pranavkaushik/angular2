import { Component, Input } from '@angular/core';
import{ UserComponent } from './user.component'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
 
})
export class UserdetailsComponent  {
@Input() parentOut;

}

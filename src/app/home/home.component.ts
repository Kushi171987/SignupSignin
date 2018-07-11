import { Component, OnInit, SimpleChanges } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
   currentUser: User;
   users: User[] = [];

   constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }
   
   deleteUser(id: number) {
      this.userService.delete(id).pipe(first()).subscribe(() => { 
         this.loadAllUsers() 
      });
   }

   private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => { 
         this.users = users; 
      });
   }

   ngOnInit() {
      console.log('ngOnInit Called');
      this.loadAllUsers();
   }

   ngOnChanges(simpleChanges: SimpleChanges) {
      console.log('ngOnChanges Called', simpleChanges);
   }

   ngDoCheck() {
      console.log('ngOnDoCheck Called');
   }

   ngAfterContentInit() {
      console.log('ngAfterContentInit Called');
   }

   ngAfterContentChecked() {
      console.log('ngAfterContentChecked Called');
   }

   ngAfterViewInit() {
      console.log('ngAfterViewInit Called');
   }

   ngAfterViewChecked() {
      console.log('ngAfterViewChecked Called');
   }

   ngOnDestroy() {
      console.log('ngOnDestroy Called');
   }
   
}

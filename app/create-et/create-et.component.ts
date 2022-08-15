//create and handle a new et form data

import { Component, OnInit } from '@angular/core';
import { ET } from '../et';
import { ETService } from '../et.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-et',
  templateUrl: './create-et.component.html',
  styleUrls: ['./create-et.component.css']
})
export class CreateETComponent implements OnInit {

  et: ET = new ET();
  constructor(private etService: ETService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveET(){
    this.etService.createET(this.et).subscribe( data =>{
      console.log(data);
      this.goToETList();
    },
    error => console.log(error));
  }

  goToETList(){
    this.router.navigate(['/technologies']);
  }
  
  onSubmit(){
    console.log(this.et);
    this.saveET();
  }
}
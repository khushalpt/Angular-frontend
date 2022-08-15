//first get the et object using REST API and populate it in HTML form via data binding. Users can edit the et form data and submit the form

import { Component, OnInit } from '@angular/core';
import { ETService } from '../et.service';
import { ET } from '../et';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-et',
  templateUrl: './update-et.component.html',
  styleUrls: ['./update-et.component.css']
})
export class UpdateETComponent implements OnInit {

  id: number;
  et: ET = new ET();
  constructor(private etService: ETService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];


    //subscribing to the getETById() method of the service and reading the returned data  in the products variable
    this.etService.getETById(this.id).subscribe(data => {
      this.et = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.etService.updateET(this.id, this.et).subscribe( data =>{
      this.goToETList();
    }
    , error => console.log(error));
  }

  goToETList(){
    this.router.navigate(['/technologies']);
  }
}
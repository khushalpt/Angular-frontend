//ETListComponent component which will be used to display a list of technologies, create a new ET, and delete an ET.

import { Component, OnInit } from '@angular/core';
import { ET } from '../et'
import { ETService } from '../et.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-et-list',
  templateUrl: './et-list.component.html',
  styleUrls: ['./et-list.component.css']
})
export class ETListComponent implements OnInit {

  technologies: ET[];

  constructor(private etService: ETService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTechnologies();
  }

  private getTechnologies(){
    this.etService.getETList().subscribe(data => {
      this.technologies = data;
    });
  }

  etDetails(id: number){
    this.router.navigate(['et-details', id]);
  }

  updateET(id: number){
    this.router.navigate(['update-et', id]);
  }

  deleteET(id: number){
    this.etService.deleteET(id).subscribe( data => {
      console.log(data);
      this.getTechnologies();
    })
  }
}
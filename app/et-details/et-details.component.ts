//component is used to display a particular et detail

import { Component, OnInit } from '@angular/core';
import { ET } from '../et';
import { ActivatedRoute } from '@angular/router';
import { ETService } from '../et.service';

@Component({
  selector: 'app-et-details',
  templateUrl: './et-details.component.html',
  styleUrls: ['./et-details.component.css']
})
export class ETDetailsComponent implements OnInit {

  id: number
  et: ET
  constructor(private route: ActivatedRoute, private etService: ETService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.et = new ET();
    this.etService.getETById(this.id).subscribe( data => {
      this.et = data;
    });
  }
}
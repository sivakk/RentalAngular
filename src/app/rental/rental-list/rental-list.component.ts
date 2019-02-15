import { Component, OnInit } from '@angular/core';
import { RentalService } from "../shared/rental.service";
import {Rental} from "../shared/rental.modal";

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

items: any[] ;
rentals:any[];
  constructor(private rental1:RentalService) { }

  ngOnInit() {
    const rentalobservble=this.rental1.getRentals();
    rentalobservble.subscribe((rentalss:Rental[])=>{
      this.rentals=rentalss;
      this.rentals[0];

    })
    console.log(this.rentals)
  }

}

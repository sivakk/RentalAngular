import { Component, OnInit } from '@angular/core';
import { RentalService} from './shared/rental.service'
@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  constructor(rental:RentalService) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { partners } from '../menu';
import { PartnersService } from '../partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  public partners: partners[] = [];

  constructor(private partnersService: PartnersService) { }

  ngOnInit(): void {
    this.partnersService.getPartners()
        .subscribe(
          data => {
            this.partners = data
          }
        )
  }

}

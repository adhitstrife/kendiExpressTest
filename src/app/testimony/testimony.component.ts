import { Component, OnInit } from '@angular/core';
import { testimony } from '../menu';
import { TestimonyService } from '../testimony.service';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {
  public testimony: any;

  constructor(
    private testimonyService: TestimonyService
  ) { }

  ngOnInit(): void {
    this.testimonyService.getTestimoni()
        .subscribe(
          data => {
            this.testimony = data
            console.log(this.testimony)
          }
        )
  }

}

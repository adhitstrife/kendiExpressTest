import { Component, OnInit } from '@angular/core';
import { menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menus: menu[] = [];
  
  slideConfig = { 
    slidesToShow: 1, 
    slidesToScroll: 1,
    responsive: [
      
    ]
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  constructor(private menuService: MenuService) { }


  ngOnInit() {
    this.menuService.getMenu()
        .subscribe(
          data => {
            this.menus = data;
            console.log(this.menus);
          }
        )
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = 'https://www.pngall.com/wp-content/uploads/2/J-Letter-PNG-Image-File.png';

  constructor() { }

  ngOnInit(): void {
  }

}

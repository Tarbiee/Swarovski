import { Component, OnInit } from '@angular/core';
import { Jewelry } from '../services/models/jewelry';
import { JewelsService } from '../services/jewels.service';

@Component({
  selector: 'app-jewels',
  templateUrl: './jewels.component.html',
  styleUrl: './jewels.component.css'
})
export class JewelsComponent implements OnInit {
  //array to store jewels
  jewels: Jewelry[] = [];

  constructor(
    private service:JewelsService 
  ) {}

  ngOnInit(): void {
    this.service.getAllJewels().
    subscribe({
      next:(data: Jewelry[]) =>{
        console.log(data)
        this.jewels = data;
      }
    })
  }

}

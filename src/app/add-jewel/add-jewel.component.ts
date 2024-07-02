import { Component } from '@angular/core';
import { Jewelry } from '../services/models/jewelry';
import { JewelsService } from '../services/jewels.service';

@Component({
  selector: 'app-add-jewel',
  templateUrl:'./add-jewel.component.html',
  styleUrl: './add-jewel.component.css'
})
export class AddJewelComponent {
  jewel: Jewelry = {
    name: '',
    image: '',
    material: '',
    price: 0,
    description: '',
  }

  constructor(
    private service: JewelsService
  ) { }

  onSubmit(): void{
    this.service.createJewel(this.jewel).
    subscribe({
      next: (result: Jewelry) => {
        console.log('Product created successfully:', result);
        this.jewel = {
          name: '',
          image: '',
          material: '',
          price: 0,
          description: '',
        };
      }
    })

  }

  

}

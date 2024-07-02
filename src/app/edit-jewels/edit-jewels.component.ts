import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jewelry } from '../services/models/jewelry';
import { JewelsService } from '../services/jewels.service';

@Component({
  selector: 'app-edit-jewels',
  templateUrl: './edit-jewels.component.html',
  styleUrls: ['./edit-jewels.component.css']
})
export class EditJewelsComponent implements OnInit {

  jewel: Jewelry = {
    name: '',
    description: '',
    material: '',
    image: '',
    price: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jewelsService: JewelsService
  ) {}

  ngOnInit(): void {
    const jewelId = this.route.snapshot.params['id'];
    this.jewelsService.editJewel(jewelId)
      .subscribe({
        next: (jewel: Jewelry) => {
          this.jewel = jewel;
        },
        error: (err) => {
          console.error('Error fetching jewel:', err);
        }
      });
  }

  onEdit(): void {
    this.jewelsService.updateJewel(this.jewel)
      .subscribe({
        next: (updatedJewel: Jewelry) => {
          console.log('Jewel updated successfully:', updatedJewel);
          // Optionally, navigate to another route or show a success message
          this.router.navigate(['/jewels']);
        },
        error: (err) => {
          console.error('Error updating jewel:', err);
          // Handle error scenario
        }
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { JewelsService } from '../services/jewels.service';
import { Jewelry } from '../services/models/jewelry';

@Component({
  selector: 'app-jewels',
  templateUrl: './jewels.component.html',
  styleUrls: ['./jewels.component.css']
})
export class JewelsComponent implements OnInit {
  jewels: Jewelry[] = [];

  constructor(private service: JewelsService) {}

  ngOnInit(): void {
    this.service.getAllJewels().subscribe({
      next: (data: Jewelry[]) => {
        this.jewels = data;
      },
      error: (err) => {
        console.error('Error fetching jewels:', err);
      }
    });
  }

  onDelete(id: number | undefined): void {
    if (id === undefined) {
      console.error('Jewel ID is undefined');
      return;
    }

    this.service.deleteJewel(id).subscribe({
      next: () => {
        this.jewels = this.jewels.filter(jewel => jewel.id !== id);
        console.log('Jewel deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting jewel:', err);
      }
    });
  }
}

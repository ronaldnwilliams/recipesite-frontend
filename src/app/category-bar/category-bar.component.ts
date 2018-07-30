import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-bar',
  templateUrl: './category-bar.component.html',
  styleUrls: ['./category-bar.component.css']
})
export class CategoryBarComponent implements OnInit {
  @Input() categories; 
  @Output() changed = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() { }

  onCategoryChange(category: string) {
    this.changed.emit(category);
  }

}

import {Component, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public inputValue: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  search() {
    // console.log(this.inputValue);
    this.dataService.setState(this.inputValue);
    this.inputValue = '';
  }
}

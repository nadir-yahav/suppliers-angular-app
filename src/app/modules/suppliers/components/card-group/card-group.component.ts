import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "card-group",
  templateUrl: "./card-group.component.html"
})
export class CardGroupComponent implements OnInit {
  @Input() model: any;
  @Input() searchText: String;
  constructor() {}

  ngOnInit() {}
}

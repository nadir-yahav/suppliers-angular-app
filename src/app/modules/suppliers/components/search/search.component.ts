import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "search",
  templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
  @Output("onSearch") event = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  handleSubmit(input) {
    this.event.emit(input);
  }
}

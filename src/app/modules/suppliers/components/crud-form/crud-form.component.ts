import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Supplier } from "../../resources/supplier.resource";
import { Attribute } from "../../resources/attribute.resource";

@Component({
  selector: "crud-form",
  templateUrl: "./crud-form.component.html"
})
export class CrudFormComponent implements OnInit {
  @Input() model: Supplier;
  private _attr: Attribute[];
  get attr(): Attribute[] {
    return this._attr;
  }
  @Input()
  set attr(val) {
    this._attr = this.setSelectedAttr(val);
  }
  @Output("onSubmit") event = new EventEmitter();
  Object = Object;

  constructor() {}

  ngOnInit() {}

  private _isEditMode: boolean = false;
  get isEditMode(): boolean {
    return this._isEditMode || this.isNew;
  }
  set isEditMode(isEdit) {
    this._isEditMode = isEdit;
  }

  get isNew(): boolean {
    return this.model.id === undefined;
  }
  isObject(val) {
    return typeof val === "object";
  }
  handleSubmit() {
    this.updateModelAttr();
    this.event.emit();
  }

  setSelectedAttr(val): any[] {
    return val.map(a => {
      const found = this.model.attributes.find(m => m === a.id);
      found ? (a.selected = true) : (a.selected = false);
      return a;
    });
  }
  updateModelAttr() {
    this.model.attributes = this.attr.filter(a => a["selected"]).map(a => a.id);
  }
}

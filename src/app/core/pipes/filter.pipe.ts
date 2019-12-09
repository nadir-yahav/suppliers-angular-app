import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    return items.filter(item => {
      return Object.keys(item).some(key => {
        if (item[key] && typeof item[key] == "string")
          return item[key].toLowerCase().includes(searchText.toLowerCase());
      });
    });
  }
}

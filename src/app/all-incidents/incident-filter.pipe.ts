import { Pipe, PipeTransform } from '@angular/core';
import { AllIncidentsComponent } from './all-incidents.component';

@Pipe({
  name: 'incidentFilter'
})
export class IncidentFilterPipe implements PipeTransform {

  constructor(private incident:AllIncidentsComponent) {}

  transform(value: any, type:any, time:any, location:any, description:any) {
    if (!value) {
      return value;
    }
    return value.filter(item => {
      if (item.type && item.time && item.location && item.description) {
        return item.type.toLowerCase().includes(type.toLowerCase()) && item.time.toLowerCase().includes(time.toLowerCase()) && item.location.toString().includes(location) && item.description.toLowerCase().includes(description.toLowerCase());
      }
    })
  }

}
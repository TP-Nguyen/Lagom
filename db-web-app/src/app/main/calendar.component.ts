// import { Component, ViewEncapsulation } from '@angular/core';
// import { IntlService } from '@progress/kendo-angular-intl';
// import { CalendarView } from '@progress/kendo-angular-dateinputs';

// @Component({
//   encapsulation: ViewEncapsulation.None,
//   selector: 'my-calendar',
//   template: 
//   `
//     <div class="container-fluid">
//         <div class="row">
//             <kendo-calendar
//                 (blur)="onBlur()"
//                 (focus)="onFocus()"
//                 (activeViewChange)="onActiveViewChange($event)"
//                 (activeViewDateChange)="onActiveDateChange($event)"
//                 (valueChange)="onChange($event)"
//             >
//             </kendo-calendar>
//             <event-log title="Event log" [events]="events">
//             </event-log>
//         </div>
//     </div>
//   `
// })
// export class AppComponent {
//   public events: string[] = [];

//   constructor(private intl: IntlService) {}

//   public onActiveDateChange(value: Date): void {
//     this.log('activeDateChange', value);
//   }

//   public onActiveViewChange(view: CalendarView): void {
//     this.events = [`activeViewChanged: ${view}`].concat(this.events);
//   }

//   public onBlur(): void {
//     this.log('blur');
//   }

//   public onFocus(): void {
//     this.log('focus');
//   }

//   public onChange(value: Date): void {
//     this.log('change', value);
//   }

//   private log(event: string, value?: Date): void {
//     this.events = [`${event}${this.formatValue(value)}`].concat(this.events);
//   }

//   private formatValue(value?: Date): string {
//     return value ? ` - ${this.intl.formatDate(value, 'd')}` : '';
//   }
// }

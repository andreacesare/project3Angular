import {Component, ElementRef, inject, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
  '(click)': 'onClick()'

  }
})
export class ControlComponent {
  label=input.required<string>();
  private el=inject(ElementRef);

  onClick(){
    console.log("Bro, you clicked!");
    console.log(this.el);
  }

}

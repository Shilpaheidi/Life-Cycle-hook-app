import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements 
  OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, 
  OnDestroy {

  @Input() inputData: string = '';

  // ngOnChanges - Triggered when an input property changes
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Called when input properties change');
    console.log(changes);
  }

  // ngOnInit - Called once when the component is initialized
  ngOnInit() {
    console.log('ngOnInit: Called once after the component is initialized');
  }

  // ngDoCheck - Called during every change detection run
  ngDoCheck() {
    console.log('ngDoCheck: Called during every change detection run');
  }

  // ngAfterContentInit - Called after content is projected into the component
  ngAfterContentInit() {
    console.log('ngAfterContentInit: Called after content has been projected into the component');
  }

  // ngAfterContentChecked - Called after content has been checked
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked: Called after content has been checked');
  }

  // ngAfterViewInit - Called once after the component's view is initialized
  ngAfterViewInit() {
    console.log('ngAfterViewInit: Called once after the component’s view has been initialized');
  }

  // ngAfterViewChecked - Called after the component's view is checked
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked: Called after every check of the component’s view');
  }

  // ngOnDestroy - Called when the component is destroyed
  ngOnDestroy() {
    console.log('ngOnDestroy: Called when the component is destroyed');
  }
}

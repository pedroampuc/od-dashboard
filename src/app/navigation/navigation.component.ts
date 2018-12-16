import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import {Breakpoints, BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  screenChanges: any;
  layoutChanges: any;
  breakpointObserverInst: any;
  matcher: MediaQueryList;
  logoMatcher: MediaQueryList;
  private _mobileQueryListener: () => void;
  private _mobileQueryListener2: () => void;

  constructor(public breakpointObserver: BreakpointObserver,
    public mediaMatcher: MediaMatcher,
    public changeDetectorRef: ChangeDetectorRef) {


    this.matcher = this.mediaMatcher.matchMedia('(min-width: 600px)');
    this.logoMatcher = this.mediaMatcher.matchMedia('(max-width: 319px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this._mobileQueryListener2 = () => changeDetectorRef.detectChanges();
    this.matcher.addListener(this._mobileQueryListener);
    this.logoMatcher.addListener(this._mobileQueryListener2);
    this.layoutChanges = this.breakpointObserver.observe(['(min-width: 320px)', '(max-width: 1000px)']);
    this.screenChanges = this.layoutChanges.subscribe((result: BreakpointState) => {
    });
    this.breakpointObserverInst = interval(1000).subscribe((x) => {
        if (this.breakpointObserver.isMatched('(max-width: 600px)')) {
          console.log('tela max que 600px');
        } else {
          console.log('tela maior que 600px');
        }
      }); // fim interval
   }// fim constructor

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('ngOnDestry cahamdo');
    this.matcher.removeListener(this._mobileQueryListener);
  }

  myListener(event) {
    console.log(event);
    console.log(event.matches ? 'match' : 'no match');
  }

  buttonClick() {
    var btn = document.getElementById('ds1');
    console.log(btn.focus());
    btn.focus();
    //if (btn.classList.contains)

  }

}

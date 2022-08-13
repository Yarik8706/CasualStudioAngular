import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CasualStudioAngular';
  @ViewChild('close_container') close_container:ElementRef;

  changeMenuState(){
    if(this.close_container.nativeElement.style.display === 'none'){
      this.close_container.nativeElement.style.display = 'block';
    } else {
      this.close_container.nativeElement.style.display = 'none';
    }
  }
}

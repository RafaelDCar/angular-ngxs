import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from 'src/app/store/actions/tutorial.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent  {

  constructor(private store: Store) { }

  addTutorial(name, url) {
    this.store.dispatch(new AddTutorial({name, url}));
  }
}

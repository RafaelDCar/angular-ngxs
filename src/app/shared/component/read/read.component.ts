import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/app/store/models/tutorial.model';
import { RemoveTutorial } from 'src/app/store/actions/tutorial.actions';
import { TutorialState } from 'src/app/store/state/tutorial.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent {

  // tutorials$: Observable<Tutorial>;
  @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial>;


  constructor(private store: Store) {
    // this.tutorials$ = this.store.select(state => state.tutorials.tutorials);
  }

  delTutorial(name) {
    this.store.dispatch(new RemoveTutorial(name));
  }



}

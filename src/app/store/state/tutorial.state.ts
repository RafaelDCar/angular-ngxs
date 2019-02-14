import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.actions';
import { Tutorial } from '../models/tutorial.model';


export class TutorialStateModel {
  tutorials: Tutorial[];
}

@State<TutorialStateModel>({
  name: 'tutorials',
  defaults: {
    tutorials: []
  }
})

export class TutorialState {

  @Selector() static getTutorsials(state: TutorialStateModel) {
    return state.tutorials;
  }

  @Action(AddTutorial) add({ getState, patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
    const state = getState();
    patchState({
      tutorials: [...state.tutorials, payload]
    });
  }

  @Action(RemoveTutorial) remove({ getState, patchState }: StateContext<TutorialStateModel>, { name }: RemoveTutorial) {
    patchState({
      tutorials: getState().tutorials.filter(a => a.name !== name)
    });
  }

}






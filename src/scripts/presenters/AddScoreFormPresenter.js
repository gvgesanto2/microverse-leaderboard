import { addScoreToGame } from '../services/api.js';
import FormViewManager from '../views/view-managers/FormViewManager.js';

export default class AddScoreFormPresenter {
  constructor(addScoreFormId) {
    this.addScoreFormViewManager = new FormViewManager(addScoreFormId);
  }

  init = () => {
    this.addScoreFormViewManager.addEventHandler((event) => {
      event.preventDefault();
      addScoreToGame({
        user: this.addScoreFormViewManager.getInputValueByName('name'),
        score: this.addScoreFormViewManager.getInputValueByName('score'),
      });
      this.addScoreFormViewManager.clearInputs();
    });
  };
}

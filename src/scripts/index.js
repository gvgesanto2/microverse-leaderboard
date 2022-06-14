/* eslint-disable import/prefer-default-export */
import '../styles/main.scss';
import AddScoreFormPresenter from './presenters/AddScoreFormPresenter.js';
import RefreshBtnPresenter from './presenters/RefreshBtnPresenter.js';
import ScoresListPresenter from './presenters/ScoresListPresenter.js';
import { getGameScores } from './services/api.js';

const SCORES_LIST_CONTAINER_ID = 'scores-list-container';
const ADD_SCORE_FORM_ID = 'add-score-form';
const REFRESH_BTN_ID = 'refresh-btn';

getGameScores().then((scores) => {
  const scoresListPresenter = new ScoresListPresenter(
    SCORES_LIST_CONTAINER_ID,
    scores,
  );
  scoresListPresenter.build();
  const addScoreFormPresenter = new AddScoreFormPresenter(ADD_SCORE_FORM_ID);
  addScoreFormPresenter.init();
  const refreshBtnPresenter = new RefreshBtnPresenter(REFRESH_BTN_ID);
  refreshBtnPresenter.init(scoresListPresenter.refresh);
});

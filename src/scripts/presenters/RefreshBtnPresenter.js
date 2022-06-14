import { getGameScores } from '../services/api.js';
import RefreshBtnViewManager from '../views/view-managers/RefreshBtnViewManager.js';

export default class RefreshBtnPresenter {
  constructor(refreshBtnId) {
    this.refreshBtnViewManager = new RefreshBtnViewManager(refreshBtnId);
  }

  init = (handleRefreshScoresList) => {
    this.refreshBtnViewManager.addEventHandler(async () => {
      const newScores = await getGameScores();
      handleRefreshScoresList(newScores);
    });
  }
}

import ViewManager from './ViewManager.js';

export default class RefreshBtnViewManager extends ViewManager {
  addEventHandler = (callback) => {
    this.htmlElem.addEventListener('click', callback);
  };
}

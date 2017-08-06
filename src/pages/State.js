import { observable } from 'mobx';
class State {
  @observable
  capacityList = null;
  @observable
  countList = null;
  constructor(capacityList, countList) {
    this.capacityList = capacityList;
    this.countList = countList;
  }
}
const state = new State([10, 10, 10, 10, 10], [0, 2.5, 5, 7.5, 10]);
export { state };
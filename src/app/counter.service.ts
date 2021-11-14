export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  setInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active counter: ', this.inactiveToActiveCounter);
  }

  setActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive counter: ', this.activeToInactiveCounter);
  }
}

abstract class Appliance{
  abstract turnOn(): void
  abstract turnOff(): void
}

class WashingMachine extends Appliance {
  turnOn(): void {
      console.log('The washing machine is on');
      
  }
  turnOff(): void {
      console.log('The washing machine is off');
      
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
      console.log('The refrigerator is on');
      
  }
  turnOff(): void {
      console.log('The refrigerator is off');
      
  }
}

const technique: Appliance[] = [new WashingMachine(), new Refrigerator()]
technique.forEach(unit => {
  unit.turnOn()
  unit.turnOff()
})

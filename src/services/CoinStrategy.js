
import { executeSpecificLuckGenerator } from './LuckGenerator';
class AbstractStrategy {
    getResult() {}
}

class StrategySolution {
    constructor(strategy) {
        this.strategy = strategy;
    }

    get resultStrategy() {
        return () => this.strategy.getResult()
    }

}

class HeadsSide extends AbstractStrategy{
    getResult () {
        return '15'
    }
}

class TailsSaid extends AbstractStrategy{
   getResult () {
       return '12'
    }
}

export const selectStrategy = () => {
	let sideType = executeSpecificLuckGenerator("Coin")
	console.log('sideType', sideType)
	switch (sideType) {
		case "Heads":
			return new StrategySolution(new HeadsSide()).resultStrategy();
		case "Tails":
			return new StrategySolution(new TailsSaid()).resultStrategy();
		default:
			return new StrategySolution(new TailsSaid()).resultStrategy();
	}
}
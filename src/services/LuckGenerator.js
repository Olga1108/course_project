class LuckGenerator {
    getType() {
        throw new Error('Method not implemented.');
    }

    generateNext() {
        throw new Error('Method not implemented.');
    }
}

class DefaultLuckGenerator extends LuckGenerator {
    getType() {
        return "Default";
    }

    generateNext() {
        return 0;
    }
}

class CoinLuckGenerator extends LuckGenerator {
    getType() {
        return "Coin";
    }

    generateNext() {
        let randomValue = (Math.floor((Math.random() * 2) + 1)) === 1 ? "Heads" : "Tails";
        return randomValue;
    }
}

class LuckFactory {
    getLuckGenerator(name) {
        switch (name) {
            case "Coin":
                return new CoinLuckGenerator();
            default:
                return new DefaultLuckGenerator();
        }
    }
}

export function executeSpecificLuckGenerator(luckType) {
    console.log(`Testing luck generator of type '${luckType}'`);

    let luckGenerator = new LuckFactory().getLuckGenerator(luckType);

    for (let iteration = 0; iteration < 3; iteration++) {
        console.log(`Test #${iteration}, LuckGenerator '${luckGenerator.getType()}': ${luckGenerator.generateNext()}`);
    }
    return luckGenerator.generateNext()
}
// executeSpecificLuckGenerator("Coin");
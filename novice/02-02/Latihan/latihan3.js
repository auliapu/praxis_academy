class Pokemon {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    say() {
        return `${this.name} is super effective.`;
    }
}

let pokemon1 = new Pokemon('Garchomp', 'Ground-Dragon', 'Earthquake');
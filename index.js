class Unit {
	constructor(name, health) {
		this.nameUnit = name;
		this.healthUnit = health;
		this.rechargeTimeUnit = 1000 * this.healthUnit / 100;
		this.criticalChanceUnit = 10 - this.healthUnit / 10;
		this.damageUnit = this.healthUnit / 100;
	}

	rechargeForAttack(units) {
		const call = this;
		function caller() { return call.napadi(units); }
		setTimeout(caller, this.rechargeTimeUnit);
	}

	attack(otherUnits) {
		const len = otherUnits.length;
		const otherUnit = otherUnits.filter(unit => unit.nameUnit !== this.name);
		const rand = Math.floor(Math.random() * (len));

		if (otherUnit[rand].criticalChanceUnit >= Math.floor(Math.random() * (100)) + 1) {
			this.damageUnit *= 2;
			console.log(`critical hit for ${otherUnit[rand].nameUnit} team`);
		}

		otherUnit[rand].healthUnit -= this.damageUnit;
		console.log(`UNIT ${this.name} ATTACK ==> ${otherUnit[rand].name} , health : ${otherUnit[rand].healthUnit}`);
		return this.rechargeForAttack(otherUnit);
	}

	napadi(teams) {
		let teamForAttack = teams.filter(unit => unit.nameUnit !== this.nameUnit);
		teamForAttack = teamForAttack.filter(unit => unit.healthUnit > 0);
		if (this.healthUnit > 0 && teamForAttack.length < 1) {
			console.log(`Tim ${this.name} is winner!`);
		} else if (this.healthUnit <= 0) {
			console.log(`${this.nameUnit} is out`);
		} else {
			return this.attack(teamForAttack);
		}
	}


	get name() { return this.nameUnit; }

	set name(name) { this.nameUnit = name; }


	get health() { return this.healthUnit; }

	set health(health) { this.healthUnit = health; }


	get rechargeTime() { return this.rechargeTimeUnit; }

	set rechargeTime(health) { this.rechargeTimeUnit = 1000 * health / 100; }


	get damage() { return this.damageUnit; }

	set damage(health) { this.damageUnit = health / 100; }


	get criticalChance() { return this.criticalChanceUnit; }

	set criticalChance(health) { this.criticalChanceUnit = 10 - health / 10; }
}

const unit1 = new Unit('ALFA', 20);
const unit2 = new Unit('BETA', 20);
const unit3 = new Unit('GAMA', 20);
const unit4 = new Unit('DELTA', 20);
const unit5 = new Unit('EPSILON', 20);
const timovi = [unit1, unit2, unit3, unit4, unit5];


timovi.forEach(x => x.rechargeForAttack(timovi));

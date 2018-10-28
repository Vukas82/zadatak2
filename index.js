function start() {
	function dam(x) {
		return x.health / 100;
	}
	function critical() {
		const crChDabl = Math.random(0, 100);
		const crCh = 10 - this.health / 10;
		if (crChDabl === crCh) { return crCh * 2; } return crCh;
	}

	const tim1 = {
		name: 'A L F A',
		health: 100,
		damage: dam,
		criticalChance: critical,
	};
	const tim2 = {
		name: 'B E T A',
		health: 100,
		damage: dam,
		criticalChance: critical,
	};
	const tim3 = {
		name: 'G A M A',
		health: 100,
		damage: dam,
		criticalChance: critical,
	};
	const tim4 = {
		name: 'D E L T A',
		health: 100,
		damage: dam,
		criticalChance: critical,
	};
	const tim5 = {
		name: 'E P S I L O N',
		health: 100,
		damage: dam,
		criticalChance: critical,
	};

	const sviTimovi = [tim1, tim2, tim3, tim4, tim5];

	console.log(`${sviTimovi.length}  JE BROJ TIMOVA NA POCETKU`);


	function izborTima() { // random bira TIM    I  AKTIVIIRA FUNKCIJU NAPADA                !!!!!!!!!!!!!!!!!
		const timovi = sviTimovi;
		const a = timovi[Math.floor(Math.random() * timovi.length)];
		const b = timovi[Math.floor(Math.random() * timovi.length)];
		if (a === b) { return izborTima(); }
		if (timovi.length === 2) { console.error(' IGRA JE GOTOVA !!'); console.log(` preostali timovi su : ${a.name} i ${b.name}`); }
		console.log(`IZABRANI TIMOVI SU : ${a.name}  I  ${b.name}`);
		console.log(`health ${a.name} je : ${a.health}`);
		console.log(`health ${b.name} je : ${b.health}`);
		console.log(`damage ${a.name} je : ${a.damage(a)}`);
		console.log(`damage ${b.name} je : ${b.damage(b)}`);
		console.log(`criticalChance ${a.name} je : ${a.criticalChance(a)}`);
		console.log(`criticalChance ${b.name} je : ${b.criticalChance(b)}`);
		dam(a, b);
		function recharge() {
			function napad() {
				console.log(`${b.name}    NAPADA ==>>    ${a.name}`);
				console.log(`HEALT PRE NAPADA ${a.name}: ${a.health}`);
				a.health -= b.damage(b);
				if (sviTimovi.length <= 2) { console.error(' IGRA JE GOTOVA !!'); console.log(` preostali timovi su : ${b.name} i ${b.name}`); return; }
				if (a.health <= 0) { sviTimovi.splice(sviTimovi.indexOf(a.name), 1); } else { console.log(`HEALT POSLE NAPADA ${a.name}: ${a.health}`); }
				console.log(`${sviTimovi.length}  JE BROJ TIMOVA NA KRAJU`);
				console.log(sviTimovi);

				izborTima();
			}
			napad(a, b);
		}
		setTimeout(recharge, 1000 * ((a.health) / 100)); // setInt ZA FUN RECHARGE KOJA POZIVA NAPAD
		return (a.name, b.name);
	}
	izborTima(); //    OVDDE SE POZIVA FUN IZBOR TIMA     !!!!!!!!!!!!!!!!!!
	console.log(izborTima);
}
start();

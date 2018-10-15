start()
function start() {



var Tim_1 = {
        name: 'A L F A',
        health: 100,
        damage : dam,              
        criticalChance: critical  
};    
var Tim_2 = {
        name: 'B E T A',
        health: 100,
        damage : dam,              
        criticalChance: critical  
};
var Tim_3 = {
        name: 'G A M A',
        health: 100,
        damage : dam,              
        criticalChance: critical  
};
var Tim_4 = {
        name: 'D E L T A',
        health: 100,
        damage : dam,              
        criticalChance: critical  
};
var Tim_5 = {
        name: 'E P S I L O N',
        health: 100,
        damage : dam,              
        criticalChance: critical  
};

var sviTimovi = [Tim_1,Tim_2,Tim_3,Tim_4,Tim_5]

console.log(sviTimovi.length+'  JE BROJ TIMOVA NA POCETKU')

izborTima()      //    OVDDE SE POZIVA FUN IZBOR TIMA     !!!!!!!!!!!!!!!!!!

function izborTima() { //random bira TIM    I  AKTIVIIRA FUNKCIJU NAPADA                !!!!!!!!!!!!!!!!!

        var timovi = sviTimovi;      
        var a = timovi[Math.floor(Math.random() * timovi.length)]
        var b = timovi[Math.floor(Math.random() * timovi.length)]
        if(a === b){return izborTima()}
        else if(timovi.length === 2){console.error(' IGRA JE GOTOVA !!');console.log(' preostali timovi su : '+ a.name+' i '+b.name);return} 
        else{console.log('IZABRANI TIMOVI SU : '+a.name+'  I  '+b.name)}
        console.log('health '+a.name+' je : '+a.health)
        console.log('health '+b.name+' je : '+b.health)
        console.log('damage '+a.name+' je : '+a.damage(a))
        console.log('damage '+b.name+' je : '+b.damage(b))
        console.log('criticalChance '+a.name+' je : '+a.criticalChance(a))     
        console.log('criticalChance '+b.name+' je : '+b.criticalChance(b))     
        dam(a,b)
    
        var rc = setTimeout(recharge, 1000 * ((a.health)/100)); // setInt ZA FUN RECHARGE KOJA POZIVA NAPAD
    
function recharge(x,y){
        napad(a,b)
}    
}
function dam(x,y){ 
         return  x.health/100;
}
function napad(x,y){    
        console.log(y.name+'    NAPADA ==>>    '+x.name)
        console.log("HEALT PRE NAPADA "+x.name+': '+x.health)              
        x.health = x.health - y.damage(y) ;                         
        if(sviTimovi.length <= 2){console.error(' IGRA JE GOTOVA !!');console.log(' preostali timovi su : '+ y.name+' i '+y.name); return }
        else if(x.health <= 0){sviTimovi.splice( sviTimovi.indexOf(x.name), 1 ) }else{console.log("HEALT POSLE NAPADA "+x.name+': '+x.health)}
        console.log(sviTimovi.length+'  JE BROJ TIMOVA NA KRAJU')
        console.log(sviTimovi);
      
       izborTima()
                   }                                            
function critical(){
        var crChDabl = Math.random(0,100)  
        var crCh = 10 - this.health/10
        if(crChDabl === crCh){return crCh*2;console.warn(this.name+' DABL DAMAGE !!!!')}else {return crCh} 
}
}

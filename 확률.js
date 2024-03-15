function PercentRandom(Names, Percent){    
  if(Names.length !== Percent.length){ return false; } //없어도 되긴 하는데 넣는걸 추천드립니다.    
  const TotalPercent = Percent.reduce((x, y) => x + y, 0);   
  let number = Math.random() * TotalPercent;   
  for (i in Names){        
    number -= Percent[i];        
    if (number <= 0) {        
      return Names[i];     
    }    
  }
}

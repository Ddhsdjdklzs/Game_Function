function ultrabar(number, maximum, lengthofbar){

  var nowbar = (lengthofbar * (number / maximum));
  var rest = (nowbar % 1);

  if(number < 0){return ('[' + ('▒'.repeat(lengthofbar) + '] ' + '(' + maximum + ' / ' + number + ')'));}    
  if(number > maximum||number == maximum){return ('[' + ('█'.repeat(lengthofbar) + '] ' + '(' + maximum + ' / ' + number + ')'));}    
  if((nowbar % 1) != 0){return ('[' + ('█'.repeat((nowbar - rest))) + ('░'.repeat(lengthofbar - (nowbar - rest))) + '] ' + '(' + maximum + ' / ' + number + ')');}
  if((nowbar % 1) == 0){return ('[' + ('█'.repeat(nowbar))) + ('░'.repeat(lengthofbar - nowbar) + '] ' + '(' + maximum + ' / ' + number + ')');}
}

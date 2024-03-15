function tem(str){

  const reg = /\${(\w+)}/g;

  const matches = str.match(reg);

  for(i in matches){

    const match = matches[i];

    const variableName = match.substring(2, match.length - 1);

    const variableValue = eval(variableName);

    str = str.replace('${' + variableName + '}', variableValue);

  }  

  return str;

}

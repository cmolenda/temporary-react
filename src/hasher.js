export default (input) => {
  console.log('COSTLY CALCULATION');
  return(String(input) + String(Math.floor(Math.random() * 1000)));
}

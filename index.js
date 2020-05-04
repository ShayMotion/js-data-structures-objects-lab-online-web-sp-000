// Write your solution in this file!
var driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
  return Driver.assign({},driver,{[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
    var newDriver =  Driver.assign({},driver);
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}


// Write your solution in this file!
var driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
  return driver.assign({},driver,{[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key, value){
    var newDriver =  Object.assign({},object)
  delete newObj[key]
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
  
  return driver;
}


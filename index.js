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
  
  return driver;
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
  
  return driver;
}


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
    var newDriver =  driver.assign({},driver)
  delete newDriver[key]
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
  delete driver[key]
  return driver;
}


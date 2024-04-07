class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }
  
    get celsius() {
        return this._celsius;
    }
  
    set celsius(value) {
        if (value < -273.15) {
            throw new Error('Temperature cannot be below absolute zero.');
        }
        this._celsius = value;
    }
  
    get fahrenheit() {
        return (this._celsius * 9 / 5) + 32;
    }
  }
  
  const myTemp = new Temperature(25);
  console.log(myTemp.celsius);    // Access the celsius property using the getter.
  console.log(myTemp.fahrenheit); // Calculate and access the fahrenheit property using the getter.
  
  myTemp.celsius = 30; // Set the celsius property using the setter.
  console.log(myTemp.celsius);    // Access the modified celsius property.
  console.log(myTemp.fahrenheit); // Calculate and access the modified fahrenheit property.
  
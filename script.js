//1. Class - Movie

//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13” 
  


class movie{
    constructor(title,studio,rating = "Pg"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

var movie1 = new movie("Casino Royale","Eon Productions","PG­13");
var movie2 = new movie("Casino Royale","Eon Productions")

console.log(movie1.title)
console.log(movie1.rating)
console.log(movie1.studio)

console.log(movie2.title)


//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md


class circle{
    constructor(radius,color){
       this.radius = radius;
       this.color = color;
    }

    get radiuscircle(){
       return this.radius;
    }
  
    set radiuscircle(radius){
        this.radius = radius;
    }

    get colorcircle(){
        return this.color;
    }


    set colorcircle(color){
        this.color = color;
    }

    get toString(){
        return `"Circle[radius=${this.radius},colors=${this.color}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }

}

var obj = new circle(1.0,"red")

console.log(obj.radiuscircle);
obj.radiuscircle = 2.2
console.log(obj.radiuscircle);

console.log(obj.colorcircle);
obj.colorcircle = "blue";
console.log(obj.colorcircle);

console.log(obj.toString);

console.log(obj.areaCircle);

console.log(obj.circumferenceCircle);



//3. Write a “person” class to hold all the details.


class person{
    constructor(firstname,lastname,Dob,location){

        this.firstname = firstname;
        this.lastname = lastname;
        this.Dob = Dob;
        this.location = location;

    }
}


var person1 = new person("prasnth","raj","09-10-1999","chennai-25")
var person2 = new person("naveen","raj","16-07-1998","chennai-55")

console.log(person1.firstname)
console.log(person1.lastname)
console.log(person1.Dob)
console.log(person1.location)


console.log(person2.firstname)
console.log(person2.lastname)
console.log(person2.Dob)
console.log(person2.location)

console.log(`All the Person Names are "person1" : ${person1.firstname}
"person2":${person2.firstname}`)


console.log(`all the person name are "person1:${person1.Dob}"`)


//4. write a class to calculate the uber price.

class UberPriceCalculator {
    constructor() {
      this.baseFare = 50;
      this.costPerKilometer = 20;
      this.costPerMinute = 2.5;
      this.bookingFee = 40;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      // Calculate the fare based on distance and time
      var distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;
  
      // Calculate the total price
      var totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;
  
      return totalPrice;
    }
  }
  
  // Example usage:
  var calculator = new UberPriceCalculator();
  var distanceInKilometers = 6.0; // Distance in kilometers
  var timeInMinutes = 10; // Time in minutes
  
  var estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);
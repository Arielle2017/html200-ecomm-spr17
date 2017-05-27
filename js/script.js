
  /*

template.signup.events({
  "submit form" (event, template) {
    event.preventDefault();

    let user={
      email: template.find("[name="emailAddress"]").value,
      password: template.find("[name="password"]").value
    };


   //for later, set up user email confirmation process
    Account.createUser (user, (error)=>{
      if (error){
        Bert.alert(error.reason, "danger");
      } else {
        Meteor.call ("sendVerificationLink", (error, response)=> {
          if (error) {
            Bert.alert (error.reason, "danger");
          } else {
            Bert.alert ("Welcome!", "success");
          }
        });
      }
    });
  }
}); */






/* hw5 */
function capture() {
  event.preventDefault(); //to tell JS not to respond to the default setup, which will slow the loading; stay here, so it can load faster (reletevely)
  console.log (document.customerInfo.email.value + ", thank you for signing up. Welcome on board!");
}


addToCart;
function addToCart () {
    var allItems = ["add01", "add02", "add03", "add04", "add05", "add06", "add07", "add08"];
    var addItems = document.getElementById("allItems.[i]");
    for (var i= 0; i<allItems.length; i++) {
      allItems[i].onclick=showAnswer;
    }
}

function showAnswer (eventObj) {
  var newItem = eventObj.target;
  cart = newItem.length;
  console.log ("You have" +cart+ " items in cart.");
}

/* add shopping cart
function addPrice () {
  event.preventDefault(); //to tell JS not to respond to the default setup, which will slow the loading; stay here, so it can load faster (reletevely)

var element = document.getElementsByTag();
element.onclick=function(){
  event.preventDefault();
  function myFunction() {

  }
}

e.onclick = myFunction;
*/


/*
var $ =funtion (selector){
  return document.queySelector(selector);
};

var cart=[(products.price)];

$(" .add").click(function(e) {
var price = $(e.target.parentElement).find(".price").text();

cart.push({
  price: price
});

console.log(cart); myFunction();
*/


/*
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]
*/

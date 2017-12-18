// var Book = function(name, price) {
//   let priceChanging = [];
//   let priceChanged = [];
//   this.name = function(val) {
//     return name;
//   };
//   this.price = function(val) {
//     if (val !== undefined && val !== price) {
//       for (let i = 0; i < priceChanging.length; i++) {
//         if (!priceChanging[i](this, val)) {
//           return price;
//         }
//       }
//       price = val;
//       for (let i = 0; i < priceChanged.length; i++) {
//         priceChanged[i](this);
//       }
//     }
//     return price;
//   };
//   this.onPriceChanging = function(callback) {
//     priceChanging.push(callback);
//   };
//   this.onPriceChanged = function(callback) {
//     priceChanged.push(callback);
//   };
// };

class Book {
  constructor(name, price) {
    this.nameX = name;
    this.priceY = price;
    this.priceChanging = [];
    this.priceChanged = [];
  }
  name(val) {
    return this.nameX;
  }
  price(val) {
    if (val !== undefined && val !== this.priceY) {
      for (let i = 0; i < this.priceChanging.length; i++) {
        if (!this.priceChanging[i](this, val)) {
          return this.priceY;
        }
      }
      this.priceY = val;
      for (let i = 0; i < this.priceChanged.length; i++) {
        this.priceChanged[i](this);
      }
    }

    return this.priceY;
  }
  onPriceChanging(cb) {
    this.priceChanging.push(cb);
  }
  onPriceChanged(cb) {
    this.priceChanged.push(cb);
  }
}

var book = new Book('JavaScript Good Parts', 23.99);
console.log('Book name is :' + book.name());
console.log('Book price is :' + book.price());

book.onPriceChanging((b, price) => {
  if (price > 100) {
    console.log('price has gone unexpectedly high');
    return false;
  }
  return true;
});
book.onPriceChanged(b => {
  console.log('book price has changed to :' + b.price());
});

book.price(19.99);
book.price(20);

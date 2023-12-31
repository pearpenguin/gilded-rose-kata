// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function make(name, sellIn, quality) {
  return {
          name: name,
          sellIn: sellIn,
          quality: quality
        };
}

var Item = {
  make: make
};

function updateQuality(items) {
  return items.map(function (item) {
              var newItem = item;
              if (newItem.name !== "Aged Brie" && newItem.name !== "Backstage passes to a TAFKAL80ETC concert") {
                if (newItem.quality > 0 && newItem.name !== "Sulfuras, Hand of Ragnaros") {
                  var init = newItem;
                  newItem = {
                    name: init.name,
                    sellIn: init.sellIn,
                    quality: newItem.quality - 1 | 0
                  };
                }
                
              } else if (newItem.quality < 50) {
                var init$1 = newItem;
                newItem = {
                  name: init$1.name,
                  sellIn: init$1.sellIn,
                  quality: newItem.quality + 1 | 0
                };
                if (newItem.name === "Backstage passes to a TAFKAL80ETC concert") {
                  if (newItem.sellIn < 11 && newItem.quality < 50) {
                    var init$2 = newItem;
                    newItem = {
                      name: init$2.name,
                      sellIn: init$2.sellIn,
                      quality: newItem.quality + 1 | 0
                    };
                  }
                  if (newItem.sellIn < 6 && newItem.quality < 50) {
                    var init$3 = newItem;
                    newItem = {
                      name: init$3.name,
                      sellIn: init$3.sellIn,
                      quality: newItem.quality + 1 | 0
                    };
                  }
                  
                }
                
              }
              if (newItem.name !== "Sulfuras, Hand of Ragnaros") {
                var init$4 = newItem;
                newItem = {
                  name: init$4.name,
                  sellIn: newItem.sellIn - 1 | 0,
                  quality: init$4.quality
                };
              }
              if (newItem.sellIn < 0) {
                if (newItem.name !== "Aged Brie") {
                  if (newItem.name !== "Backstage passes to a TAFKAL80ETC concert") {
                    if (newItem.quality > 0 && newItem.name !== "Sulfuras, Hand of Ragnaros") {
                      var init$5 = newItem;
                      newItem = {
                        name: init$5.name,
                        sellIn: init$5.sellIn,
                        quality: newItem.quality - 1 | 0
                      };
                    }
                    
                  } else {
                    var init$6 = newItem;
                    newItem = {
                      name: init$6.name,
                      sellIn: init$6.sellIn,
                      quality: newItem.quality - newItem.quality | 0
                    };
                  }
                } else if (newItem.quality < 50) {
                  var init$7 = newItem;
                  newItem = {
                    name: init$7.name,
                    sellIn: init$7.sellIn,
                    quality: newItem.quality + 1 | 0
                  };
                }
                
              }
              return newItem;
            });
}

exports.Item = Item;
exports.updateQuality = updateQuality;
/* No side effect */

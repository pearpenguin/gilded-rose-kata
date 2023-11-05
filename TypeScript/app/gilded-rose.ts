const ITEM_SULFURAS = 'Sulfuras, Hand of Ragnaros';
const ITEM_AGED_BRIE = 'Aged Brie';
const ITEM_BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert';
const ITEM_CONJURED = 'Conjured Mana Cake';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItemQuality(item);
    }

    return this.items;
  }

  updateItemQuality(item: Item) {
    if (item.name != ITEM_AGED_BRIE && item.name != ITEM_BACKSTAGE_PASS) {
      if (item.quality > 0) {
        if (item.name != ITEM_SULFURAS) {
          item.quality = item.quality - 1
        }
        if (item.name == ITEM_CONJURED) {
          if (item.quality > 0) {
            item.quality = item.quality - 1;
          }
        }
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1
        if (item.name == ITEM_BACKSTAGE_PASS) {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
        }
      }
    }
    if (item.name != ITEM_SULFURAS) {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != ITEM_AGED_BRIE) {
        if (item.name != ITEM_BACKSTAGE_PASS) {
          if (item.quality > 0) {
            if (item.name != ITEM_SULFURAS) {
              item.quality = item.quality - 1
            }
            if (item.name == ITEM_CONJURED) {
              if (item.quality > 0) {
                item.quality = item.quality - 1
              }
            }
          }
        } else {
          item.quality = item.quality - item.quality
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1
        }
      }
    }
  }
}

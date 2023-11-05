const ITEM_SULFURAS = 'Sulfuras, Hand of Ragnaros';
const ITEM_AGED_BRIE = 'Aged Brie';
const ITEM_BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert';
const ITEM_CONJURED = 'Conjured Mana Cake';

const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

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
      this.updateItem(item);
    }

    return this.items;
  }

  // Resolves the new quality of the given item at the end of the day
  resolveNewItemQuality(item: Item) {
    switch (item.name) {
      case ITEM_AGED_BRIE:
        return Math.min(item.quality + 1, MAX_QUALITY);
      case ITEM_BACKSTAGE_PASS:
        if (item.sellIn <= 0) {
          return 0;
        } else if (item.sellIn <= 5) {
          return Math.min(item.quality + 3, MAX_QUALITY);
        } else if (item.sellIn <= 10) {
          return Math.min(item.quality + 2, MAX_QUALITY);
        } else {
          return Math.min(item.quality + 1, MAX_QUALITY);
        }
      case ITEM_SULFURAS:
        return 80;
      case ITEM_CONJURED:
        return Math.max(item.quality - 2, MIN_QUALITY);
      default:
        return Math.max(item.quality - 1, MIN_QUALITY);
    }
  }

  // Update the given item's SellIn and quality
  updateItem(item: Item) {
    item.quality = this.resolveNewItemQuality(item);
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

import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  describe('Normal item', () => {
    const itemName = 'Apple';
    test('quality should degrade', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 2, 10),
        new Item(itemName, 1, 10),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(9);
      }
    });

    test('quality should degrade twice as fast if expired', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 0, 10),
        new Item(itemName, -1, 10),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(8);
      }
    });

    test('quality is never negative', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 2, 0),
        new Item(itemName, -1, 1),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(0);
      }
    });

    test('SellIn always decreases', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 2, 0),
        new Item(itemName, 0, 0),
        new Item(itemName, -1, 1),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[1].sellIn).toBe(-1);
      expect(items[2].sellIn).toBe(-2);
    });
  });

  describe('Aged Brie', () => {
    const itemName = 'Aged Brie';
    test('quality should increase', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 2, 10),
        new Item(itemName, 1, 10),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(11);
      }
    });

    test('quality should increase x2 if expired', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 0, 10),
        new Item(itemName, -1, 10),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(12);
      }
    });

    test('quality should never be more than 50', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 3, 49),
        new Item(itemName, 0, 50),
        new Item(itemName, -1, 50),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(50);
      }
    });

    test('SellIn always decreases', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 2, 0),
        new Item(itemName, 0, 0),
        new Item(itemName, -1, 1),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[1].sellIn).toBe(-1);
      expect(items[2].sellIn).toBe(-2);
    });
  });

  describe('Sulfuras', () => {
    const itemName = 'Sulfuras, Hand of Ragnaros';
    test('quality is fixed', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 2, 80),
        new Item(itemName, 0, 80),
        new Item(itemName, -1, 80),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
    });
  });

  describe('Backstage passes', () => {
    const itemName = 'Backstage passes to a TAFKAL80ETC concert';
    test('quality should increase >10 days from concert', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 11, 10),
        new Item(itemName, 20, 10),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(11);
      }
    });

    test('quality should increase x2 6-10 days from concert', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 10, 10),
        new Item(itemName, 6, 10),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(12);
      }
    });

    test('quality should increase x3 <6 days from concert', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 5, 10),
        new Item(itemName, 1, 10),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(13);
      }
    });

    test('quality drops to 0 after concert', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 0, 10),
        new Item(itemName, 0, 40),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(0);
      }
    });

    test('quality should never be more than 50', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 3, 49),
        new Item(itemName, 1, 50),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(50);
      }
    });

    test('SellIn always decreases', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 2, 0),
        new Item(itemName, 0, 0),
        new Item(itemName, -1, 1),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[1].sellIn).toBe(-1);
      expect(items[2].sellIn).toBe(-2);
    });
  });

  describe('Conjured', () => {
    const itemName = 'Conjured Mana Cake';
    test('quality should degrade x2', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 2, 10),
        new Item(itemName, 1, 10),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(8);
      }
    });

    test('quality should degrade x4 if expired', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 0, 10),
        new Item(itemName, -1, 10),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(6);
      }
    });

    test('quality is never negative', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 2, 0),
        new Item(itemName, -1, 1),
      ]);
      const items = gildedRose.updateQuality();
      for (const item of items) {
        expect(item.quality).toBe(0);
      }
    });

    test('SellIn always decreases', () => {
      const gildedRose = new GildedRose([
        new Item(itemName, 2, 0),
        new Item(itemName, 0, 0),
        new Item(itemName, -1, 1),
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[1].sellIn).toBe(-1);
      expect(items[2].sellIn).toBe(-2);
    });
  });
});

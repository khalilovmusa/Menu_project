export type MenuItem = {
   id: number
   name: string
   price: number
   image: string
   slug?: string
}

export type SubCategory = {
   id: number
   slug: string
   name: string
   description: string
   items: MenuItem[]
}

export type MainCategory = {
   id: number
   slug: string
   name: string
   description: string
   subcategories: SubCategory[]
}

export const menuData: MainCategory[] = [
   {
      id: 1,
      slug: 'main-menu',
      name: 'Main Menu',
      description: 'Classic dishes served all day.',
      subcategories: [
         {
            id: 11,
            slug: 'starters',
            name: 'Starters',
            description: 'Light bites to begin your meal.',
            items: [
               {
                  id: 111,
                  name: 'Bruschetta',
                  price: 6.5,
                  image: 'https://avatars.mds.yandex.net/get-entity_search/901699/1190243487/SUx182_2x',
               },
               {
                  id: 112,
                  name: 'Garlic Bread',
                  price: 4.0,
                  image: 'https://avatars.mds.yandex.net/i?id=1efc31e80905cde658cf070357c69ffccf943d6a-10272337-images-thumbs&n=13',
               },
               {
                  id: 113,
                  name: 'Stuffed Mushrooms',
                  price: 5.5,
                  image: 'https://avatars.mds.yandex.net/i?id=afc48690efe18ee62eedbd8bf634fe217453d41e-4575735-images-thumbs&n=13',
               },
            ],
         },
         {
            id: 12,
            slug: 'mains',
            name: 'Main Dishes',
            description: 'Hearty and satisfying meals.',
            items: [
               {
                  id: 121,
                  name: 'Grilled Salmon',
                  price: 14.99,
                  image: 'https://avatars.mds.yandex.net/i?id=2b3329f0b3153472c76ba92230d2e8173bd678c5-16309777-images-thumbs&n=13',
               },
               {
                  id: 122,
                  name: 'Steak Frites',
                  price: 18.5,
                  image: 'https://avatars.mds.yandex.net/i?id=4dec3589cd77f7407debca1135a3c485-5870163-images-thumbs&n=13',
               },
               {
                  id: 123,
                  name: 'Spaghetti Bolognese',
                  price: 11.0,
                  image: 'https://avatars.mds.yandex.net/i?id=e5af85e079026a901ad02e8f460ee3f2979f51e4-7085252-images-thumbs&n=13',
               },
            ],
         },
         {
            id: 13,
            slug: 'desserts',
            name: 'Desserts',
            description: 'Sweet treats to finish.',
            items: [
               {
                  id: 131,
                  name: 'Chocolate Lava Cake',
                  price: 6.0,
                  image: 'https://avatars.mds.yandex.net/i?id=2e710e892441329d7ba8a93fb63389dd-5869745-images-thumbs&n=13',
               },
               {
                  id: 132,
                  name: 'Tiramisu',
                  price: 5.5,
                  image: 'https://avatars.mds.yandex.net/i?id=be441ffc4b617d13a21c4ef0456c695d605056ea-4446653-images-thumbs&n=13',
               },
               {
                  id: 133,
                  name: 'Cheesecake',
                  price: 5.0,
                  image: 'https://avatars.mds.yandex.net/i?id=1dc2e1fc4369183344327e6278166b5bbce9e685-4936815-images-thumbs&n=13',
               },
            ],
         },
      ],
   },
   {
      id: 2,
      slug: 'summer-menu',
      name: 'Summer Menu',
      description: 'Seasonal favorites for warm days.',
      subcategories: [
         {
            id: 21,
            slug: 'cold-drinks',
            name: 'Cold Drinks',
            description: 'Refreshing beverages.',
            items: [
               {
                  id: 211,
                  name: 'Lemonade',
                  price: 3.5,
                  image: 'https://avatars.mds.yandex.net/i?id=ba16a7fb10f22f724c3b92a6c2eaacc1f162b5cd-4292261-images-thumbs&n=13',
               },
               {
                  id: 212,
                  name: 'Iced Tea',
                  price: 3.0,
                  image: 'https://avatars.mds.yandex.net/i?id=86ca840acb0a01e8dab6464c750d6c59840958c4-9181148-images-thumbs&n=13',
               },
               {
                  id: 213,
                  name: 'Mint Mojito',
                  price: 4.5,
                  image: 'https://avatars.mds.yandex.net/i?id=1440ed7519848d834e24172fe7c6448935c32c70-12922404-images-thumbs&n=13',
               },
            ],
         },
         {
            id: 22,
            slug: 'light-meals',
            name: 'Light Meals',
            description: 'Perfect for hot weather.',
            items: [
               {
                  id: 221,
                  name: 'Caprese Salad',
                  price: 7.5,
                  image: 'https://avatars.mds.yandex.net/i?id=0ccbb82fbe844cd1e8c6725dedd51d4374f35a95-4576184-images-thumbs&n=13',
               },
               {
                  id: 222,
                  name: 'Fruit Bowl',
                  price: 5.0,
                  image: 'https://avatars.mds.yandex.net/i?id=27a730cc04166353831e0f089c2c025d0c31d30e-4081049-images-thumbs&n=13',
               },
               {
                  id: 223,
                  name: 'Avocado Toast',
                  price: 6.5,
                  image: 'https://avatars.mds.yandex.net/i?id=1cdf7bccc7a7530bd1e2206f58b0fa404111b27e-4987739-images-thumbs&n=13',
               },
            ],
         },
      ],
   },
   {
      id: 3,
      slug: 'beverages',
      name: 'Beverages',
      description: 'Hot and cold drinks.',
      subcategories: [
         {
            id: 31,
            slug: 'hot-drinks',
            name: 'Hot Drinks',
            description: 'Warm and cozy options.',
            items: [
               {
                  id: 311,
                  name: 'Espresso',
                  price: 2.5,
                  image: 'https://avatars.mds.yandex.net/i?id=b31c7ca2716b9a43685405b93363af88399ab250-5897285-images-thumbs&n=13',
               },
               {
                  id: 312,
                  name: 'Latte',
                  price: 3.5,
                  image: 'https://avatars.mds.yandex.net/i?id=96f412f251ef5a31845df616dcbbd235623d68fa-10414202-images-thumbs&n=13',
               },
               {
                  id: 313,
                  name: 'Hot Chocolate',
                  price: 3.0,
                  image: 'https://avatars.mds.yandex.net/i?id=d4798b603d7e70f1404387cf4dddccd1f63c09a5-5258573-images-thumbs&n=13',
               },
            ],
         },
         {
            id: 32,
            slug: 'smoothies',
            name: 'Smoothies',
            description: 'Blended fruit drinks.',
            items: [
               {
                  id: 321,
                  name: 'Strawberry Banana',
                  price: 4.5,
                  image: 'https://avatars.mds.yandex.net/i?id=cf4b1ff0f6e43d57123b9d2db80ebf5d18a5b047-9181195-images-thumbs&n=13',
               },
               {
                  id: 322,
                  name: 'Mango Pineapple',
                  price: 4.8,
                  image: 'https://avatars.mds.yandex.net/i?id=772eae82eef62b760c1b34cffa17ce6109578e7a-5160619-images-thumbs&n=13',
               },
               {
                  id: 323,
                  name: 'Green Detox',
                  price: 5.0,
                  image: 'https://avatars.mds.yandex.net/i?id=490d50d6dc58cb8b0fc940808ecf4c26908b0fb2-4634814-images-thumbs&n=13',
               },
            ],
         },
      ],
   },
   {
      id: 4,
      slug: 'functional-menu',
      name: 'Functional Menu',
      description: 'Meals tailored for energy and wellness.',
      subcategories: [
         {
            id: 41,
            slug: 'high-protein',
            name: 'High Protein',
            description: 'Fuel your body with protein-rich meals.',
            items: [
               {
                  id: 411,
                  name: 'Chicken Quinoa Bowl',
                  price: 9.5,
                  image: 'https://avatars.mds.yandex.net/i?id=273cbd0efe857ad90ed05c26822671294e5b1670-5734614-images-thumbs&n=13',
               },
               {
                  id: 412,
                  name: 'Tofu Stir Fry',
                  price: 8.0,
                  image: 'https://avatars.mds.yandex.net/i?id=ab2b34a040d395917acf457df956e048f1ed0656-4549790-images-thumbs&n=13',
               },
            ],
         },
         {
            id: 42,
            slug: 'low-carb',
            name: 'Low Carb',
            description: 'Keep it lean and clean.',
            items: [
               {
                  id: 421,
                  name: 'Zucchini Noodles',
                  price: 7.5,
                  image: 'https://avatars.mds.yandex.net/i?id=a86c2ad2aab2ebb82f3e4fd315682656456da7e6-9099391-images-thumbs&n=13',
               },
               {
                  id: 422,
                  name: 'Cauliflower Rice Bowl',
                  price: 8.5,
                  image: 'https://avatars.mds.yandex.net/i?id=4d87544928194c7402374a597eb64e5ec8fc4445-5251742-images-thumbs&n=13',
               },
            ],
         },
      ],
   },
   {
      id: 5,
      slug: 'test-menu',
      name: 'Test Menu',
      description: 'Experimental dishes for feedback.',
      subcategories: [
         {
            id: 51,
            slug: 'fusion',
            name: 'Fusion',
            description: 'Creative combinations from around the world.',
            items: [
               {
                  id: 511,
                  name: 'Kimchi Tacos',
                  price: 7.0,
                  image: 'https://avatars.mds.yandex.net/i?id=e836ab74dba4e2a5b4ccf13c8598ade8164f26a1e5ebeff0-4504218-images-thumbs&n=13',
               },
               {
                  id: 512,
                  name: 'Butter Chicken Pizza',
                  price: 9.0,
                  image: 'https://avatars.mds.yandex.net/i?id=f2b660913b0f14d27e3837ebdd79e3cc4e8ff50a-8174408-images-thumbs&n=13',
               },
            ],
         },
      ],
   },
   {
      id: 6,
      slug: 'another-test',
      name: 'Another Test',
      description: 'Placeholder category for dev testing.',
      subcategories: [
         {
            id: 61,
            slug: 'mock-items',
            name: 'Mock Items',
            description: 'Used for layout and UI testing.',
            items: [
               {
                  id: 611,
                  name: 'Test Dish A',
                  price: 1.0,
                  image: '/images/test-a.jpg',
               },
               {
                  id: 612,
                  name: 'Test Dish B',
                  price: 2.0,
                  image: '/images/test-b.jpg',
               },
            ],
         },
      ],
   },
]

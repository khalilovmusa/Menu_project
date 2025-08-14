export type MenuItem = {
   id: number
   name: string
   price: number
   image: string
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
                  image: '/images/bruschetta.jpg',
               },
               {
                  id: 112,
                  name: 'Garlic Bread',
                  price: 4.0,
                  image: '/images/garlic-bread.jpg',
               },
               {
                  id: 113,
                  name: 'Stuffed Mushrooms',
                  price: 5.5,
                  image: '/images/mushrooms.jpg',
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
                  image: '/images/salmon.jpg',
               },
               {
                  id: 122,
                  name: 'Steak Frites',
                  price: 18.5,
                  image: '/images/steak.jpg',
               },
               {
                  id: 123,
                  name: 'Spaghetti Bolognese',
                  price: 11.0,
                  image: '/images/spaghetti.jpg',
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
                  image: '/images/lava-cake.jpg',
               },
               {
                  id: 132,
                  name: 'Tiramisu',
                  price: 5.5,
                  image: '/images/tiramisu.jpg',
               },
               {
                  id: 133,
                  name: 'Cheesecake',
                  price: 5.0,
                  image: '/images/cheesecake.jpg',
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
                  image: '/images/lemonade.jpg',
               },
               {
                  id: 212,
                  name: 'Iced Tea',
                  price: 3.0,
                  image: '/images/iced-tea.jpg',
               },
               {
                  id: 213,
                  name: 'Mint Mojito',
                  price: 4.5,
                  image: '/images/mojito.jpg',
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
                  image: '/images/caprese.jpg',
               },
               {
                  id: 222,
                  name: 'Fruit Bowl',
                  price: 5.0,
                  image: '/images/fruit-bowl.jpg',
               },
               {
                  id: 223,
                  name: 'Avocado Toast',
                  price: 6.5,
                  image: '/images/avocado-toast.jpg',
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
                  image: '/images/espresso.jpg',
               },
               {
                  id: 312,
                  name: 'Latte',
                  price: 3.5,
                  image: '/images/latte.jpg',
               },
               {
                  id: 313,
                  name: 'Hot Chocolate',
                  price: 3.0,
                  image: '/images/hot-chocolate.jpg',
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
                  image: '/images/strawberry-banana.jpg',
               },
               {
                  id: 322,
                  name: 'Mango Pineapple',
                  price: 4.8,
                  image: '/images/mango-pineapple.jpg',
               },
               {
                  id: 323,
                  name: 'Green Detox',
                  price: 5.0,
                  image: '/images/green-detox.jpg',
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
                  image: '/images/quinoa-bowl.jpg',
               },
               {
                  id: 412,
                  name: 'Tofu Stir Fry',
                  price: 8.0,
                  image: '/images/tofu-stir-fry.jpg',
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
                  image: '/images/zoodles.jpg',
               },
               {
                  id: 422,
                  name: 'Cauliflower Rice Bowl',
                  price: 8.5,
                  image: '/images/cauliflower-rice.jpg',
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
                  image: '/images/kimchi-tacos.jpg',
               },
               {
                  id: 512,
                  name: 'Butter Chicken Pizza',
                  price: 9.0,
                  image: '/images/butter-chicken-pizza.jpg',
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

import { ProductObject } from "./productObject";

const all_products = [
    // Nike Men's Sneakers
    {
      id: 0,
      name: "Nike Air Force 1",
      description: "The Nike Air Force 1 is a classic basketball shoe known for its iconic design and comfortable fit.",
      price: 90.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/calzado-air-force-1-07-jBrhbr.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Nike Women's Sneakers
    {
      id: 0,
      name: "Nike Air Max 270",
      description: "The Nike Air Max 270 is a lifestyle sneaker known for its large Air Max unit and comfortable cushioning.",
      price: 150.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eehabecsfly0wy1pxxve/calzado-grandes-air-max-270-HbtNX3.png",
      brand: "Nike",
      gender: "Women",
      material: "Mesh, Synthetic",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "Pink"],
      category: "Women"
    },
    // Nike Kids' Sneakers
    {
      id: 0,
      name: "Nike Revolution 5",
      description: "The Nike Revolution 5 is a lightweight running shoe designed for kids.",
      price: 50.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/calzado-de-running-en-carretera-revolution-5-hC41Vf.png",
      brand: "Nike",
      gender: "Kids",
      material: "Mesh",
      sizes: ["1", "2", "3", "4", "5", "6"],
      colors: ["Blue", "Pink"],
      category: "Men"
    },
    // Adidas Men's Sneakers
    {
      id: 0,
      name: "Adidas Superstar",
      description: "The Adidas Superstar is a classic sneaker known for its iconic shell toe design.",
      price: 80.0,
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c35214f6104c4a288bfed0c7c88dd94c_9366/IF9995_01_standard.jpg",
      brand: "Adidas",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Vans Men's Sneakers
    {
      id: 0,
      name: "Vans Old Skool",
      description: "The Vans Old Skool is a classic skate shoe known for its durable canvas and suede upper.",
      price: 60.0,
      image: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Canvas, Suede",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Unisex"
    },
    // Vans Women's Sneakers
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    // Vans Kids' Sneakers
    {
      id: 0,
      name: "Adidas Gazelle",
      description: "The Adidas Gazelle is a classic sneaker known for its retro style and suede upper.",
      price: 85.0,
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/ed781e0096b34877b4e0af550012c29f_9366/IE5130_01_standard.jpg",
      brand: "Adidas",
      gender: "Unisex",
      material: "Suede",
      sizes: ["5", "6", "7", "8", "9", "10", "11", "12"],
      colors: ["Blue", "Red", "Black"],
      category: "Unisex"
    },
    // More Products
    // You can add more products here to reach the total count of 34
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Vans Sk8-Hi",
      description: "The Vans Sk8-Hi is a classic high-top skate shoe known for its padded collar and iconic side stripe.",
      price: 70.0,
      image: "https://images.vans.com/is/image/Vans/D5IBKA-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Suede, Canvas",
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    // Nike Women's Sneakers
    {
      id: 0,
      name: "Nike Air Max 270",
      description: "The Nike Air Max 270 is a lifestyle sneaker known for its large Air Max unit and comfortable cushioning.",
      price: 150.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eehabecsfly0wy1pxxve/calzado-grandes-air-max-270-HbtNX3.png",
      brand: "Nike",
      gender: "Women",
      material: "Mesh, Synthetic",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "Pink"],
      category: "Women"
    },
    // Nike Kids' Sneakers
    // Adidas Men's Sneakers
    {
      id: 0,
      name: "Adidas Superstar",
      description: "The Adidas Superstar is a classic sneaker known for its iconic shell toe design.",
      price: 80.0,
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c35214f6104c4a288bfed0c7c88dd94c_9366/IF9995_01_standard.jpg",
      brand: "Adidas",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Vans Women's Sneakers
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    // Vans Kids' Sneakers
    
    // More Products
    // You can add more products here to reach the total count of 34
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    {
      id: 0,
      name: "Nike Air Force 1",
      description: "The Nike Air Force 1 is a classic basketball shoe known for its iconic design and comfortable fit.",
      price: 90.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/calzado-air-force-1-07-jBrhbr.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Nike Women's Sneakers
    {
      id: 0,
      name: "Nike Revolution 5",
      description: "The Nike Revolution 5 is a lightweight running shoe designed for kids.",
      price: 50.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/calzado-de-running-en-carretera-revolution-5-hC41Vf.png",
      brand: "Nike",
      gender: "Kids",
      material: "Mesh",
      sizes: ["1", "2", "3", "4", "5", "6"],
      colors: ["Blue", "Pink"],
      category: "Men"
    },
    // Vans Men's Sneakers
    {
      id: 0,
      name: "Vans Old Skool",
      description: "The Vans Old Skool is a classic skate shoe known for its durable canvas and suede upper.",
      price: 60.0,
      image: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Canvas, Suede",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Unisex"
    },
    // Vans Women's Sneakers
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    {
      id: 0,
      name: "Nike Air Force 1",
      description: "The Nike Air Force 1 is a classic basketball shoe known for its iconic design and comfortable fit.",
      price: 90.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/calzado-air-force-1-07-jBrhbr.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Nike Women's Sneakers
    {
      id: 0,
      name: "Nike Air Max 270",
      description: "The Nike Air Max 270 is a lifestyle sneaker known for its large Air Max unit and comfortable cushioning.",
      price: 150.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eehabecsfly0wy1pxxve/calzado-grandes-air-max-270-HbtNX3.png",
      brand: "Nike",
      gender: "Women",
      material: "Mesh, Synthetic",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "Pink"],
      category: "Women"
    },
    // Nike Kids' Sneakers
    {
      id: 0,
      name: "Nike Revolution 5",
      description: "The Nike Revolution 5 is a lightweight running shoe designed for kids.",
      price: 50.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/calzado-de-running-en-carretera-revolution-5-hC41Vf.png",
      brand: "Nike",
      gender: "Kids",
      material: "Mesh",
      sizes: ["1", "2", "3", "4", "5", "6"],
      colors: ["Blue", "Pink"],
      category: "Men"
    },
    // Adidas Men's Sneakers
    {
      id: 0,
      name: "Adidas Superstar",
      description: "The Adidas Superstar is a classic sneaker known for its iconic shell toe design.",
      price: 80.0,
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c35214f6104c4a288bfed0c7c88dd94c_9366/IF9995_01_standard.jpg",
      brand: "Adidas",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Vans Men's Sneakers
    {
      id: 0,
      name: "Vans Old Skool",
      description: "The Vans Old Skool is a classic skate shoe known for its durable canvas and suede upper.",
      price: 60.0,
      image: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Canvas, Suede",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Unisex"
    },
    // Vans Women's Sneakers
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    // Vans Kids' Sneakers
    {
      id: 0,
      name: "Adidas Gazelle",
      description: "The Adidas Gazelle is a classic sneaker known for its retro style and suede upper.",
      price: 85.0,
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/ed781e0096b34877b4e0af550012c29f_9366/IE5130_01_standard.jpg",
      brand: "Adidas",
      gender: "Unisex",
      material: "Suede",
      sizes: ["5", "6", "7", "8", "9", "10", "11", "12"],
      colors: ["Blue", "Red", "Black"],
      category: "Unisex"
    },
    // More Products
    // You can add more products here to reach the total count of 34
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Vans Sk8-Hi",
      description: "The Vans Sk8-Hi is a classic high-top skate shoe known for its padded collar and iconic side stripe.",
      price: 70.0,
      image: "https://images.vans.com/is/image/Vans/D5IBKA-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Suede, Canvas",
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    // Nike Women's Sneakers
    {
      id: 0,
      name: "Nike Air Max 270",
      description: "The Nike Air Max 270 is a lifestyle sneaker known for its large Air Max unit and comfortable cushioning.",
      price: 150.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eehabecsfly0wy1pxxve/calzado-grandes-air-max-270-HbtNX3.png",
      brand: "Nike",
      gender: "Women",
      material: "Mesh, Synthetic",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "Pink"],
      category: "Women"
    },
    // Nike Kids' Sneakers
    // Adidas Men's Sneakers
    {
      id: 0,
      name: "Adidas Superstar",
      description: "The Adidas Superstar is a classic sneaker known for its iconic shell toe design.",
      price: 80.0,
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c35214f6104c4a288bfed0c7c88dd94c_9366/IF9995_01_standard.jpg",
      brand: "Adidas",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Vans Women's Sneakers
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    // Vans Kids' Sneakers
    
    // More Products
    // You can add more products here to reach the total count of 34
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    {
      id: 0,
      name: "Nike Air Force 1",
      description: "The Nike Air Force 1 is a classic basketball shoe known for its iconic design and comfortable fit.",
      price: 90.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/calzado-air-force-1-07-jBrhbr.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Nike Women's Sneakers
    {
      id: 0,
      name: "Nike Revolution 5",
      description: "The Nike Revolution 5 is a lightweight running shoe designed for kids.",
      price: 50.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/calzado-de-running-en-carretera-revolution-5-hC41Vf.png",
      brand: "Nike",
      gender: "Kids",
      material: "Mesh",
      sizes: ["1", "2", "3", "4", "5", "6"],
      colors: ["Blue", "Pink"],
      category: "Men"
    },
    // Vans Men's Sneakers
    {
      id: 0,
      name: "Vans Old Skool",
      description: "The Vans Old Skool is a classic skate shoe known for its durable canvas and suede upper.",
      price: 60.0,
      image: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Canvas, Suede",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Unisex"
    },
    // Vans Women's Sneakers
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    {
      id: 0,
      name: "Nike Air Force 1",
      description: "The Nike Air Force 1 is a classic basketball shoe known for its iconic design and comfortable fit.",
      price: 90.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/calzado-air-force-1-07-jBrhbr.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Nike Women's Sneakers
    {
      id: 0,
      name: "Nike Air Max 270",
      description: "The Nike Air Max 270 is a lifestyle sneaker known for its large Air Max unit and comfortable cushioning.",
      price: 150.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eehabecsfly0wy1pxxve/calzado-grandes-air-max-270-HbtNX3.png",
      brand: "Nike",
      gender: "Women",
      material: "Mesh, Synthetic",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "Pink"],
      category: "Women"
    },
    // Nike Kids' Sneakers
    {
      id: 0,
      name: "Nike Revolution 5",
      description: "The Nike Revolution 5 is a lightweight running shoe designed for kids.",
      price: 50.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/calzado-de-running-en-carretera-revolution-5-hC41Vf.png",
      brand: "Nike",
      gender: "Kids",
      material: "Mesh",
      sizes: ["1", "2", "3", "4", "5", "6"],
      colors: ["Blue", "Pink"],
      category: "Men"
    },
    // Adidas Men's Sneakers
    {
      id: 0,
      name: "Adidas Superstar",
      description: "The Adidas Superstar is a classic sneaker known for its iconic shell toe design.",
      price: 80.0,
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c35214f6104c4a288bfed0c7c88dd94c_9366/IF9995_01_standard.jpg",
      brand: "Adidas",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Vans Men's Sneakers
    {
      id: 0,
      name: "Vans Old Skool",
      description: "The Vans Old Skool is a classic skate shoe known for its durable canvas and suede upper.",
      price: 60.0,
      image: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Canvas, Suede",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Unisex"
    },
    // Vans Women's Sneakers
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    // Vans Kids' Sneakers
    {
      id: 0,
      name: "Adidas Gazelle",
      description: "The Adidas Gazelle is a classic sneaker known for its retro style and suede upper.",
      price: 85.0,
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/ed781e0096b34877b4e0af550012c29f_9366/IE5130_01_standard.jpg",
      brand: "Adidas",
      gender: "Unisex",
      material: "Suede",
      sizes: ["5", "6", "7", "8", "9", "10", "11", "12"],
      colors: ["Blue", "Red", "Black"],
      category: "Unisex"
    },
    // More Products
    // You can add more products here to reach the total count of 34
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Vans Sk8-Hi",
      description: "The Vans Sk8-Hi is a classic high-top skate shoe known for its padded collar and iconic side stripe.",
      price: 70.0,
      image: "https://images.vans.com/is/image/Vans/D5IBKA-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Suede, Canvas",
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    // Nike Women's Sneakers
    {
      id: 0,
      name: "Nike Air Max 270",
      description: "The Nike Air Max 270 is a lifestyle sneaker known for its large Air Max unit and comfortable cushioning.",
      price: 150.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eehabecsfly0wy1pxxve/calzado-grandes-air-max-270-HbtNX3.png",
      brand: "Nike",
      gender: "Women",
      material: "Mesh, Synthetic",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "Pink"],
      category: "Women"
    },
    // Nike Kids' Sneakers
    // Adidas Men's Sneakers
    {
      id: 0,
      name: "Adidas Superstar",
      description: "The Adidas Superstar is a classic sneaker known for its iconic shell toe design.",
      price: 80.0,
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c35214f6104c4a288bfed0c7c88dd94c_9366/IF9995_01_standard.jpg",
      brand: "Adidas",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Vans Women's Sneakers
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    // Vans Kids' Sneakers
    
    // More Products
    // You can add more products here to reach the total count of 34
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    {
      id: 0,
      name: "Nike Air Force 1",
      description: "The Nike Air Force 1 is a classic basketball shoe known for its iconic design and comfortable fit.",
      price: 90.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/calzado-air-force-1-07-jBrhbr.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
    // Nike Women's Sneakers
    {
      id: 0,
      name: "Nike Revolution 5",
      description: "The Nike Revolution 5 is a lightweight running shoe designed for kids.",
      price: 50.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/calzado-de-running-en-carretera-revolution-5-hC41Vf.png",
      brand: "Nike",
      gender: "Kids",
      material: "Mesh",
      sizes: ["1", "2", "3", "4", "5", "6"],
      colors: ["Blue", "Pink"],
      category: "Men"
    },
    // Vans Men's Sneakers
    {
      id: 0,
      name: "Vans Old Skool",
      description: "The Vans Old Skool is a classic skate shoe known for its durable canvas and suede upper.",
      price: 60.0,
      image: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Canvas, Suede",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Unisex"
    },
    // Vans Women's Sneakers
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    {
      id: 0,
      name: "Nike Revolution 5",
      description: "The Nike Revolution 5 is a lightweight running shoe designed for kids.",
      price: 50.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/calzado-de-running-en-carretera-revolution-5-hC41Vf.png",
      brand: "Nike",
      gender: "Kids",
      material: "Mesh",
      sizes: ["1", "2", "3", "4", "5", "6"],
      colors: ["Blue", "Pink"],
      category: "Men"
    },
    // Vans Men's Sneakers
    {
      id: 0,
      name: "Vans Old Skool",
      description: "The Vans Old Skool is a classic skate shoe known for its durable canvas and suede upper.",
      price: 60.0,
      image: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Canvas, Suede",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Unisex"
    },
    // Vans Women's Sneakers
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    {
      id: 0,
      name: "Nike Revolution 5",
      description: "The Nike Revolution 5 is a lightweight running shoe designed for kids.",
      price: 50.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/calzado-de-running-en-carretera-revolution-5-hC41Vf.png",
      brand: "Nike",
      gender: "Kids",
      material: "Mesh",
      sizes: ["1", "2", "3", "4", "5", "6"],
      colors: ["Blue", "Pink"],
      category: "Men"
    },
    // Vans Men's Sneakers
    {
      id: 0,
      name: "Vans Old Skool",
      description: "The Vans Old Skool is a classic skate shoe known for its durable canvas and suede upper.",
      price: 60.0,
      image: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Canvas, Suede",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Unisex"
    },
    // Vans Women's Sneakers
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    {
      id: 0,
      name: "Vans Authentic",
      description: "The Vans Authentic is a classic skate shoe known for its simple low-top silhouette.",
      price: 55.0,
      image: "https://images.vans.com/is/image/Vans/EE3W00-HERO?$583x583$",
      brand: "Vans",
      gender: "Women",
      material: "Canvas",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "White"],
      category: "Women"
    },
    // Vans Kids' Sneakers
    {
      id: 0,
      name: "Adidas Gazelle",
      description: "The Adidas Gazelle is a classic sneaker known for its retro style and suede upper.",
      price: 85.0,
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/ed781e0096b34877b4e0af550012c29f_9366/IE5130_01_standard.jpg",
      brand: "Adidas",
      gender: "Unisex",
      material: "Suede",
      sizes: ["5", "6", "7", "8", "9", "10", "11", "12"],
      colors: ["Blue", "Red", "Black"],
      category: "Unisex"
    },
    // More Products
    // You can add more products here to reach the total count of 34
    {
      id: 0,
      name: "Nike Air Jordan 1",
      description: "The Nike Air Jordan 1 is a classic high-top basketball shoe known for its iconic design.",
      price: 120.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a0f19658-e0e2-456d-906e-21ec5595f122/calzado-air-jordan-1-retro-high-og-black-white-Tz18l4.png",
      brand: "Nike",
      gender: "Men",
      material: "Leather",
      sizes: ["7", "8", "9", "10", "11", "12", "13"],
      colors: ["Red", "Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Vans Sk8-Hi",
      description: "The Vans Sk8-Hi is a classic high-top skate shoe known for its padded collar and iconic side stripe.",
      price: 70.0,
      image: "https://images.vans.com/is/image/Vans/D5IBKA-HERO?$583x583$",
      brand: "Vans",
      gender: "Men",
      material: "Suede, Canvas",
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["Black", "White"],
      category: "Men"
    },
    {
      id: 0,
      name: "Nude Ballet Flats",
      description:
        "Comfortable and stylish nude ballet flats. Perfect for work or everyday wear.",
      price: 50.0,
      image:
        "https://images.asos-media.com/products/asos-design-wide-fit-lullaby-bow-ballet-flats-in-beige/204673986-2?$n_640w$&wid=513&fit=constrain",
      brand: "ASOS",
      gender: "Women",
      material: "Synthetic Leather",
      sizes: ["36", "37", "38", "39", "40"],
      colors: ["Nude"],
      category: "Women", // Agregado
    },
    // Nike Women's Sneakers
    {
      id: 0,
      name: "Nike Air Max 270",
      description: "The Nike Air Max 270 is a lifestyle sneaker known for its large Air Max unit and comfortable cushioning.",
      price: 150.0,
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eehabecsfly0wy1pxxve/calzado-grandes-air-max-270-HbtNX3.png",
      brand: "Nike",
      gender: "Women",
      material: "Mesh, Synthetic",
      sizes: ["5", "6", "7", "8", "9", "10"],
      colors: ["Black", "Pink"],
      category: "Women"
    },
    // Nike Kids' Sneakers
    // Adidas Men's Sneakers
    {
      id: 0,
      name: "Adidas Superstar",
      description: "The Adidas Superstar is a classic sneaker known for its iconic shell toe design.",
      price: 80.0,
      image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/c35214f6104c4a288bfed0c7c88dd94c_9366/IF9995_01_standard.jpg",
      brand: "Adidas",
      gender: "Men",
      material: "Leather",
      sizes: ["6", "7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black"],
      category: "Unisex"
    },
];

export const products = () => {
  const modifiedProducts = all_products.map((product, index) => {
      // Crear un nuevo objeto con todas las propiedades del producto original
      return {
          ...product,
          id: index  // Asignar el índice como ID
      };
  });
  
  return modifiedProducts;
}
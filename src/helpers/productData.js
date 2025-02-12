// Instead of a data file, this is where I would make a request to the GraphQL server
// to fetch the product data. For now, I am using a static data file to simulate the data.


const productData ={
  "data": {
    "productTypes": {
      "edges": [
        {
          "node": {
            "id": "UHJvZHVjdFR5cGU6NTU=",
            "name": "Juice",
            "__typename": "ProductType",
            "productAttributes": [
              {
                "id": "QXR0cmlidXRlOjQ2",
                "name": "Flavor",
                "values": [
                  {
                    "name": "Pineapple",
                    "id": "QXR0cmlidXRlVmFsdWU6MTg4",
                    "slug": "pineapple",
                    "price": "2.99",
                    "description": "Sweet and tropical with a hint of tartness, our pineapple juice is packed with tropical paradise vibes and natural enzymes for digestive health."
                  },
                  {
                    "name": "Cranberry",
                    "id": "QXR0cmlidXRlVmFsdWU6NTk2",
                    "slug": "cranberry",
                    "price": "2.99",
                    "description": "Crisp and refreshingly tart, this antioxidant-rich cranberry juice offers a perfect balance of sweet and sour notes with natural wellness benefits."
                  },
                  {
                    "name": "Grape",
                    "id": "QXR0cmlidXRlVmFsdWU6NTk3",
                    "slug": "grape",
                    "price": "2.99",
                    "description": "Naturally sweet and bursting with flavor, our grape juice is made from premium concord grapes, delivering a rich taste and powerful antioxidants."
                  },
                  {
                    "name": "Coconut",
                    "id": "QXR0cmlidXRlVmFsdWU6MTg5",
                    "slug": "coconut",
                    "price": "2.99",
                    "description": "Pure, refreshing coconut water that's naturally hydrating with essential electrolytes. Light, slightly sweet, and perfectly tropical."
                  },
                  {
                    "name": "Apple",
                    "id": "QXR0cmlidXRlVmFsdWU6MTkw",
                    "slug": "apple",
                    "price": "2.99",
                    "description": "Pressed from fresh, crisp apples, this classic juice delivers a clean, sweet taste with just the right amount of natural tartness."
                  },
                  {
                    "name": "Orange",
                    "id": "QXR0cmlidXRlVmFsdWU6MTk0",
                    "slug": "orange",
                    "price": "2.99",
                    "description": "Freshly squeezed sunshine in every sip. Packed with vitamin C and natural citrus flavor, this classic juice brings brightness to your day."
                  },
                  {
                    "name": "Banana",
                    "id": "QXR0cmlidXRlVmFsdWU6MTk1",
                    "slug": "banana",
                    "price": "2.99",
                    "description": "Smooth and creamy banana juice that's naturally sweet and rich in potassium. A unique tropical treat that's both nutritious and delicious."
                  },
                  {
                    "name": "Bean",
                    "id": "QXR0cmlidXRlVmFsdWU6MTk2",
                    "slug": "bean",
                    "price": "2.99",
                    "description": "Our unique bean juice blend combines red beans and vanilla for a surprisingly smooth, lightly sweet taste with protein-rich nutrition."
                  },
                  {
                    "name": "Carrot",
                    "id": "QXR0cmlidXRlVmFsdWU6MTk3",
                    "slug": "carrot",
                    "price": "2.99",
                    "description": "Vibrant orange carrot juice that's naturally sweet and loaded with beta-carotene. A refreshing way to drink your vegetables."
                  },
                  {
                    "name": "Sprouty",
                    "id": "QXR0cmlidXRlVmFsdWU6MTk4",
                    "slug": "sprouty",
                    "price": "2.99",
                    "description": "A revitalizing blend of fresh sprouts and green vegetables. Light, refreshing, and packed with living nutrients for natural energy."
                  },
                  {
                    "name": "Salty, like the tears of your enemy",
                    "id": "QXR0cmlidXRlVmFsdWU6MTk5",
                    "slug": "salty-like-the-tears-of-your-enemy",
                    "price": "2.99",
                    "description": "Our signature novelty drink with a perfect balance of mineral-rich salt and subtle sweetness. Victory never tasted so refreshing."
                  }
                ],
                "__typename": "Attribute"
              }
            ],
          }
        }
      ]
    }
  }
}

  export default productData;
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
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
                    },
                    {
                      "name": "Cranberry",
                      "id": "QXR0cmlidXRlVmFsdWU6NTk2",
                      "slug": "cranberry",
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
                    },
                    {
                      "name": "Grape",
                      "id": "QXR0cmlidXRlVmFsdWU6NTk3",
                      "slug": "grape",
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
                    },
                    {
                      "name": "Flavor",
                      "id": "QXR0cmlidXRlVmFsdWU6ODAx",
                      "slug": "flavor",
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
                    },
                    {
                      "name": "Coconut",
                      "id": "QXR0cmlidXRlVmFsdWU6MTg5",
                      "slug": "coconut",
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
                    },
                    {
                      "name": "Apple",
                      "id": "QXR0cmlidXRlVmFsdWU6MTkw",
                      "slug": "apple",
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
                    },
                    {
                      "name": "Orange",
                      "id": "QXR0cmlidXRlVmFsdWU6MTk0",
                      "slug": "orange",
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
                    },
                    {
                      "name": "Banana",
                      "id": "QXR0cmlidXRlVmFsdWU6MTk1",
                      "slug": "banana",
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
                    },
                    {
                      "name": "Bean",
                      "id": "QXR0cmlidXRlVmFsdWU6MTk2",
                      "slug": "bean",
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
                    },
                    {
                      "name": "Carrot",
                      "id": "QXR0cmlidXRlVmFsdWU6MTk3",
                      "slug": "carrot",
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
                    },
                    {
                      "name": "Sprouty",
                      "id": "QXR0cmlidXRlVmFsdWU6MTk4",
                      "slug": "sprouty",
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
                    },
                    {
                      "name": "Salty, like the tears of your enemy",
                      "id": "QXR0cmlidXRlVmFsdWU6MTk5",
                      "slug": "salty-like-the-tears-of-your-enemy",
                      "url":"https://placehold.co/250x400",
                      "price": "2.99",
                      "description": "A tropical fruit that is sweet and tangy. It is the perfect flavor for a refreshing drink."
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
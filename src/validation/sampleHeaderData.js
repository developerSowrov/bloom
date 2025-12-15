const header = {
  "header": {
    "enabled": true,
    "propertyOrder": ["logo", "navigations", "searchbar", "commerce"],

    "items": {
                       "logo": {   
                                 "enabled": true,
                                     "url": "",
                                     "alt": "XShop"
                               },

               "navigations": {
                                  "enabled": true,
                                    "items": [
                                                {
                                                  "sequence": 1,
                                                     "title": "Products",
                                                       "url": "/products"
                                                },
                                                {
                                                  "sequence": 2,
                                                     "title": "Top Sale",
                                                       "url": "/products?q=top-sale"
                                                },
                                                {
                                                  "sequence": 3,
                                                     "title": "New Arrivals",
                                                       "url": "/products?q=new"
                                                },
                                                {
                                                  "sequence": 3,
                                                     "title": "Brands",
                                                       "url": "/brands"
                                                }
                                             ]
                                },

                "searchbar": {
                                  "enabled": true,
                                 "searchOn": ["all"],
                               "preference": "none"
                             },

                "commerce": {
                                    "enabled": true,
                              "propertyOrder": ["favourite", "cart"],
                                      "items": {
                                                      "cart": {
                                                                "enabled": true,
                                                                  "click": {
                                                                                "invoke": true,
                                                                             "behaviour": "mini-panel"
                                                                           },
                                                                  "hover": {
                                                                                "invoke": false,
                                                                             "behaviour": "mini-panel"
                                                                           }
                                                              },

                                                 "favourite": {
                                                                "enabled": true,
                                                                  "click": {
                                                                                "invoke": false,
                                                                             "behaviour": "overlay"
                                                                           },
                                                                  "hover": {
                                                                                "invoke": false,
                                                                             "behaviour": "mini-panel"
                                                                           }
                                                              }
                                                }
                            }
             }
  }
}
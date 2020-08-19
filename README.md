# dynamic_showcase

Online store with drag&amp;drop functionality.

This proyect corresponds to the challenge 2 of the GeekHubs Academy online front-end bootcamp.

## Summary

- [dynamic_showcase](#dynamic_showcase)
  - [Summary](#summary)
  - [Built With](#built-with)
    - [About the technologies used](#about-the-technologies-used)
  - [How the website works](#how-the-website-works)
    - [Using the shopping cart](#using-the-shopping-cart)
  - [Versioning](#versioning)
  - [Author](#author)
  - [Copyright and license](#copyright-and-license)
  - [Acknowledgments](#acknowledgments)

## Built With
    
| Tecnology | Description |
| ------ | ------ |
| [Bootstrap v4.5.2](https://getbootstrap.com/) | Used for most css styles |
| [Bootstrap Icons v1.0.0-alpha5](https://icons.getbootstrap.com/) | Finally BootStrap has its own icons. |
| [Font Awesome v5.14.0](https://fontawesome.com/) | Used for footer social icons. |
| [Google Fonts](https://fonts.google.com/) | All text is based on Google Fonts, including product prices, for which the "Kameron" font has been chosen for its clarity in representing them. |

### About the technologies used

I'm in favor of taking advantage of the resources that are already created, even taking into account the limits it generates in the creative side, so I decided to take advantage of every resource that Bootstrap offers, trying not to include more code to the stylesheet than strictly necessary.

Finally BootStrap has its own icons. They are in the alpha version and at the time of writing this file (08/19/2020) they do not have icons for social networks, so the Font Awesome icons have been included in the footer.

## How the website works

To add new products, add a new line for each product to the `"fruits"` object, and the corresponding image in the img folder.

The first number is the identifier within the object, the second the image identifier. All images are in the format 300x200 px, and named with the code `fr-nn`, where "nn" is the image number.

Then the name of the product in the default language, and its translation in case you want to implement a multilingual site.

And finally the price. For example:
```sh
    21: ["21", "watermelons", "sandías", 0.49],
    22: ["22", "pomegranates", "granadas", 2.15],
```
### Using the shopping cart

At the top right, in red, is the icon to display or add products to the shopping cart. If you click on the icon before adding products, an empty list will be displayed and the buttons will be disabled. In addition, the subtotal will indicate 0 €.

To add products to the purchase, there are 2 possibilities:
- press the `"Add to cart"` button.
- drag the product to the shopping cart icon.

Each time a product is added, the icon starts flashing and the confirmation message of the added product is displayed.

We can only add each product once, and a warning will appear if it is already in the cart. This warning also tells us, that to add more products go to the cart to change the quantity.

Once we access the cart, it stops flashing.

When added to the cart, each product has a selector to choose the quantity of the product in question, this selection being limited to between 1 and 10 kg.

Every time we change the quantity or add new products, the subtotal is updated, indicating the price of the new selected quantity.

If the cart has products, the two buttons are enabled to manage it:
- `"Empty this cart"`, which will completely empty the cart.
- `"Check Out"`, which will simulate the purchase made, emptying the cart and displaying a purchase confirmation message.

On the other hand, each product has a button `"x"` to remove it individually.

## Versioning

`v1.0.0-alpha`
The site use [SemVer](http://semver.org/) for versioning. 

## Author

**Antonio Cebrián Mesa** - _Informatics teacher, full stack developer_ -
- [My personal Website](http://clasesinformaticagranada.es/)
- [Follow me on Twitter](https://twitter.com/hacking_the_web)
- [For projects and classes](https://www.linkedin.com/in/antonio-cebri%C3%A1n-mesa)

## Copyright and license

Code and documentation copyright 2020 the [Author](https://www.linkedin.com/in/antonio-cebri%C3%A1n-mesa). Code released under the [MIT License](https://github.com/Ch3ssMaster/dynamic_showcase/blob/master/LICENSE.md). 

## Acknowledgments

Always grateful to all those who freely share their knowledge through the internet (StackOverflow, youtubers, bloggers, etc)
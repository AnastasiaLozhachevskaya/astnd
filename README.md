# Instruction

## Story

Adidas team worked hard to meat a deadline, but suddenly one of their Frontend developers have got terrible cough and lay down. The situation is teriffying.

You are a Frontend Developer. You worked on another project but your Functional Manager asked you to help Adidas team with their task. You need to catch up on-going project and finish Product Details Page.

Save the day!

## Description

Please, create markup and styles for components according requirements. Implement JavaScript functionality according requirements. Requirements are incomplete, you're free to implement your ideas.

Links to Design

* [Mobile Design](https://github.com/amerezhany/astound-test-task/blob/master/Design_mobile.png?raw=true)
* [Tablet Design](https://github.com/amerezhany/astound-test-task/blob/master/Design_tablet.png?raw=true)
* [Desktop Design](https://github.com/amerezhany/astound-test-task/blob/master/Design_desktop.png?raw=true)

## Functional Requirements

1.  Product image

    ![](https://github.com/amerezhany/astound-test-task/blob/master/product-image.png?raw=true)

    1.  Fetch data https://raw.githubusercontent.com/amerezhany/astound-test-task/master/products.json
    2.  Display first "image" in "color" array: `[item].color[0].image`
    3.  Image size: Desktop `398x398`, Tablet `362x362`, Mobile width `100%`

2.  Product title

    ![](https://github.com/amerezhany/astound-test-task/blob/master/product-title.png?raw=true)

    1.  Fetch data https://raw.githubusercontent.com/amerezhany/astound-test-task/master/products.json
    2.  Apply new title for each product: `[item].title`
    3.  Styles Desktop:
        * Font: 24px, "Oswald", uppercase
        * Letter spacing: 0.05em
        * color: #2c303d
        * Use Design for the rest
    4.  Styles Tablet:
        * Margin bottom: 30px
        * Use Design for the rest
    5.  Styles Mobile:
        * Margin bottom: 24px
        * Letter spacing: 0.03em
        * Line height: 1.55
        * Use Design for the rest

3.  Product Price

    ![](https://github.com/amerezhany/astound-test-task/blob/master/product-price.png?raw=true)

    1.  Fetch data https://raw.githubusercontent.com/amerezhany/astound-test-task/master/products.json
    2.  Apply new price (new and old) for each product: `[item].price`, `[item].old_price`
    3.  In case "old price" is not provided use "price" only
    4.  Styles Desktop:
        * Font: 24px, "Open Sans"
        * Old Price color: #2c303d
        * Price color: #ce2c52
        * Use Design for the rest
    5.  Styles Tablet:
        * Font: 36px, "Open Sans"
        * Use Design for the rest
    6.  Styles Mobile:
        * Font: 36px, "Open Sans"
        * Use Design for the rest

4.  Product description

    ![](https://github.com/amerezhany/astound-test-task/blob/master/product-description.png?raw=true)

    1.  Fetch data https://raw.githubusercontent.com/amerezhany/astound-test-task/master/products.json
    2.  Apply product description for each product: `[item].details`
    3.  Styles Desktop:
        * Font: 12px, 300, "Open Sans"
        * Letter spacing: 0.03em
        * Line height: 1.4
        * Use Design for the rest
    4.  Styles Mobile:
        * Font: 14px, "Open Sans"
        * Letter spacing: 0.04em
        * Line height: 1.45
        * Use Design for the rest

5.  Product variations

    ![](https://github.com/amerezhany/astound-test-task/blob/master/product-variations.png?raw=true)

    1.  Fetch data https://raw.githubusercontent.com/amerezhany/astound-test-task/master/products.json
    2.  Apply background color accordingly: `[item].color[variation].color`
    3.  On change variation change "title" accordingly: `[item].color[variation].title`
    4.  On change variation change "image" accordingly: `[item].color[variation].image`
    5.  On change variation change "SKU" (Item #) accordingly: `[item].color[variation].sku`

6.  Comments section

    ![](https://github.com/amerezhany/astound-test-task/blob/master/comments.png?raw=true)

    1.  Fetch data https://raw.githubusercontent.com/amerezhany/astound-test-task/master/comments.json
    2.  Show "Loading..." in the section while data are loading
    3.  Dispaly only 3 top comments
    4.  If there an error during fetching display "No comments"
    5.  Styles Desktop:
        * Font: 12px, 300, "Open Sans"
        * Letter spacing: 0.03em
        * Line height: 1.4
        * Use Design for the rest
    6.  Styles Mobile:
        * Font: 14px, "Open Sans"
        * Letter spacing: 0.04em
        * Line height: 1.45
        * Use Design for the rest

7.  Change product

    ![](https://github.com/amerezhany/astound-test-task/blob/master/change-product.png?raw=true)

    1.  Implement product сhange (image, title, SKU, price, description, size, color variation) on click on the image from "You may also like" section.
    2.  Use an associated "data" attribute: `<a href="#" data-sku="701642853690">` -> `{ "701642853690": { ... }, ... }`
    3.  Fetch data https://raw.githubusercontent.com/amerezhany/astound-test-task/master/products.json

## Non-functional Requirements

1.  In case of SASS/SCSS usage add your build scripts (grunt/gulp/webpack) to the project
2.  Your final solution must be testable via local server or local build
3.  Add all required/used packages to the project `package.json`
4.  The task was estimated for 2 hours and due date in 2 days
5.  Use BEM western notation class naming (even you're not like it). Previuos developer haven't used it.
6. Specification is incomplete, use Design. Whether Specification contradicts Design use Specification.

## Other Requirements

1.  Consider fetching data in a parallel
2.  Do not trust user's data, prevent hijacking and script injections
3.  Consider unit testing implementation for your code
4.  Previous developer used jQuery, you can use it or provide Vanilla JS code (ES5 or ES6+ syntax)
5.  Put your attention to semantics (tags' usage)
6.  Consider UX best practices (spinners while loading, consistent size, etc.)
7.  Pay attention to possible JS exceptions and wrap unsafe code.

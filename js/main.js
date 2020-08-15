

var GenerateContent = {

    getYear: () => {
        var year = new Date();
        document.getElementById("date").innerHTML += year.getFullYear();
    },

    getProductFormat: () => {
        product = '<!-- Product Card -->';
        product += '<div class="card mb-4 h-100 shadow-sm" product-id="xxx">';
        product += '<img src="img/fr-nnn.jpg" class="card-img-top" alt="fruitName">';
        product += '<div class="card-body">';
        product += '<h1 class="card-title pricing-card-title">yyy € <small class="text-muted">/ Kg</small></h1>';
        product += '<button type="button" class="btn btn-lg btn-block btn-warning">Add to cart</button>';
        product += '</div>';
        product += '<div class="card-footer bg-info text-white">';
        product += '<h4 class="my-0 font-weight-normal">zzz</h4>';
        product += '</div>';
        product += '</div>';
        // console.log(this.product);
        return this.product;
    },

    fruits: {
        1: ["01", "grapes", "uvas", 4.95],
        2: ["02", "kiwis", "kiwis", 3.85],
        3: ["03", "grapefruits", "pomelos", 2.25],
        4: ["04", "cherries", "cerezas", 3.39],
        5: ["05", "blackberries", "moras", 7.87],
        6: ["06", "lemons", "limones", 1.25],
        7: ["07", "bananas", "plátanos", 1.95],
        8: ["08", "apples", "manzanas", 1.59],
        9: ["09", "oranges", "naranjas", 1.99],
        10: ["10", "apricots", "albaricoques", 1.50],
        11: ["11", "avocados", "aguacates", 2.25],
        12: ["12", "pears", "peras", 2.99],
        13: ["13", "blueberries", "arándanos", 26.50],
        14: ["14", "limes", "limas", 7.38],
        15: ["15", "plumbs", "ciruelas", 2.39],
        16: ["16", "strawberries", "fresas", 1.75],
        17: ["17", "raspberries", "frambuesas", 13.41],
        18: ["18", "peaches", "melocotones", 1.27],
        19: ["19", "coconuts", "cocos", 6.10],
        20: ["20", "pineapples", "piñas", 1.19],
        21: ["21", "watermelons", "sandías", 0.49],
    },

    str2DOMElement: (html) => {
        var frame = document.createElement('iframe');
        frame.style.display = 'none';
        document.body.appendChild(frame);
        frame.contentDocument.open();
        frame.contentDocument.write(html);
        frame.contentDocument.close();
        var el = frame.contentDocument.body.firstChild;
        document.body.removeChild(frame);
        return el;
    },
    setPageContent: (fruits) => {
        // fruits = GenerateContent.shuffleProducts(fruits);
        // console.log(fruits);
        for (const f in fruits) {
            card = GenerateContent.getProductFormat();
            // console.log(typeof card);
            //   console.log(fruits[f][1]);
            card = card.replace(/xxx/, fruits[f][0]);
            card = card.replace(/nnn/, fruits[f][0]);
            card = card.replace(/fruitName/, fruits[f][2]);
            card = card.replace(/yyy/, fruits[f][3]);
            card = card.replace(/zzz/, fruits[f][1].trim());
            document.getElementById("products-list").appendChild(GenerateContent.str2DOMElement(card));
        }
    },
    // shuffleProducts = (arr)=> {
    //     var rand, temp, i;

    //     for (i = arr.length - 1; i > 0; i -= 1) {
    //         rand = Math.floor((i + 1) * Math.random());//get random between zero and i (inclusive)
    //         temp = arr[rand];//swap i and the zero-indexed number
    //         arr[rand] = arr[i];
    //         arr[i] = temp;
    //     }
    //     return arr;
    // }

};

// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready)
// } else {
// }

GenerateContent.getYear();
GenerateContent.setPageContent(GenerateContent.fruits);
var shoppingCart = {

};
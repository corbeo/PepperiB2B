var Transaction = 'Commande FR';
var Catalog = 'Catalog Buyers';
var blocks_config = {
    'free_shipping': {
        text: "Frais de port offert à partir de ",
        field: "TSAFrancoReel",
        svg: "https://storage.pepperi.com/General/Icons/truck.svg"
    },
    'account_balance': {
        text: "Frais de port offert à partir de",
        field: "TSAFRANCO",
        measure_unit: "\u20ac",
        svg: "https://storage.pepperi.com/General/Icons/truck.svg"
    },
    'active-order':
    {
        name: "Commande en cours",
        buttonText: "Retour Commande",
        table: [{
            text: "Sous-Total",
            field: "SubTotal",
            measure_unit: "\u20ac"
        }, {
            text: "Total Quantit\u00e9",
            field: "QuantitiesTotal"
        }, {
            text: "Total HT",
            field: "GrandTotal",
            measure_unit: "\u20ac"
        }]
    }
}
var Brands = []

//Promotions block
var Promotions = [
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo/Title (1).png'
    }
]
var Promotions2 = [
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%221fed1213-9371-4267-8e07-c83c56b057e1%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo/Title (2).png'
    }
]
var Promotions3 = [
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2209fd1d0b-e9f8-414f-9c10-e3e4b72049ee%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo/Title (3).png'
    }
]
var Promotions4 = [
    {
        title: "",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%2202837f2a-b9c3-4bbd-a455-5c090d211c89%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/Corbeo/Title (4).jpg'
    }
]

var CaruselData = [
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/Corbeo/Carrousel - 1 Galan.jpg',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/Corbeo/Carrousel - 2b.png',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/Corbeo/Carrousel - 3.jpg',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/Corbeo/Carrousel - 4.jpg',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
];
customHomepage.test = "test"

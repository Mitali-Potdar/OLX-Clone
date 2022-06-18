var rand = Math.floor((Math.random() * 1000) + 1);
var imgURL = "https://picsum.photos/id/" + rand + "/400/200";

const content = [
    {
        id: "1",
        name: "product1",
        price: "$1000",
        img: imgURL
    },
    {
        id: "2",
        name: "product2",
        price: "$1000",
        img: imgURL
    },
    {
        id: "3",
        name: "product3",
        price: "$1000",
        img: imgURL
    },
    {
        id: "4",
        name: "product4",
        price: "$2000",
        img: imgURL
    },
    {
        id: "5",
        name: "product5",
        price: "$2000",
        img: imgURL
    },
    {
        id: "6",
        name: "product6",
        price: "$2000",
        img: imgURL
    },
]

export default content;
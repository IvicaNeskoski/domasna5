// 1. Warm up задача: креирајте функција која се вика exclaim. Оваа функција прима еден параметар, кој е стринг. Кога ќе ја повикате, оваа функција треба да го врати тој стринг и на неговиот крај да додаден извичник. Пример za резултат во конзолата : Javascript!

function exclaim(example) {
    return "JavaScript!";
};
console.log(exclaim())


// 2. Креирајте низа наречена books. Нека има пет објекти, во кој ќе има три properties:
// Title -> име на книгата //string
// Author -> име на авторот //string
// Price -> цена на книгата //number
// Цел на задачата: вратете ги книгите кој се поевтини од 400 денари во нова низа, наречена filteredBooks

var books = [
    {Title: "Mast The Ecstatic", Author: "Mohanji", price: 600},
    {Title: "The Power of Purity", Author: "Mohanji", price: 450},
    {Title: "Guru Leela", Author: "Mohanji", price: 400},
    {Title: "Truth: A Coffee Table", Author: "Mohanji", price: 350},
    {Title: "Autobiography Of A Yogi", Author: "Yogananda Paramahamsai", price: 250},
];

var filteredBooks = books.filter(books => {
    return books.price <= 400;
} );

console.log(filteredBooks);


// 3 Креирајте функција која се вика CountMs која има еден параметар кој е стринг. Функцијата враќа број, кој кажува колку пати буквата "M" се повторува во тој стринг.
// повикувањето би изгледало вака: CountMs("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM");

function CountMs(Movement) {
    let moment = 0;
    for(let i=0; i<Movement.length; i++){
        if(Movement[i]==="M"){
            moment++;
        };
    };
    return `In this string: ${Movement} the letter M is used ${moment} times`; 
};

console.log(CountMs("JSMAUWMFHFKVMSHUWDMMMSGMDUYWDNDMDHSUWM"));


//  4. Креирајте функција која се вика CountCharacters, која е слична на CountMs. Овој пат, ќе додадете уште еден еден параметар кој ќе каже која буква да ја провери колку пати се повторува во стрингот. (hint за оваа и за третата задача, ако може со length да се провери големината на низата, може и големината на стрингот. Уште еден hint: for loop)
// повикувањето би изгледало вака: CountCharacters("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM", "W");
 function CountCharacters(dog,cat){
    let animals = 0;
    for(let i=0; i<=dog.length; i++) {
        if(dog[i]===cat){
            animals ++;
        }
    }
    return `In this string: ${dog} the letter ${cat} is used: ${animals} times`
 };

 console.log(CountCharacters("JSAUWMFHFKVMSHUWDMMMSGDUYWDNDMDHSUWM", "W"));

//   5.  Креирајте функција која се вика LargestNumber. Оваа функција прима еден параметар: низа од бројки. Вратете го најголемиот број од таа низа.

// function LargestNumber(numbers([10,14,153,3524,12,3,213321,4213])) {
//     let Biggest = numbers[0];  
//     for( let i = 0; i<numbers.length; i++){
//         if(Biggest < numbers[i]){
//             Biggest = numbers[i];
// }; idk


/*
1. Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах

2. Написати ф-ю calculateDogAge яка приймає один параметр - вік собачки. Результатом її роботи буде вік перевединий на людський (1 рік собаки це 7 років в людини)

3. Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи
nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) // []
nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]

4. Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false
isObjectEmpty({}) // true
isObjectEmpty({name: 'user, age: {21}}) // false

5*. Створити обєкт піци з полями і методами
    В обєкті має бути такі поля і методи:

    5.1 поле для збереження розміру піци
    5.2 поле для збереження списку добавок
    5.3 поле для збереження списку соусів
    5.4 метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
    5.5 метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
    5.6 метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
    5.7 метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
    5.8 метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
    5.9 метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
    5.10 метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
    5.11 метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
    5.12 метод що показує час приготуванни в хвилинах в залежності від складності піци
    5.13 метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
        const SIZES = {
        BIG: { price: 25, cal: 100, time: 15 },
        SMALL : { price : 15, cal: 50, time: 7 },
        MEDIUM: { price : 15, cal: 50, time: 7 }
        },
        const STUFFING = {
        CHEESE: { price : 6.5, cal: 45, time: 2 },
        BEACON : { price : 10, cal: 70, time: 6 },
        TOMATO : { price : 12.1, cal: 4, time: 5 },
        CHICKEN : { price : 9.3, cal: 30, time: 5.1 }
        }
        const SAUCES = {
        MUSTARD: { price : 3, cal: 5, time: 1 },
        KETCHUP = { price : 4.2, cal: 20, time: 1.5 },
        BOLOGNESE = { price : 7.5, cal: 50, time: 3 }
        }
Створити всі методи і перевірити чи вони працюють

6. Написати ф-ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.

    Якщо прогрес доставки 100 показувати строку "Done"

    Якщо прогрес доставки < 100 показувати строку "In progress"

    Якщо прогрес доставки null показувати строку "Ready for delivery"

    const ordersA = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
    ]

    const ordersB = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
    ]

    showDeliveryStatus(ordersA) // "In Progress", "Done", "Ready for delivery"
    showDeliveryStatus(ordersB) // "In progress", "Not Ordered", "Ready for delivery"

7. Данно масив з обєктами. Виконати всі поставлені задачі використовуючи функціональні методи масивів

7.1 отримати масив вчених що народилися в 19 ст
7.2 знайти суму років скільки прожили всі вченні
7.3 Відсортувати вчених по алфавіту
7.4 Відсортувати вчених по кількості прожитих років
7.5 Видалити з масива вчених що народилися в 15 або 16 або 17 столітті
7.6 Знайти вченого який народився найпізніше.
7.7 Знайти рік народження Albert Einstein
7.8 знайти вчених прізвище яких починається на літеру С
7.9 Видалити з масива всіх вчених імя яких починається на A
7.10 Знайти вченого який прожив найбільше і вченого який прожив найменьше
7.11 Знайти вчених в яких співпадають перші літери імені і прізвища
7.12 Дізнатися чи всі вченні працювали в 19 столітті

const arr = [
{ name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
{ name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
{ name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
{ name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
{ name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
{ name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
{ name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
{ name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
{ name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
{ name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
{ name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
{ name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
]

8. Створити кнопку та інпут. Реалізувати відтворення рандомного числа в інпуті при натисканні на кнопку.

9. Створити кнопку при натисканні на яку буде змінюватися її колір та текст

10. Створити елемент img та кнопку. При натисканні на кнопку змінювати зображення.

11. Створити та додати в DOM дерево наступну розмітку з динамічно підставленими данними
------------------існуюча 
 <table class="transaction-table js-transaction-table">
      <thead>
        <tr>
          <th>ID транзакції</th>
          <th>Сума</th>
          <th>Дата</th>
          <th>Хто</th>
          <th>Тип транзації</th>
          <th>Ім'я рахунку</th>
          <th>Номер рахунку</th>
        </tr>
      </thead>
------------------потрібно додати      
      <tr>
         <td>ID транзакції</td>
         <td>Сума</td>
         <td>Дата</td>
         <td>Хто</td>
         <td>Тип транзації</td>
         <td>Ім'я рахунку</td>
         <td>Номер рахунку</td> 
     </tr> 
    </table>

    const transaction = [
    {
      id: '758d5283-358e-4fbb-b222-a17fd04e8916',
      amount: '179.07',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Bogan - DuBuque',
      name: 'Auto Loan Account 7313',
      type: 'deposit',
      account: '19808943',
    },
    {
      id: 'f0463ec4-7104-4adb-a41c-b1c7549055f8',
      amount: '930.87',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Legros, Weimann and Treutel',
      name: 'Auto Loan Account 0721',
      type: 'invoice',
      account: '38277848',
    },
    {
      id: '6c0e5a78-ad9f-46af-8299-44b77f5099d5',
      amount: '704.53',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Beatty, Wisozk and Koch',
      name: 'Savings Account 1894',
      type: 'withdrawal',
      account: '76727204',
    },
    {
      id: '16bd2a9d-7b0e-418f-a75c-7076e8ab6175',
      amount: '656.81',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Hane - Bode',
      name: 'Personal Loan Account 2316',
      type: 'withdrawal',
      account: '27462350',
    },
    {
      id: 'd328680d-4aa5-40ee-912b-9b5149b602e6',
      amount: '280.21',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Schulist - Waelchi',
      name: 'Savings Account 9032',
      type: 'payment',
      account: '99923313',
    },
    {
      id: 'e51fb348-8523-4e39-915f-39687ca4eebf',
      amount: '303.06',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Swaniawski - Hayes',
      name: 'Checking Account 0573',
      type: 'invoice',
      account: '75028346',
    },
    {
      id: 'cd727197-5ffb-45a7-9bf5-9d08092a1cce',
      amount: '462.59',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Berge - Reinger',
      name: 'Personal Loan Account 8173',
      type: 'invoice',
      account: '93437240',
    },
    {
      id: '247e150a-71ba-4df7-9836-5bb400e012bb',
      amount: '242.49',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Stroman Inc',
      name: 'Savings Account 1383',
      type: 'withdrawal',
      account: '18476423',
    },
    {
      id: '6224c740-ff23-429d-854a-c7b310f7653b',
      amount: '770.94',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Johns - Pagac',
      name: 'Auto Loan Account 1392',
      type: 'invoice',
      account: '07680863',
    },
    {
      id: '79ccb1dd-6544-47cc-9a40-ea453985a748',
      amount: '788.40',
      date: '2012-02-01T22:00:00.000Z',
      business: 'Ullrich, Shields and Koelpin',
      name: 'Personal Loan Account 8318',
      type: 'invoice',
      account: '07081761',
    },
  ];


*/
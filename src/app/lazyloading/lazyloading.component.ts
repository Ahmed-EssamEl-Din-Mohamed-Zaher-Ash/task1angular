import { Component } from '@angular/core';
import { LazyChildComponent } from "../lazy-child/lazy-child.component";

@Component({
  selector: 'app-lazyloading',
  standalone: true,
  imports: [LazyChildComponent],
  templateUrl: './lazyloading.component.html',
  styleUrl: './lazyloading.component.css'
})
export class LazyloadingComponent {

   foodArray = [
    {
      image: "https://via.placeholder.com/150",
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Chicken Tikka Masala",
      description: "Popular Indian curry dish with marinated chicken cooked in a spiced tomato sauce."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Sushi",
      description: "Japanese dish consisting of vinegared rice, seafood, and vegetables."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Tacos",
      description: "Traditional Mexican dish consisting of a folded or rolled tortilla filled with various mixtures."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Margherita Pizza",
      description: "Simple pizza topped with tomatoes, mozzarella cheese, and fresh basil."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Pad Thai",
      description: "Stir-fried rice noodle dish commonly served as street food in Thailand."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Peking Duck",
      description: "Famous Chinese dish featuring crispy roasted duck."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Hamburger",
      description: "American classic consisting of a cooked patty of ground meat placed inside a sliced bread roll."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Paella",
      description: "Spanish rice dish originally from Valencia, with seafood, chicken, and vegetables."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Croissant",
      description: "Buttery, flaky, and crescent-shaped French pastry."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Ramen",
      description: "Japanese noodle soup with meat, vegetables, and sometimes egg."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Fish and Chips",
      description: "Classic British dish of fried battered fish served with fried potatoes."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Tom Yum Soup",
      description: "Hot and sour Thai soup usually cooked with shrimp."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Dim Sum",
      description: "Variety of Chinese steamed or fried dumplings and other snack dishes."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Bibimbap",
      description: "Korean mixed rice dish topped with assorted vegetables, meat, and a fried egg."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Moussaka",
      description: "Greek baked dish made with layers of eggplant, potatoes, and minced meat."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Pho",
      description: "Vietnamese soup consisting of broth, rice noodles, herbs, and meat."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Lasagna",
      description: "Italian baked dish made with layers of pasta, meat, cheese, and tomato sauce."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Falafel",
      description: "Middle Eastern deep-fried balls made from ground chickpeas or fava beans."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Baklava",
      description: "Sweet pastry made of layers of filo filled with chopped nuts and sweetened with honey."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Butter Chicken",
      description: "Indian curry dish made with marinated chicken cooked in a spiced tomato and butter sauce."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Goulash",
      description: "Hungarian stew made with meat, vegetables, and paprika."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Ceviche",
      description: "Latin American dish of marinated raw fish or seafood."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Pasta Primavera",
      description: "Italian pasta dish with a variety of fresh vegetables."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Empanadas",
      description: "Pastry filled with various ingredients, commonly found in Latin American and Spanish cuisines."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Shawarma",
      description: "Middle Eastern dish of roasted meat served in a wrap or pita."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Quiche",
      description: "French savory tart filled with custard, cheese, meat, or vegetables."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Chili Con Carne",
      description: "Spicy stew containing chili peppers, meat, tomatoes, and beans."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Crepe",
      description: "Thin French pancake that can be filled with sweet or savory ingredients."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Samosa",
      description: "Indian pastry filled with spiced potatoes, peas, and sometimes meat."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Hummus",
      description: "Middle Eastern dip made from blended chickpeas, tahini, lemon juice, and garlic."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Biryani",
      description: "South Asian mixed rice dish with spices, meat, and vegetables."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Pierogi",
      description: "Polish dumplings filled with various ingredients like potatoes, cheese, or meat."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Coq au Vin",
      description: "French chicken stew cooked with wine, mushrooms, and bacon."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Poutine",
      description: "Canadian dish of french fries topped with cheese curds and gravy."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Kebabs",
      description: "Skewered and grilled meat commonly found in Middle Eastern and South Asian cuisines."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Cheesecake",
      description: "Rich dessert made with a cream cheese filling on a crust, often topped with fruit."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Wiener Schnitzel",
      description: "Austrian dish of breaded and fried veal cutlet."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Gumbo",
      description: "Louisiana stew made with a strong-flavored stock, meat or shellfish, and the 'holy trinity' of vegetables."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Ratatouille",
      description: "French Provençal stewed vegetable dish."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Tamales",
      description: "Mesoamerican dish made of masa or dough filled with various ingredients and steamed in a corn husk."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Satay",
      description: "Southeast Asian skewered and grilled meat served with a sauce."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Boeuf Bourguignon",
      description: "French beef stew braised in red wine with mushrooms and pearl onions."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Gazpacho",
      description: "Cold Spanish soup made from blended vegetables."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Beef Stroganoff",
      description: "Russian dish of sautéed pieces of beef served in a sauce with smetana."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Mochi",
      description: "Japanese rice cake made from mochigome, a short-grain japonica glutinous rice."
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Tiramisu",
      description: "Classic Italian dessert made of layers of coffee-soaked ladyfingers and mascarpone cheese."}]

}

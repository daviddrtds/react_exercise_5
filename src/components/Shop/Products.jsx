import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyBooks = [
  {
    id: "p1",
    price: 13,
    title: "The Silmarillion",
    description:
      "Tolkien's own mythological tales, collected together by his son and literary executor, of the beginnings of Middle-earth (and the tales of the High Elves and the First Ages) which he worked on and rewrote over more than 50 years.",
  },
  {
    id: "p2",
    price: 10,
    title: "The Hobbit",
    description:
      " The bedtime story for his children famously begun on the blank page of an exam script that tells the tale of Bilbo Baggins and the dwarves in their quest to take back the Lonely Mountain from Smaug the dragon.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite books</h2>
      <ul>
        {dummyBooks.map((i) => (
          <ProductItem key={i.id} {...i} />
        ))}
      </ul>
    </section>
  );
};

export default Products;

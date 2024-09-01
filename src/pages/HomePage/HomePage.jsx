import ButtonOrLink from "../../components/REUSABLE/ButtonOrLink/ButtonOrLink.jsx";
import Header from "../../components/Header/Header.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <section className={css.hero}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>You can find everything you want in our catalog</p>
        <ButtonOrLink type={"link"} text={"View Now"} redirectTo={'/campers'} addClass={css.link} />
      </section>
    </>
  );
}

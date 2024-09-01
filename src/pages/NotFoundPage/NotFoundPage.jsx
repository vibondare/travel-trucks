import ButtonOrLink from "../../components/REUSABLE/ButtonOrLink/ButtonOrLink.jsx";

export default function NotFoundPage() {
  return (
    <>
      <h2>404</h2>
      <p>Sorry, current page was not found</p>
      <ButtonOrLink type={"link"} redirectTo={"/"} text={"Go home"} />
    </>
  );
}

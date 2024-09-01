import BookCamperForm from "../BookCamperForm/BookCamperForm.jsx";
import css from "./BookCamper.module.css";

export default function BookCamper() {
    return (
        <div className={css.bookCamperContainer}>
        <h3 className={css.bookTitle}>Book your campervan now</h3>
        <p className={css.bookText}>Stay connected! We are always ready to help you.</p>
        <BookCamperForm />
        </div>
    )
}
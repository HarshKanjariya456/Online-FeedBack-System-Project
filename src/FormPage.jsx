import Navbar from "./Navbar.jsx";
import FeedbackForm from "./FeedbackForm.jsx";

export default function FormPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <FeedbackForm />
      </div>
    </>
  );
}
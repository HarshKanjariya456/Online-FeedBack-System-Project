import Navbar from "./Navbar.jsx";
import FeedbackForm from "./FeedbackForm.jsx";

export default function FormPage({ feedbacks, setFeedbacks }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <FeedbackForm
          feedbacks={feedbacks}
          setFeedbacks={setFeedbacks}
        />
      </div>
    </>
  );
}
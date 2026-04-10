export default function FeedbackList({ feedbacks }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Rating</th>
          <th>Feedback</th>
        </tr>
      </thead>

      <tbody>
        {feedbacks.map((f, i) => (
          <tr key={i}>
            <td>{f.name}</td>
            <td>{f.email}</td>
            <td>{f.rating}</td>
            <td>{f.feedback}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
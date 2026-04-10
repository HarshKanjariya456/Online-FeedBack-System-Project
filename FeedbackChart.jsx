import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function FeedbackChart({ feedbacks }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No feedback data to chart yet.</p>;
  }

  const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  feedbacks.forEach(f => {
    if (ratingCounts[f.rating] !== undefined) {
      ratingCounts[f.rating]++;
    }
  });

  const data = {
    labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
    datasets: [
      {
        label: "Number of Ratings",
        data: Object.values(ratingCounts),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Feedback Ratings Distribution',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return (
    <div style={{ marginTop: "40px", padding: "20px", background: "white", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

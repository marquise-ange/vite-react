import StoryCard from "./StoryCard";

export default function StoryList({ stories }) {
  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#1f2937",
          marginBottom: "8px",
        }}
      >
        Community Stories
      </h1>

      <p
        style={{
          color: "#6b7280",
          marginBottom: "30px",
          fontSize: "15px",
        }}
      >
        Read inspiring stories shared by the community.
      </p>

      {stories.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            background: "#fff",
            borderRadius: "16px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              fontSize: "60px",
              marginBottom: "15px",
            }}
          >
            📖
          </div>

          <h2
            style={{
              marginBottom: "10px",
              color: "#1f2937",
            }}
          >
            No stories yet
          </h2>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            Be the first to share a story with the community.
          </p>
        </div>
      )}
    </main>
  );
}
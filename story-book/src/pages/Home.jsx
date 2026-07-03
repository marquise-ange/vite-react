import { useEffect, useState } from "react";
import { getStories } from "../API/stories";
import StoryList from "../components/StoryList";
import { Link } from "react-router-dom";

export default function Home() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStory() {
      try {
        const data = await getStories();
        setStories(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchStory();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#2563eb",
        }}
      >
        📖 Loading stories...
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
      }}
    >
      {/* Hero Section */}
      <header
        style={{
          background:
            "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "15px",
          }}
        >
          📚 Story Book
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: 1.7,
            opacity: 0.95,
          }}
        >
          Discover inspiring stories, share your experiences, and connect
          with people from around the world.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "inline-block",
            padding: "12px 24px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
            fontWeight: "bold",
          }}
        >
          {stories.length} Stories Published
        </div>
        <div
        style={{
            marginTop: "30px",
            marginInline: "10px",
            gap: "10px",
            display: "inline-block",
            padding: "12px 24px",
            borderRadius: "999px",
            background: "white",
            backdropFilter: "blur(10px)",
            fontWeight: "bold",
          }}
        >
            <Link to="/add" style={{color: "#2563eb"}}>Add New Story</Link>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        {/* Stories Feed */}
        <section>
          <StoryList stories={stories} />
        </section>
      </main>
    </div>
  );
}
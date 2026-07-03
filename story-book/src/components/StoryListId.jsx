import { useEffect, useState } from "react";
import { getStoryById } from "../API/stories";
import { useParams } from "react-router-dom";

export default function StoryListId() {
  

  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStoryById(id);
        setStory(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id])

  if (loading) {
    return <div
    style={{ textAlign: "center", padding: "60px", color: "black" }}
    >Loading...</div>
  }

  if (error) {
    return <div
    style={{
          textAlign: "center",
          color: "red",
          padding: "60px",
        }}
    >Error: {error}</div>
  }

  
  
  return (
    <div
    style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <div style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "30px",
        }}>
      <h1>{story.authorName}</h1>
      <p>{story.content}</p>
      
    </div>
      </div>
      
  )
}
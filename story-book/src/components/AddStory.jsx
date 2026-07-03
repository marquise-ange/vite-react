import { useState } from "react";
import { createStory } from "../API/stories";

export default function AddStory() {
  const [authorName, setAuthorName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!authorName.trim() || !content.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const result = await createStory({
        authorName,
        content,
      });

      console.log(result);

      alert("🎉 Story published successfully!");

      setAuthorName("");
      setContent("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Author */}
      <div>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
            color: "#374151",
          }}
        >
          Author Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            fontSize: "16px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Story */}
      <div>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "600",
            color: "#374151",
          }}
        >
          Your Story
        </label>

        <textarea
          rows={8}
          placeholder="Share your story..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #d1d5db",
            resize: "vertical",
            fontSize: "16px",
            lineHeight: "1.6",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "15px",
          border: "none",
          borderRadius: "10px",
          background: loading
            ? "#9ca3af"
            : "linear-gradient(135deg,#2563eb,#4f46e5)",
          color: "#fff",
          fontSize: "16px",
          fontWeight: "600",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "0.3s",
        }}
      >
        {loading ? "Publishing..." : "🚀 Publish Story"}
      </button>
    </form>
  );
}
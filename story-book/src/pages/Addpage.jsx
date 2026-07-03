import AddStory from "../components/AddStory";

export default function AddPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fb",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Hero Section */}
        <div
          style={{
            background: "linear-gradient(135deg, #2563eb, #4f46e5)",
            color: "#fff",
            borderRadius: "20px",
            padding: "50px 30px",
            textAlign: "center",
            marginBottom: "35px",
            boxShadow: "0 10px 30px rgba(37,99,235,.25)",
          }}
        >
          <div style={{ fontSize: "4rem", marginBottom: "30px" }}>
            ✍️
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "2.5rem",
            }}
          >
            Share Your Story
          </h1>

          <p
            style={{
              marginTop: "15px",
              fontSize: "17px",
              lineHeight: "1.7",
              maxWidth: "600px",
              marginInline: "auto",
              opacity: 0.95,
            }}
          >
            Every story matters. Inspire others by sharing your experience,
            knowledge, or memorable moments with the community.
          </p>
        </div>

        {/* Form Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: "20px",
            padding: "35px",
            boxShadow: "0 8px 25px rgba(0,0,0,.08)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "10px",
              color: "#1f2937",
            }}
          >
            Create a New Story
          </h2>

          <p
            style={{
              color: "#6b7280",
              marginBottom: "30px",
            }}
          >
            Fill in the details below and publish your story for everyone to
            read.
          </p>

          <AddStory />
        </div>
      </div>
    </div>
  );
}
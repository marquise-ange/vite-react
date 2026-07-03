import { Link } from "react-router-dom";
import { deleteStoryById } from "../API/stories";

export default function StoryCard({ story }) {

  async function handleDelete(event) {
    event.preventDefault();
    if (window.confirm("Are you sure you want to delete this story?")) {
      try {
        await deleteStoryById(story.id);
        alert("Story deleted successfully");
        window.location.reload();
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    }
  }
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        border: '1px solid #e5e7eb',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '14px',
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#2563eb',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '18px',
            marginRight: '12px',
          }}
        >
          {story.authorName?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2
            style={{
              margin: 0,
              fontSize: '18px',
              color: '#111827',
            }}
          >
            {story.authorName}
          </h2>

          <p
            style={{
              margin: '4px 0 0',
              color: '#6b7280',
              fontSize: '14px',
            }}
          >
            Shared a story
          </p>
        </div>
      </div>

      {/* Content */}
      <p
        style={{
          color: '#374151',
          lineHeight: '1.7',
          fontSize: '15px',
          marginBottom: '18px',
        }}
      >
        {story.content}
      </p>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid #f3f4f6',
          paddingTop: '12px',
        }}
      >
        <Link
        to={`/edit/${story.id}`}
          style={{
            background: 'green',
            textDecoration: 'none',
            padding: '8px 16px',
            border: '1px solid #d1d5db',
            color: '#fff',
            borderRadius: '12px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          Edit
        </Link>

        <Link
        to={`/story/${story.id}`}
          style={{
            background: 'blue',
            textDecoration: 'none',
            padding: '8px 16px',
            border: '1px solid #d1d5db',
            color: '#fff',
            borderRadius: '12px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          View
        </Link>

        <button
        onClick={handleDelete}
          style={{
            background: 'red',
            padding: '8px 16px',
            border: '1px solid #d1d5db',
            color: '#fff',
            borderRadius: '12px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
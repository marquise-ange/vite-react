import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStoryById, updateStoryById } from '../API/stories';
import { useNavigate } from 'react-router-dom';

export default function UpdateStory() {
  const [authorName, setAuthorName] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStoryById(id);
        setAuthorName(data.authorName);
        setContent(data.content);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);

    if (!authorName.trim() || !content.trim()) {
      alert('Please fill in all fields');
      setSaving(false);
      return;
    }

    try {
      await updateStoryById(id, { authorName, content });
      alert('Story updated successfully');
      navigate(`/story/${id}`);
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '60px', color: 'black' }}>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          textAlign: 'center',
          color: 'red',
          padding: '60px',
        }}
      >
        Error: {error}
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f4f7fb',
        padding: '40px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          background: '#fff',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 8px 20px rgba(0,0,0,.08)',
        }}
      >
        <h1
          style={{
            marginBottom: '20px',
            color: '#1f2937',
          }}
        >
          ✏️ Update Story
        </h1>

        <p
          style={{
            color: '#6b7280',
            marginBottom: '30px',
          }}
        >
          Edit your story and save your changes.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
              }}
            >
              Author Name
            </label>

            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '10px',
                border: '1px solid #d1d5db',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
              }}
            >
              Story
            </label>

            <textarea
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '10px',
                border: '1px solid #d1d5db',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            style={{
              padding: '14px',
              border: 'none',
              borderRadius: '10px',
              background: saving ? '#9ca3af' : '#2563eb',
              color: '#fff',
              fontSize: '16px',
              fontWeight: '600',
              cursor: saving ? 'not-allowed' : 'pointer',
            }}
          >
            {saving ? 'Saving...' : '💾 Update Story'}
          </button>
        </form>
      </div>
    </div>
  );
}
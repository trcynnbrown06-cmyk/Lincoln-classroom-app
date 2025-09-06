import React, { useState } from "react";

// Example data: replace with real data or connect to your backend
const dummyPhotos = [
  {
    id: 1,
    url: "https://placekitten.com/400/300",
    likes: 2,
    comments: ["So cute!", "Great activity!"],
  },
  {
    id: 2,
    url: "https://placekitten.com/400/301",
    likes: 0,
    comments: [],
  },
];

const announcements = [
  "Welcome to our classroom page!",
  "Remember: No school next Friday.",
];

const learningTopics = [
  "Exploring the Solar System",
  "Reading: Storytime Adventures",
];

const homeExtensions = [
  "Read for 15 minutes tonight.",
  "Try the 'planet model' craft from our resources.",
];

const upcomingEvents = [
  { date: "2025-09-12", event: "Field Trip to Science Museum" },
  { date: "2025-09-20", event: "Parent-Teacher Conference" },
];

function ParentClassroomPage() {
  const [selectedSection, setSelectedSection] = useState("gallery");
  const [photos, setPhotos] = useState(dummyPhotos);
  const [newComment, setNewComment] = useState("");

  const handleLike = (photoId) => {
    setPhotos((prev) =>
      prev.map((p) =>
        p.id === photoId ? { ...p, likes: p.likes + 1 } : p
      )
    );
  };

  const handleAddComment = (photoId) => {
    if (!newComment.trim()) return;
    setPhotos((prev) =>
      prev.map((p) =>
        p.id === photoId
          ? { ...p, comments: [...p.comments, newComment] }
          : p
      )
    );
    setNewComment("");
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <h1>Classroom Parent Page</h1>
      <nav style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <button onClick={() => setSelectedSection("gallery")}>Photo Gallery</button>
        <button onClick={() => setSelectedSection("announcements")}>Announcements</button>
        <button onClick={() => setSelectedSection("learning")}>What We're Learning</button>
        <button onClick={() => setSelectedSection("extensions")}>At-Home Extensions</button>
        <button onClick={() => setSelectedSection("events")}>Upcoming Events</button>
      </nav>

      {selectedSection === "gallery" && (
        <section>
          <h2>Photo Gallery</h2>
          {photos.map((photo) => (
            <div key={photo.id} style={{ marginBottom: 20 }}>
              <img src={photo.url} alt="Classroom" style={{ width: "100%", maxWidth: 400 }} />
              <div>
                <button onClick={() => handleLike(photo.id)}>👍 Like ({photo.likes})</button>
              </div>
              <div>
                <strong>Comments:</strong>
                <ul>
                  {photo.comments.map((comment, idx) => (
                    <li key={idx}>{comment}</li>
                  ))}
                </ul>
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={() => handleAddComment(photo.id)}>Comment</button>
              </div>
            </div>
          ))}
        </section>
      )}

      {selectedSection === "announcements" && (
        <section>
          <h2>Announcements</h2>
          <ul>
            {announcements.map((a, idx) => (
              <li key={idx}>{a}</li>
            ))}
          </ul>
        </section>
      )}

      {selectedSection === "learning" && (
        <section>
          <h2>What We're Learning</h2>
          <ul>
            {learningTopics.map((topic, idx) => (
              <li key={idx}>{topic}</li>
            ))}
          </ul>
        </section>
      )}

      {selectedSection === "extensions" && (
        <section>
          <h2>At-Home Extensions</h2>
          <ul>
            {homeExtensions.map((ext, idx) => (
              <li key={idx}>{ext}</li>
            ))}
          </ul>
        </section>
      )}

      {selectedSection === "events" && (
        <section>
          <h2>Upcoming Events</h2>
          <ul>
            {upcomingEvents.map((event, idx) => (
              <li key={idx}>
                <strong>{event.date}:</strong> {event.event}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default ParentClassroomPage;
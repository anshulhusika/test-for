import React from "react";
import { Eye, AlertTriangle } from "lucide-react";
import "./App.css"; // Import custom CSS

const photos = [
  {
    id: 1,
    title: " Delhi leaks",
    views: 120,
    url: "https://i.postimg.cc/xT7fNXVj/1e7236c5-6d68-4b6c-8f3c-191d35b43f63.png",
    description: "leaked image of delhi girl , phone number : 7819868441 🤙 for fun 💦",
    isPrivate: true,
  },
  // {
  //   id: 2,
  //   title: "Forest Path",
  //   views: 85,
  //   url: "https://picsum.photos/id/1021/600/400",
  //   description: "A peaceful walk through a green forest path.",
  //   isPrivate: false,
  // },
  {
    id: 3,
    title: "Delhi leaks",
    views: 230,
    url: "https://i.postimg.cc/m2hZrQq6/9774723f-b741-4cf3-a967-3a312d37172e.png",
    description: "choos looooo",
    isPrivate: true,
  },
  // {
  //   id: 4,
  //   title: "Ocean View",
  //   views: 190,
  //   url: "https://picsum.photos/id/1025/600/400",
  //   description: "Waves crashing with a serene ocean view.",
  //   isPrivate: false,
  // },
];

export default function App() {
  return (
    <div className="container">
      <h1 className="title">📸 Private Gallery</h1>

      <div className="gallery">
        {photos.map((photo) => (
          <div key={photo.id} className="card">
            <img src={photo.url} alt={photo.title} className="photo" />
            <div className="card-content">
              <h2 className="photo-title">{photo.title}</h2>

              {/* 📝 Description */}
              <p className="photo-description">{photo.description}</p>

              {/* 👁 Views */}
              <div className="views">
                <Eye className="icon" />
                {photo.isPrivate ? "private views" : `${photo.views} views`}
              </div>

              {/* ⚠️ Warning if private */}
              {photo.isPrivate && (
                <div className="warning">
                  <AlertTriangle className="warning-icon" />
                  <p>
                    This photo is <strong>private</strong> and can only be
                    viewed by direct link. If you want to make it public, go to
                    the <strong>admin panel</strong>.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

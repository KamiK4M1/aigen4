"use client"

export default function Member() {
    const pictures = [''];
    return (
      <div className="picture-gallery">
        {pictures.map((picture, index) => (
          <div className="picture-item" key={index}>
            <img src={picture} alt={`Image ${index + 1}`} width={288} height={288} style={{ border: '1px solid black' }} />
            <p className="picture-name">Member {index + 1}</p>
          </div>
        ))}
      </div>
    );
  }
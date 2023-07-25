"use client"

export default function Member() {
  const pictures = ['url1', 'url2', 'url3']; // Replace with actual image URLs
   return (
    <div className="picture-gallery">
      {pictures.map((picture, index) => (
        <figure className="picture-item" key={index}>
          <img src={picture} alt={`Image ${index + 1}`} width={288} height={288} style={{ border: '1px solid black' }} />
          <figcaption className="picture-name">Member {index + 1}</figcaption>
        </figure>
      ))}
    </div>
  );
}
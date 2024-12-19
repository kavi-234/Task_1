import React from 'react';

const ImageGrid = () => {
  const images = [
    {
      id: 1,
      path: "/images/chickenParmesan.jpg",
      alt: "Chicken Parmesan",
      caption: "Chicken Parmesan"
    },
    {
      id: 2,
      path: "/images/shrimpScampi.jpg",
      alt: "Shrimp Scampi",
      caption: "Shrimp Scampi"
    },
    {
      id: 3,
      path: "/images/tomYumSoup.jpg",
      alt: "Tom Yum Soup",
      caption: "Tom Yum Soup"
    },
    {
      id: 4,
      path: "/images/pasta.jpg",
      alt: "Pasta",
      caption: "Pasta"
    },
    {
      id: 5,
      path: "/images/Ratatouille.jpg",
      alt: "Ratatouille",
      caption: "Ratatouille"
    },
    {
      id: 6,
      path: "/images/chickenTaco.jpg",
      alt: "Chicken Taco",
      caption: "Chicken Taco"
    }
  ];

  return (
    <div className="container py-4">
      <div className="row row-cols-3 g-4">
        {images.map((image) => (
          <div key={image.id} className="col">
            <div className="card h-100 shadow position-relative transition">
              <div style={{ height: '250px' }}>
                <img
                  src={image.path}
                  alt={image.alt}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
              <div className="position-absolute bottom-0 start-0 w-100 text-white" 
                   style={{ background: 'rgba(0,0,0,0.6)' }}>
                <p className="text-center mb-0 py-2">{image.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
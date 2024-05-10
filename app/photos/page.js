import Image from "next/image";
import Link from "next/link";

const getPhotos = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=6");
  const data = await response.json();
  return data;
};

export default async function Photos() {
  const photos = await getPhotos();

  return (
    <main>
      <div>
        {photos.map((photo) => {
          return (
            <div
              key={photo.id}
              className="carousel carousel-center rounded-box"
            >
              {/* /photos/4 */}
              <Link href={`/photos/${photo.id}`}>
                <div className="m-6 carousel-item">
                  <Image
                    alt="Picture of the author"
                    src={photo.image}
                    width={150}
                    height={150}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}

import Image from "next/image";

const getPhotos = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
};

export default async function PhotoId({ params }) {
  const photo = await getPhotos(params.id);

  return (
    <div className="flex flex-col items-center justify-center h-screen mx-32">
      <Image
        alt="Picture of the author"
        src={photo.image}
        width={150}
        height={150}
      />
      <div>
        <p>Id: {photo.id}</p>
        <p>Title: {photo.title}</p>
        <p>{photo.description}</p>
      </div>
    </div>
  );
}

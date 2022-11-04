import "./App.css";
import Header from "./Header";
import GalleryItem from "./GalleryItem";
import QuoteItem from "./QuoteItem";

const data = [
  {
    id: "Q1",
    type: "quote",
    author: "Albert Einstein",
    quote: "Never memorize something that you can look up",
  },
  {
    id: "0",
    type: "image",
    src: "https://picsum.photos/300?random=1",
    title: "Random Picture 1",
    info: "This is a random picture",
  },
  {
    id: "Q2",
    type: "quote",
    quote: "Sometimes memorize something that you can look up",
  },
  {
    id: "1",
    type: "image",
    src: "https://picsum.photos/300?random=2&blur=3",
    title: "Random Picture 2",
    info: "This is a random blurred picture",
  },
  {
    id: "2",
    type: "image",
    src: "https://picsum.photos/300?random=3&grayscale",
    title: "Random Picture 3",
    info: "This is a random grayscale picture",
  },
  {
    id: "3",
    type: "image",
    src: "https://picsum.photos/300?random=4&blur=3&grayscale",
    title: "Random Picture 4",
    info: "This is a random grayscale blurred picture",
  },
];

function App() {
  return (
    <div>
      <Header title="MyTitle" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {data.map((element) =>
          element.type === "image" ? (
            <GalleryItem key={element.id} itemData={element} />
          ) : (
            <QuoteItem key={element.id} itemData={element} />
          )
        )}
      </div>
    </div>
  );
}

export default App;

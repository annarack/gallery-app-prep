import "./QuoteItem.css";
export default function QuoteItem({ itemData }) {
  return (
    <div className="QuoteItem-container">
      <h3>"{itemData.quote}"</h3>
      <p>{itemData.author ? itemData.author : "Unknown author"}</p>
      <p>{itemData.author ?? "Unknown author"}</p>
    </div>
  );
}

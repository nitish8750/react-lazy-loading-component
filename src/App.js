import _ from "lodash";
import "./styles.css";
import LazyImage from "./LazyImage";

export default function App(s) {
  return (
    <div className="App">
      {_.range(100).map((index) => (
        <LazyImage
          key={index}
          src={`https://picsum.photos/100/100/?image=${index}`}
          alt="placeholdre"
        />
      ))}
    </div>
  );
}

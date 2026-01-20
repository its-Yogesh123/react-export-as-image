![npm](https://img.shields.io/npm/v/react-export-as-image)
![downloads](https://img.shields.io/npm/dm/react-export-as-image)
![license](https://img.shields.io/npm/l/react-export-as-image)
![react](https://img.shields.io/badge/react-16.8%2B-blue)
![build](https://img.shields.io/badge/build-passing-brightgreen)
![Language](https://img.shields.io/badge/language-javascript-yellow)
![GitHub stars](https://img.shields.io/github/stars/its-Yogesh123/react-export-as-image?style=social)

# react-export-as-image

Generate an image from a React component using HTML5 canvas and SVG.

A simple React hook built on top of **html-to-image** to export components as  
**PNG / JPEG / SVG** (React 16.8+ & React 18 compatible).

---

##  Features

- Supported Export format  **PNG / JPEG / SVG**
- Works with `React@18` (no deprecated APIs)
- Not using depriciated `domNode`
---

## Installation

```bash
npm install react-export-as-image
```

## Usage

```jsx
import { useExportAsImage } from "react-export-as-image";

function App() {
  const {ref,exportAsImage} = useExportAsImage();
  return (
    <div>
      <div ref={ref}>
        <h1>Download it</h1>
      </div>
      <button onClick={()=>{exportAsImage()}}>Download</button>
    </div>
  );
}

export default App;
```
## Export with High Quality (Social Media)
```jsx
const { ref, exportAsImage } = useExportAsImage({
  pixelRatio: 3
});
```

## Export in Jpeg
```jsx
const { ref, exportAsImage } = useExportAsImage({
  format: "jpeg",
  backgroundColor: "#ffffff"
});

```
## Export in SVG
```jsx
const { ref, exportAsImage } = useExportAsImage({
  format: "svg"
});
```

## All Options
```jsx
const { ref, exportAsImage } = useExportAsImage({
    fileName = "component.png",
    format = "png",
    quality = 0.95,
    pixelRatio = 2,
    backgroundColor
});
```

## License
This project is licensed under the [`MIT LICENSE`](./LICENSE)

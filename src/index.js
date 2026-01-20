import { useRef } from "react";
import * as htmlToImage from "html-to-image";

/**
 * React hook to export a component as an image
 */

export function useExportAsImage(options = {}) {
  const ref = useRef(null);

  const exportAsImage = async () => {
    if (typeof window === "undefined") return;
    if (!ref.current) return;
    const {
      fileName = "component.png",
      format = "png", // png | jpeg | svg
      quality = 0.95,
      pixelRatio = 2,
      backgroundColor
    } = options;

    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    let dataUrl;

    const commonOptions = {
      cacheBust: true,
      pixelRatio,
      backgroundColor
    };

    if (format === "jpeg") {
      dataUrl = await htmlToImage.toJpeg(ref.current, {
        ...commonOptions,
        quality
      });
    } else if (format === "svg") {
      dataUrl = await htmlToImage.toSvg(ref.current);
    } else {
      dataUrl = await htmlToImage.toPng(ref.current, commonOptions);
    }

    const link = document.createElement("a");
    link.download = fileName;
    link.href = dataUrl;
    link.click();
  };
  return { ref, exportAsImage };
}
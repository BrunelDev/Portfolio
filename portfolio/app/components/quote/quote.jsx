import { Image } from "next/image";
export function Quote() {
  return (
    <div class="quote-container">
      <div class="quote-group">
        <Image src="./quote.png" alt="quote symbol" class="quote-symbol1" />
        <br />
        <div class="quote">
          People&apos;s lives don&apos;t end when they die. It ends when they
          lose faith.
        </div>

        <Image src="./quote.png" alt="quote symbol" class="quote-symbol2" />
        <br />
        <div class="quote-author">- Itachi Uchiha</div>
      </div>
    </div>
  );
}

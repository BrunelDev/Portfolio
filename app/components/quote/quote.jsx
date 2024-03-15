import Image from "next/image";
export function Quote() {
  return (
    <div class="quote-container">
      <div class="quote-group">
        <Image
          src="/quote.png"
          alt="quote symbol"
          class="quote-symbol12 img"
          height={20}
          width={25}
        />
        <br />
        <div className="quote">
          People&apos;s lives don&apos;t end when they die. It ends when they
          lose faith.
        </div>

        <Image
          src="/quote.png"
          alt="quote symbol"
          className="quote-symbol2 img"
          height={20}
          width={25}
        />
        <br />
        <div className="quote-author">- Itachi Uchiha</div>
      </div>
    </div>
  );
}

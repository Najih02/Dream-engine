import { TICKER_TEXT } from '../config.js';

function DecoratedTickerText() {
  return TICKER_TEXT.split('/').map((part, index, array) => (
    <span className="ticker-item" key={`${part}-${index}`}>
      {part.trim()}
      {index < array.length - 1 && <b>/</b>}
    </span>
  ));
}

function Ticker() {
  return (
    <div className="ticker-wrap" aria-label="Dream Engine services ticker">
      <div className="ticker-track">
        <span>
          <DecoratedTickerText />
        </span>
        <span aria-hidden="true">
          <DecoratedTickerText />
        </span>
      </div>
    </div>
  );
}

export default Ticker;

import scorpionWebp from '../assets/escorpion.webp';

function ScorpionMark() {
  return (
    <span className="logo-scorpion" aria-label="Scorpion icon" title="Scorpio">
      <img
        className="scorpion-img"
        src={scorpionWebp}
        alt=""
        width="36"
        height="36"
        loading="eager"
        decoding="async"
        fetchPriority="low"
      />
    </span>
  );
}

export default ScorpionMark;

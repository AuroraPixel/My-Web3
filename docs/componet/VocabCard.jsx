import React from 'react';
import './css/VocabCard.css';

/**
 * 播放单词发音
 * @param {string} word 要发音的单词
 * @param {number} rate 语速
 */
const speak = (word, rate) => {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  }
};

/**
 * @param {Object} props
 * @param {Array<{en: string, zh: string}>} props.items
 */
export const VocabCard = ({ items }) => {
  const [speechRate, setSpeechRate] = React.useState(0.9);

  return (
    <div className="vocab-container">
      <div className="vocab-header">
        <span className="icon">📚</span>
        <h3>Today's Vocabulary</h3>
        <div className="speech-rate-control">
          <label htmlFor="rate-slider">语速: {speechRate}</label>
          <input
            id="rate-slider"
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={speechRate}
            onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
          />
        </div>
      </div>
      <div className="vocab-grid">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="vocab-item"
            onClick={() => speak(item.en, speechRate)}
            role="button"
            tabIndex={0}
            title="Click to hear pronunciation"
          >
            <div className="english">
              {item.en} 
              <span className="speaker-icon">🔊</span>
            </div>
            <div className="chinese">{item.zh}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabCard;
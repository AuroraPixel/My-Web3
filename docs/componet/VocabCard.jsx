import React from 'react';
import './css/VocabCard.css';

/**
 * 播放单词发音
 * @param {string} word 要发音的单词
 */
const speak = (word) => {
  // 检查浏览器是否支持语音合成
  if ('speechSynthesis' in window) {
    // 创建语音实例
    const utterance = new SpeechSynthesisUtterance(word);
    // 设置为英语发音
    utterance.lang = 'en-US';
    // 设置语速
    utterance.rate = 0.9;
    // 播放发音
    window.speechSynthesis.speak(utterance);
  }
};

/**
 * @param {Object} props
 * @param {Array<{en: string, zh: string}>} props.items
 */
export const VocabCard = ({ items }) => {
  return (
    <div className="vocab-container">
      <div className="vocab-header">
        <span className="icon">📚</span>
        <h3>Today's Vocabulary</h3>
      </div>
      <div className="vocab-grid">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="vocab-item"
            onClick={() => speak(item.en)}
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
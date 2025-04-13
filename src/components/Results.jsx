// React'i import ediyoruz
import React from 'react'

// Results bileşeni
// Props olarak:
// - score: Kullanıcının aldığı puan
// - onRestart: Quiz'i yeniden başlatmak için kullanılacak fonksiyon
function Results({ score, onRestart }) {
  return (
    <div className="card">
      <h2>Test Tamamlandı!</h2>
      <p>Toplam puanınız: {score}</p>
      <button onClick={onRestart}>Tekrar Başla</button>
    </div>
  )
}

export default Results 
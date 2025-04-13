// React'i import ediyoruz
import React from 'react'

// StartScreen bileşeni
// Props olarak onStart fonksiyonunu alıyor
// Bu fonksiyon, quiz'i başlatmak için kullanılacak
function StartScreen({ onStart }) {
  return (
    <div className="card">
      <h2>Hoş Geldiniz!</h2>
      <p>Teste başlamak için butona tıklayın.</p>
      
      {/* Quiz'i başlatan buton
          onStart prop'u ile gelen fonksiyonu onClick event'inde çağırıyoruz */}
      <button onClick={onStart}>Teste Başla</button>
    </div>
  )
}

export default StartScreen 
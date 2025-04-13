// React'i import ediyoruz
import React from 'react'

// Quiz bileşeni
// Props olarak onFinish fonksiyonunu alıyor
// Bu fonksiyon, quiz bittiğinde final puanını iletmek için kullanılacak
function Quiz({ onFinish }) {
  return (
    <div className="card">    
      <h2>Soru 1</h2>
      <p>React bir JavaScript kütüphanesidir?</p>
      <div className="options">
        {/* Doğru cevap butonu */}
        <button onClick={() => onFinish(1)}>Doğru</button>
        
        {/* Yanlış cevap butonu*/}
        <button onClick={() => onFinish(0)}>Yanlış</button>
      </div>
    </div>
  )
}

export default Quiz 
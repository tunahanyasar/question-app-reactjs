import { useNavigate } from 'react-router-dom'
import '../styles/Result.css'

// Result bileşeni - Sonuç sayfasını temsil eder
// Props olarak score objesini alır (doğru ve yanlış cevap sayılarını içerir)
const Result = ({ score }) => {
  // useNavigate hook'unu kullanarak navigate fonksiyonunu alıyoruz
  const navigate = useNavigate()
  
  // Toplam soru sayısı
  const totalQuestions = 10
  
  // Boş bırakılan soru sayısını hesapla
  // Toplam soru sayısından doğru ve yanlış cevapların toplamını çıkar
  const emptyAnswers = totalQuestions - (score.correct + score.wrong)
  
  // Eğer hesaplanan değer negatifse 0 yap
  const finalEmptyAnswers = emptyAnswers < 0 ? 0 : emptyAnswers

  return (
    <div className="result-container">
      <div className="result-box">
       
        <h1>Test Sonucu</h1>
        
        {/* Skor detayları container'ı */}
        <div className="score-details">
          {/* Doğru cevap sayısı */}
          <div className="score-item correct">
            <span>Doğru Cevap:</span>
            <span>{score.correct}</span>
          </div>
          
          {/* Yanlış cevap sayısı */}
          <div className="score-item wrong">
            <span>Yanlış Cevap:</span>
            <span>{score.wrong}</span>
          </div>
          
          {/* Boş bırakılan soru sayısı */}
          <div className="score-item empty">
            <span>Boş Cevap:</span>
            <span>{finalEmptyAnswers}</span>
          </div>
          
          {/* Toplam soru sayısı */}
          <div className="score-item total">
            <span>Toplam Soru:</span>
            <span>{totalQuestions}</span>
          </div>
        </div>
        
        {/* Ana sayfaya dönüş butonu */}
        <button className="restart-button" onClick={() => navigate('/')}>
          Tekrar Başla
        </button>
      </div>
    </div>
  )
}

export default Result 
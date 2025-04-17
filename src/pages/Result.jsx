import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/Result.css'

// Result bileşeni - Sonuç sayfasını temsil eder
// Props olarak score objesini alır (doğru ve yanlış cevap sayılarını içerir)
const Result = () => {
  // useNavigate hook'unu kullanarak navigate fonksiyonunu alıyoruz
  const navigate = useNavigate()
  const location = useLocation()
  const answerHistory = location.state?.answerHistory || []
  
  // Toplam soru sayısı
  const totalQuestions = 10
  
  // Doğru, yanlış ve boş cevap sayılarını answerHistory'den hesapla
  const correctCount = answerHistory.filter(item => item.isCorrect).length
  const wrongCount = answerHistory.filter(item => !item.isCorrect && !item.isSkipped).length
  const skippedCount = answerHistory.filter(item => item.isSkipped).length
  const emptyCount = totalQuestions - answerHistory.length

  // Tüm soruları içeren bir dizi oluştur
  const allQuestions = []
  
  // Cevaplanan soruları ekle
  answerHistory.forEach(item => {
    allQuestions.push({
      questionNumber: item.questionNumber,
      question: item.question,
      selectedAnswer: item.selectedAnswer,
      correctAnswer: item.correctAnswer,
      isCorrect: item.isCorrect,
      isSkipped: item.isSkipped,
      isAnswered: true
    })
  })
  
  // Boş bırakılan soruları ekle
  for (let i = 1; i <= totalQuestions; i++) {
    // Eğer bu soru numarası cevaplanmamışsa
    if (!allQuestions.some(q => q.questionNumber === i)) {
      allQuestions.push({
        questionNumber: i,
        question: "Bu soru cevaplanmadı",
        selectedAnswer: null,
        correctAnswer: null,
        isCorrect: false,
        isSkipped: false,
        isAnswered: false
      })
    }
  }
  
  // Soruları numaralarına göre sırala
  allQuestions.sort((a, b) => a.questionNumber - b.questionNumber)

  return (
    <div className="result-container">
      <h1>Test Sonucu</h1>
      
      {/* Answer History Section */}
      <div className="answer-history">
        <h2>Soru Detayları</h2>
        {allQuestions.map((item, index) => (
          <div key={index} className={`history-item ${
            !item.isAnswered 
              ? 'empty' 
              : (item.isSkipped 
                ? 'skipped' 
                : (item.isCorrect ? 'correct' : 'wrong'))
          }`}>
            <div className="question-number">Soru {item.questionNumber}</div>
            <div className="question-text">{item.question}</div>
            <div className="answer-details">
              <span>Seçilen Cevap: {item.selectedAnswer || (item.isSkipped ? "Atlandı" : "Cevaplanmadı")}</span>
              <span>Doğru Cevap: {item.correctAnswer || "Cevaplanmadı"}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Score Summary Section */}
      <div className="score-details">
        <div className="score-item correct">
          <span>Doğru Cevap:</span>
          <span>{correctCount}</span>
        </div>
        
        <div className="score-item wrong">
          <span>Yanlış Cevap:</span>
          <span>{wrongCount}</span>
        </div>
        
        <div className="score-item skipped">
          <span>Atlanan Soru:</span>
          <span>{skippedCount}</span>
        </div>
        
        <div className="score-item empty">
          <span>Boş Cevap:</span>
          <span>{emptyCount}</span>
        </div>
        
        <div className="score-item total">
          <span>Toplam Soru:</span>
          <span>{totalQuestions}</span>
        </div>
      </div>
      
      <button className="restart-button" onClick={() => navigate('/')}>
        Tekrar Başla
      </button>
    </div>
  )
}

export default Result 
// ============================================
// GEREKLİ MODÜLLERİN İMPORT EDİLMESİ
// ============================================
import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../js/questions'
import '../styles/Quiz.css'

// ============================================
// QUIZ BİLEŞENİNİN TANIMLANMASI VE PROPS
// ============================================
const Quiz = ({ setScore }) => {
  // ============================================
  // HOOK'LARIN VE STATE'LERİN TANIMLANMASI
  // ============================================
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showOptions, setShowOptions] = useState(false)
  const [timer, setTimer] = useState(30)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [correctAnswer, setCorrectAnswer] = useState(null)

  // ============================================
  // ZAMANLAYICI VE CEVAP ŞIKLARININ YÖNETİMİ
  // ============================================
  useEffect(() => {
    const initialTimer = setTimeout(() => setShowOptions(true), 4000)
    const questionTimer = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          handleNextQuestion()
          return 30
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(questionTimer)
    }
  }, [currentQuestion])

  // ============================================
  // CEVAP SEÇİMİ VE SKOR HESAPLAMA
  // ============================================
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer)
    setCorrectAnswer(questions[currentQuestion].answer)
    
    const isCorrect = answer === questions[currentQuestion].answer
    setScore((prev) => ({
      ...prev,
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      wrong: !isCorrect ? prev.wrong + 1 : prev.wrong
    }))
    
    if (currentQuestion === questions.length - 1) {
      navigate('/result', { replace: true })
    } else {
      setTimeout(handleNextQuestion, 1000)
    }
  }

  // ============================================
  // SONRAKİ SORUYA GEÇİŞ İŞLEMİ
  // ============================================
  const handleNextQuestion = useCallback(() => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setShowOptions(false)
      setTimer(30)
      setSelectedAnswer(null)
      setCorrectAnswer(null)
    } else {
      navigate('/result', { replace: true })
    }
  }, [currentQuestion, navigate])

  // ============================================
  // CEVAP BUTONLARININ STİL SINIFLARININ BELİRLENMESİ
  // ============================================
  const getButtonClassName = (option) => {
    if (selectedAnswer === null) return 'option-button'
    if (option === correctAnswer) return 'option-button correct'
    if (option === selectedAnswer && option !== correctAnswer) return 'option-button wrong'
    return 'option-button'
  }

  // ============================================
  // QUIZ ARAYÜZÜNÜN OLUŞTURULMASI
  // ============================================
  return (
    <div className="quiz-container">
      <div className="question-box">
        <div className={`timer ${
          timer <= 10 ? 'danger' : 
          timer <= 20 ? 'warning' : 
          'normal'
        }`}>
          Kalan Süre: {timer} saniye
        </div>
        <div className="question-number">
          Soru {currentQuestion + 1}/{questions.length}
        </div>
        <img
          src={`../public/pictures/${questions[currentQuestion].media}`}
          alt="Question"
          className="question-image"
        />
        <h2 className="question-text">{questions[currentQuestion].question}</h2>
        {showOptions && (
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={getButtonClassName(option)}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Quiz 
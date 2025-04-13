// React Router'dan useNavigate hook'unu import ediyoruz
// Bu hook, sayfalar arası geçiş yapmak için kullanılır
import { useNavigate } from 'react-router-dom'
// Home sayfası için özel stilleri import ediyoruz
import '../styles/Home.css'

// Home bileşeni - Ana sayfayı temsil eder
const Home = () => {
  // useNavigate hook'unu kullanarak navigate fonksiyonunu alıyoruz
  const navigate = useNavigate()

  return (
    // Ana container div'i
    <div className="home-container">
      {/* İçerik container'ı */}
      <div className="home-content">
        {/* Ana başlık */}
        <h1>Quiz App</h1>
        
        {/* Quiz bilgi kutusu */}
        <div className="info-box">
          <h2>Quiz Hakkında</h2>
          {/* Quiz kuralları listesi */}
          <ul>
            <li>Test 10 sorudan oluşmaktadır</li>
            <li>Her soru için 30 saniye süreniz vardır</li>
            <li>İlk 4 saniye cevap şıkları görünmeyecektir</li>
            <li>Geçmiş sorulara dönüş yapılamaz</li>
            <li>Test sonunda detaylı sonuç raporu alacaksınız</li>
          </ul>
        </div>
        
        {/* Quiz'e başlama butonu
            Tıklandığında /quiz route'una yönlendirir */}
        <button className="start-button" onClick={() => navigate('/quiz')}>
          Teste Başla
        </button>
      </div>
    </div>
  )
}

export default Home 
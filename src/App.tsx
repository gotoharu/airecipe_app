import './lib/supabase'
import './lib/groq'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // 👈 追加
import { HomePage } from './pages/HomePage'
import { FoodPage } from './pages/FoodPage' // 👈 移動先のページをインポート（実際のファイル名に合わせてください）
import { RecipePage } from './pages/RecipePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* URLが「/」のときは HomePage を表示 */}
        <Route path="/" element={<HomePage />} />
        
        {/* URLが「/foodpage」のときは FoodPage を表示 */}
        <Route path="/FoodPage" element={<FoodPage />} />

        <Route path="/RecipePage" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { Route, Routes } from "react-router-dom"
import TaskAsignedPage from "./components/TaskAsigned/TaskAsigned"
import TaskHistory from "./components/TaskHistory/TaskHistory"

import "./App.css"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<TaskAsignedPage />} />
        <Route path="/notification" element={<div>Notification</div>} />
        <Route path="/taskhistory" element={<TaskHistory />} />
      </Routes>
    </>
  )
}
export default App

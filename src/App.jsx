import AppointmentTable from "./components/AppointmentTable/AppointmentTable"
import Appointments from "./components/Appointments/Appointments"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"
import RevenueCharts from "./components/RevenueCharts/RevenueCharts"
import Statistics from "./components/Statistics/Statistics"

function App() {

  return (
    <div className="max-w-[990px] px-[50px] mx-auto">
      <Navbar />
      <Header />
      <Statistics />
      <RevenueCharts />
      <Appointments />
      <Portfolio />
      <AppointmentTable />
    </div>
  )
}

export default App

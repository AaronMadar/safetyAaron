import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UnityField from './components/fields/Unity.tsx'
import DateField from './components/fields/Date.tsx'
import Description from './components/fields/Description'
import Unitactivity from './components/fields/Unitactivity'
import KindOfIncident from './components/fields/KindOfIncident'
import Place from './components/fields/Place'
import SeverityIncident from './components/fields/SeverityIncident'
import Activity from './components/fields/Activity'
import Damage from './components/fields/Damage'
import Weather from './components/fields/Weather'
import Header from './components/Layout/Header'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header>
 <UnityField></UnityField>
  <DateField></DateField>
  <Description></Description>
  <Unitactivity></Unitactivity>
  <Activity></Activity>
  <KindOfIncident></KindOfIncident>
  <Place></Place>
  <SeverityIncident></SeverityIncident>
  <Damage></Damage>
  <Weather></Weather>
    </Header>
 
  </StrictMode>,
)

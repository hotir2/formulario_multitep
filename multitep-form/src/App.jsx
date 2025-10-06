// Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UserForm from './Components/UserForm'
import ReviewForm from './Components/ReviewForm'
import Thanks from './Components/Thanks'



// Hooks
import { userForm } from './hooks/userForm'

import './App.css'

function App() {
  const formComponents = 
  [
    <UserForm />, <ReviewForm />, <Thanks />
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = userForm(formComponents)

  return (
    <>
      <div className="App">
        <div className="header">
          <h2>Deixe a sua avaliação</h2>
          <p>
            Ficamos felizes com a sua compra, utilize o formulário abaixo 
            para avaliar o produto
          </p>
        </div>
        <div className="form-container">
          <p>Etapas</p>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button type='button' onClick={() => {changeStep(currentStep - 1)}}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
              )}
              {isLastStep ? (

                <button type='button'>
                <span>Enviar</span>
                <FiSend />

              </button>) : (

                <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />

              </button>)}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App


import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs';

import "./Thanks.css";





const Thanks = () => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante em breve você recebera um cupom de 10% de desconto para a sua próxima compra.
      </p>
      <p>
        Para concluir a sua avaliação clique no botão "Enviar" abaixo.
      </p>
      <h3>
        Aqui está o resumo da sua avaliação:
      </h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        <p className="review-data">
          <span>Comentário:</span>
          
        </p>
      </p>
    </div>
  )
}

export default Thanks
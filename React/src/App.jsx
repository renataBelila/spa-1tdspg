import Cabecalho from "./components/cabecalho"
import Conteudo from "./components/Conteudo"
import Rodape from "./components/rodape"
export default function App() {

  //Area declarativa 
  //Podemos fazer tudo aqui dentro

  let meuNome = "Renata";


  return (
    <>
     {/*fragmento inicial*/}




        {/*Área imperativa*/}
        {/*Vamos trabalhar com funções de alta ordem, não criamos funções de alta ordem*/}

        

        <div className="container">
          


          <Cabecalho nomDoUsuario = {meuNome}>
            Hello Word

          </Cabecalho>

          <Conteudo></Conteudo>

          <Rodape></Rodape>




   

 
        </div>

    </>
    
  )
}


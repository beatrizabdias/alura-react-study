import './formulario-de-eventos.estilos.css'
import { TituloFormulario } from '../TituloFormulario'
import { CampoDeEntrada } from '../CampoDeEntrada'
import { CampoDeFormulario } from '../CampoDeFormulario'
import { Botao } from '../Botao'
import { Label } from '../Label'
import { ListaSuspensa } from '../ListaSuspensa'


export function FormularioDeEvento({ temas, aoSubmeter }){

  function aoFormSubmetido(formData){
    const evento = {      
      capa: formData.get('capaEvento'),
      tema: temas.find(function (item) {
        return item.id == formData.get('temaEvento')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }
    aoSubmeter(evento)
  }
  
  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada type="text" id="nomeEvento" placeholder="Summer dev hits" name="nomeEvento"></CampoDeEntrada>
        </CampoDeFormulario>
          <CampoDeFormulario>
          <Label htmlFor="capaEvento">
            Qual o endereço da imagem de capa?
          </Label>
          <CampoDeEntrada type="text" id="capaEvento" placeholder="http://" name="capaEvento"></CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento:
          </Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento"></CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">
            Tema do evento:
          </Label>
          <ListaSuspensa id="temaEvento" name="temaEvento" itens={temas}/>
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>
          Criar evento
        </Botao>
      </div>
    </form>

  )
}
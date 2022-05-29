import styled from 'styled-components'



export default function ResetFormButton() {


const ResetButton = styled.button`
  width: 2rem;
  background-color: var(--groupo-red);
  padding: .2rem;
`;

const textButton = 'x'

const toolTipText = 'Réinitialiser le formulaire'


  return (
    <>
    
    <ResetButton
    title={toolTipText}
    type='button'
    >
    {textButton}
    </ResetButton>
    
    </>
  )
}

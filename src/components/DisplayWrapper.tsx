import { ReactNode} from 'react'


type DisplayWrapperProps = {
  component: JSX.Element | JSX.Element[] | ReactNode | ReactNode[] 
  developTime: string | number
}

export const DisplayWrapper: React.FC<DisplayWrapperProps> = ({component, developTime}) => {
  return ( 
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: "flex-start", marginBlock: "2rem"}}> 
      {component}
      <small style={{marginTop: '0.5rem', color: '#707070', fontSize: '0.75rem' , textTransform: 'uppercase'}} >Developtime: <span style={{fontWeight: 'bold', color: '#303030'}}>{developTime}</span>  </small>
    </div>
    )
  
}

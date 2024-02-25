
export const wrapperStyle ={
    display:'flex',
    margin: '0',
    height: '100vh',
    alignItems:'center',
    justifyContent:'center',
    color:'white',
    fontSize:'30px',
  }

const Wrapper = ({label}:{label:string}) => {

   

  return (
    <div style={wrapperStyle}>
        <p>{label}</p>
    </div>
  )
}

export default Wrapper
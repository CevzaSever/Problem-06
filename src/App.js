export default function ButtonVariants() {
  return (
    <span className='wrapper'>
      <button className='button-create' style={{backgroundColor:"blue", color:"white", margin:"10px"}}>Create</button>
      <button className='button-update' style={{backgroundColor:"green", color:"white", margin:"10px"}}>Update</button>
      <button className='button-delete' style={{backgroundColor:"red", color:"white", margin:"10px"}}>Delete</button>
    </span>
  )
}

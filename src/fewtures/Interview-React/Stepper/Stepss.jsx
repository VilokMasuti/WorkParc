const Stepss = ({step=[]}) => {
  return (
     <section className=" mx-auto mt-10">

<div>
{step.map((name, index) => {
  return (
    <div key={index} className=" flex
    ">
      <div className=" flex
      ">{index + 1}</div>
      <div>{name.label}</div>
    </div>
  )
})}


</div>

     </section>
  )
}
export default Stepss

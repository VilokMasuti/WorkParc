import { profileCards } from "../../Data"
import Pcard from "../Ui/Pcard"
const Profile = () => {

  return (
    <main className=" w-full   bg-slate-50 shadow-2xl  mx-auto  flex
     flex-col items-center justify-center flex-wrap">
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
{profileCards.map((card) => (
  <Pcard key={card.id} card={card} />
))}

      </section>

    </main>
  )
}
export default Profile

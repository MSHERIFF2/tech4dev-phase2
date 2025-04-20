
export default function NavBar() {
    const naveItems = ['Product', 'Element', 'Blog']
    const navElement = []

    for (let i=0; i < naveItems.length; i++) {
     navElement.push(<div className="hover:text-red-300  text-white cursor-pointer" key={i} >
     {naveItems[i]}
     </div>)
    }
     return < div className=" bg-gray-600  mb-4 w-full flex p-8 gap-x-4 justify-center text-xl ">{navElement}</div>

}

export default function NavBar() {
    const naveItems = ['About', 'Element', 'Blog']

    for (i in naveItems) {
        return (
            <>
                {naveItems[i]}
            </>
        )
    }

}

interface HeaderProps{
    children:React.ReactNode;
}

export default function Header({children}:HeaderProps){
    
    
    return (
        <section>   
        <h1>Safety Form</h1>
        {children}
        </section>
    )
}


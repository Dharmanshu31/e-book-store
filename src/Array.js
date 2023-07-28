export const Array=()=>{
    const book =["Bhagvatgita","wings of fire","Ramayan"];
    return(
        book.map((iteam)=>{
            return(
                <h3>{iteam}</h3>
            );
        })
    );
}
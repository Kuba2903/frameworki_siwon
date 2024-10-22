function FlexContainer({elements}){
    return(
        <>
            <div className="d-flex flex-wrap p-2">
                {elements.map((element, index) => (
                    <div key={index} style={{width: `18rem`}} className="border mb-3 p-3 ms-3">
                        {element.name}
                    </div>
                ))}
            </div>
        </>
    )
}

export default FlexContainer;
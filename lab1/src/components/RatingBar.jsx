function RatingBar({rate}){
    
    const startsCount = 10 - rate;
    let emptyStar = '☆';
    let fullStar = '★';
    
    while(fullStar.length < rate){
        fullStar += '★';

        if(fullStar.length == 10){
            emptyStar = '';
        }
    }

    while(emptyStar.length < startsCount){
        emptyStar += '☆';

        if(emptyStar.length == 10){
            fullStar = '';
        }
    }
    
    return(
        <>
            <div style={{ fontSize: '2rem', color: '#f0ad4e' }}>
                <span>{fullStar}{emptyStar}</span>
            </div>
        </>
    )
}

export default RatingBar;
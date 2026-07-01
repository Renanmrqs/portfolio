function Stack( {front, back, tec} ) {
    const listFront = front.map(front => <i className={front} key={front}></i>) 
    const listBack = back.map(back => <i className={back.icon} key={back.icon}></i>) 
    const listTec = tec.map(tec => <i className={tec} key={tec}></i>) 
    
    
    return (
        <div className="stack">
            <h1>Stack</h1>  

                <div className="stack-frontend">
                    frontend

                    <ul className="list-frontend">
                        {listFront}
                    </ul>

                </div>

                <div className="stack-backend">
                    backend

                    <ul className="list-backend">
                        {listBack.icon}
                        <span className="name-icon">{listBack.name}</span>
                    </ul>

                </div>

                <div className="stack-tecnologies">
                    Tecs
                    <ul className="list-tec">
                        {listTec}
                    </ul>
                    
                </div>

        </div>
    )
}

export default Stack
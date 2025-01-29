export function CardTwitter({userName, name, img}){
    return (
        //No podemos utilizar style en linea (style="display: flex"), pero si puede ser utilizado como objeto (style={{display: 'flex'}}). Example: style={{display: 'flex', color: '#fff'}}
        <article className='rt-cardtw'>
            <header className='rt-cardtw-header'>
                <img
                    className='rt-cardtw-avatar'
                    alt="El avatar de Astro"
                    src={`https://unavatar.io/${img}`}/>
                <div className='rt-cardtw-description'>
                    <strong>{name}</strong>
                    <span className='rt-cardtw-descripUsername'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className='rt-cardtw-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}

/*
export function CardTwitter(){
    return (
        <article className='rt-cardtw'>
            <header className='rt-cardtw-header'>
                <img
                    className='rt-cardtw-avatar'
                    alt="El avatar de Astro"
                    src="https://unavatar.io/girl"/>
                <div className='rt-cardtw-description'>
                    <strong>Pedro Castillo Terrones</strong>
                    <span className='rt-cardtw-descripUsername'>@MastersWord</span>
                </div>
            </header>

            <aside>
                <button className='rt-cardtw-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}*/

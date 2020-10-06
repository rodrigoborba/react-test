const NomeContext = React.createContext('nome');

function MeuComponente1(){
    const meuNome = 'Ayrton Teshima com Context API';
    return (
        <div className="componente-1">
            <MeuComponente2>
                <p>teste</p>
            </MeuComponente2>
        </div>
    )
}

function MeuComponente2(props){
    return (
        <div className="componente-2">
            <div>
                <header>{props.children}</header>
                <footer></footer>
            </div>
            <MeuComponente3/>
        </div>
    )
}

function MeuComponente3(){
    return (
        <div className="componente-3">
            <MeuComponente4/>
        </div>
    )
}

function MeuComponente4(){
    return (
        <div className="componentes-4">
            <p>Componente 4</p>
        </div>
            
    )
}

function MeuComponente(){
    return (
        <div id="componentes">
            <MeuComponente1 />
        </div>
    )
}

ReactDOM.render(
    <MeuComponente/>,
    document.getElementById('app')
)

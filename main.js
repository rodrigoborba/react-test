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
    const [telefone, setTelefone] = React.useState('51 3588-0101');

    setTimeout(() => {
        setTelefone('15 51 3588-0101');        
    }, 1000);

    return (
        <div className="componente-3">
            <MeuComponente4 telefone={telefone}/>
        </div>
    )
}

function MeuComponente4(props){
    const [idade, setIdade] = React.useState(28);
    

    setTimeout(function() {
        setIdade(39);
       
    }, 1000)

    return (
        <div className="componentes-4">
            <p>Componente 4  - {idade} - {props.telefone}</p>
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

function MeuComponenteIrmao(){
    
}

ReactDOM.render(
    <MeuComponente/>,
    document.getElementById('app')
)

const NomeContext = React.createContext('nome');

function MeuComponente1(props){
    const meuNome = 'Ayrton Teshima com Context API';
    return (
        <div className="componente-1">
            <MeuComponente2>
                <MeuComponente3 onClickIncrementar={props.onClickIncrementar}/>
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
        </div>
    )
}

function MeuComponente3(props){
    const [telefone, setTelefone] = React.useState('51 3588-0101');

    setTimeout(() => {
        setTelefone('15 51 3588-0101');        
    }, 1000);

    return (
        <div className="componente-3">
            <MeuComponente4 telefone={telefone} onClickIncrementar={props.onClickIncrementar}/>
        </div>
    )
}

function MeuComponente4(props){
    const [idade, setIdade] = React.useState(28);
    

    setTimeout(function() {
        setIdade(39);
       
    }, 1000)

    function clickBotao(){
        console.log('clicou 1');
    }

    return (
        <div className="componentes-4">
            <p>Componente 4  - {idade} - {props.telefone}</p>
            <button type="button" onClick={clickBotao}>Incrementar 1</button>

            <button type="button" onClick={() => {console.log('Clicou 2 ')}}>Incrementar 2</button>

            <button type="button" onClick={props.onClickIncrementar}>Incrementar 3</button>
        </div>
            
    )
}

function MeuComponente(props){
    return (
        <div id="componentes">
            <MeuComponente1 onClickIncrementar={props.onClickIncrementar}/>
        </div>
    )
}

function MeuComponenteIrmao(props){
    return (
        <div id="componente-irmao">
            <MeuComponenteIrmao2 contador={props.contador}/>
        </div>
    )
}

function MeuComponenteIrmao2(props){

    React.useEffect(function(){
        console.log('CRIOU OU ALTEROU');
    });

    return (
        <h2>Contador: {props.contador} </h2>
    )
}

function AppComponente(){

    const [ contador, incrementaContador] = React.useState(1);

    const clickIncrementa = function(){
        incrementaContador(contador + 1)
    }

    return (
        <React.Fragment>
            <MeuComponente onClickIncrementar={clickIncrementa}/>
            <MeuComponenteIrmao contador={contador}/>
        </React.Fragment>
    )
}

ReactDOM.render(
    <AppComponente/>,
    document.getElementById('app')
)

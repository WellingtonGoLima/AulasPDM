const Pedido = (props) => (
    <div className="card">
        <div className="card-header text-muted">
            {props.data}
        </div>
        <div className="card-body d-flex">
            <div class="d-flex align-items-center" >
                <i class={`fa-solid ${props.icone} fa-2x`}></i>
                <div className="flex-grow-1 ms-2 border p-1">
                    <h4 className="text-center">{props.titulo}</h4>
                    <p className="text-center"> {props.descricao}</p>
                </div>
            </div>
        </div>
    </div>
)

export default Pedido
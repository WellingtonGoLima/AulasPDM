import Pedido from "./Pedido"
const App = () => <div>
  <i class="fa-solid fa-cart-shopping fa-3x"></i>
  <div className="container border rounded my-2 p-3">
    <div className="row">
      <div className="col-sm-12 col-lg-6 col-xxl-4">
       <Pedido data="10/08/2024" icone="fa-hdd" titulo="SSD" descricao="SSD Kings" />
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-4">
        <Pedido data="11/04/2024" icone="fa-book" titulo="Livro" descricao="Pequeno Principe" />

      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-4">
        <Pedido data="12/08/2024" icone="fa-headphones" titulo="Headphone" descricao="Fone Bluetooth" />
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-4">

        <Pedido data="04/08/2024" icone="fa-hdd" titulo="SSD" descricao="SSD Kings" />
    </div>
  </div>
</div>
</div>


export default App
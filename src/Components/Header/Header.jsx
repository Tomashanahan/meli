import React from 'react'
import './Header.css'
import img_dyney from '../../img/header_disney.png'
import logo from '../../img/logo.png'
import img_ubicacion from '../../img/icons8-marker-o-50.png'
import svg_lupa from '../../img/icons8-búsqueda.png'
import flecha from '../../img/flecha.png' 
import usuario from '../../img/usuario.png'
import carrito from '../../img/carrito.png'
import campana from '../../img/campana.png'


function Header() {
  return (
    <div className='fondo'>
        <div className='header'>
            {/* <div className="header_superior"> */}
                <div className="header_superior_logo">
                    <a href="http://mercadolibre.com.ar" target="_blank" rel="noopener noreferrer">
                        {/* 💪🏼 Mercado libre */}
                        <img src={logo} alt="Mercado libre donde comprar todo lo que queres" />
                    </a>
                </div>
                <div className="header_superior-search">
                    <button className='header_superior-input_btn'>
                        <input className='header_superior-input' type="text" placeholder='Buscar productos, marcas y más...'/>
                        <img className='header_superior-img' src={svg_lupa} alt="lupa" height="18px" with="16px"/>
                    </button>
                </div>
                <img className='img_disney' src={img_dyney} alt="foto"  width="340px"/>
            {/* </div> */}

            {/* <div className="header_inferior"> */}
                <div className="header_inferior-datos_del_cliente">
                <img src={img_ubicacion} alt="img" height="27px" with="18px"/>
                    <div className='datos_envio'>
                    <p className='header_inferior-datos_del_cliente-envio'><span>Enviar a Tomas</span></p>
                    <p className='header_inferior-datos_del_cliente-envio'>Santa Fe 1200</p>
                    </div>
                </div>
                <div className="header_inferior_links">
                    <a className='header_inferior_a categorias' href="/categorias">
                        Categorías
                        <img className='flecha' src={flecha} width="10px" />
                    </a>
                    <a className='header_inferior_a' href="/ofertas">Ofertas</a>
                    <a className='header_inferior_a' href="/historial">Historial</a>
                    <a className='header_inferior_a' href="/supermercado">Supermercado</a>
                    <a className='header_inferior_a' href="/moda">Moda</a>
                    <a className='header_inferior_a' href="/vender">Vender</a>
                    <a className='header_inferior_a' href="/ayuda">Ayuda</a>
                </div>
                <div className="header_inferior_carrito">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20c1.97 0 3.773-.712 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634 8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="rgba(51,51,51,1)"/></svg> */}
                    <a className='header_inferior_a carrito' href="/cliente">
                        Tomas
                        <img className='flecha' src={flecha} width="10px" />
                    </a>
                    <a className='header_inferior_a carrito' href="/compras">Mis compras</a>
                    <a className='header_inferior_a carrito' href="/favoritos">
                        Favoritos
                        <img className='flecha' src={flecha} width="10px" />
                    </a>
                    {/* <img src={campana} width="20px"/> */}
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAY9JREFUSEvtlEFOwlAQhv9Ra2CHN9AToDsDJJYbsLDmLeEE6gnEE4gnkJ2VuoATgJGyFU8iO41Vx7zSZ6C+19dI2Pk2TTPz/m9m3swQ1nxozfrIDRBepcmgKxkQgc/9YNLNE5wV0Gy4pbet91MmOiOgJEUZmBFzp/Cxfd3tj2ZZoEyAiloJp4UkaIM2Wre9x74JYgRIcYBukosDMHX8+/FI/ovjmgv6agN0NLdzy1QyLUCIw13+3HyaR26+LE5qbTBfyEyKkbOnK5cekFwEMPCDsJFVY+FVRnEmRJd+b9xO++oBXnUKoAymuiqLCTIvFw8ZmN4F4UFeAEtHPwitXRa/iVc1+psy+Af8PMWvEsWT60Qvf3mDQuTspFt1CSDFX51oSMA+gGc/COXXekTSdbKTipFTX4QsAZSjFC9EjmvbM4qcZC2nvJxu1zQg7h5dqrY0TKXVAmxiNvvi/KQAydjbFDLt/OAHE1e55JrUVXi5AGprLoEMyy3XLtJFnECasY2oq9ucunu5Mlh7iVYBfANnocQZIRucPgAAAABJRU5ErkJggg=="/>

                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXlJREFUSEvNlEFSwkAQRX9DFVvxBngCAzETduoJ9AbiVhfKCcQTyEa34gnUG+Au6RCMJ1BPIGxTBWNFEUZIJqkKsext9/SbNz0zhIKDCu6PvwMIYcqZzUhK6nneoL0Ou7mBAvjqWyrRvuMM+nkhK0dk241zKekKwCOzf7h2gGEY1Uql/PFtMdlynOAtDyR2yEKYPQBHORoHzH49Wh8LsCzLIJo+5wC8M/u1RECUEMIMAGxLKY89bxgZpcbCnC6ZBx0twLIaLSK6BTDX1RFms3sFUFVnp31oQpgjABtSluqe50VGibHYkHxiHu79FGoBlmV2iXAG4I7Zb+kAQjT6AO0uH6kW0Gwatem0HGkjDCebQRBERiuh1I3DcFJT61L/IiHMBwAHRLLtusNuHECInQ4gL+JMswCi13yfeoUSvpdUgHplUyAvzL6xXJMJkGX3STWZALZtXkuJEyLcuK5/qjbT5bQPTW2ifuXM/q9N6XKZAYUbFD6Dfw34BO62phkKUMrBAAAAAElFTkSuQmCC"/>
                    
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default Header
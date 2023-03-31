//  cuentas

let usuario = [
  {
    nombre: "Mali",
    password: "123",
    saldo: 200,
  },
  {
    nombre: "Gera",
    password: "123",
    saldo: 290,
  },
  {
    nombre: "Maui",
    password: "123",
    saldo: 67,
  },
];

// Variables globales

let user = "";
let pass = "";
let saldo = 0;
let monto = "";
let usuarioVerificado = undefined;
let montoMaximo = 990;
let montoMinimo = 10;

//document.getElementById("verificarButton").addEventListener("click", verificarData);

// funciones auxiliares

function validarUsuario(usuario) {
  document.querySelector(".login").style.display = "none";
  user = document.getElementById("userInput").value;
  pass = document.getElementById("passInput").value;
  let encontrado = false;

  for (let i = 0; i < usuario.length; i++) {
    if (user === usuario[i].nombre && pass === usuario[i].password) {
      saldo = usuario[i].saldo;
      usuarioVerificado = usuario[i].nombre;
     
      encontrado = true;
      break;
    }
  }

  if (encontrado) {
    pantallaBienvenida();
    mostrarBotones();
  } else {
    console.log(`NO VERIFICADO`);
    mostrarMensajeError();
  }
}

function consultarSaldo() {
  console.log(`USUARIO:${user} SALDO:${saldo} `);
  mostrarSaldo();
}

function depositarMonto() {
  // Obtener el valor del input y convertirlo a un número
  monto = parseFloat(document.getElementById("depositoInput").value);

  let aprobado = false;

  if (monto < 0 || monto === "" || isNaN(monto)) {
    let nodoMensajeMontoInvalido = document.querySelector("#pantalla");
    nodoMensajeMontoInvalido.innerHTML = `
      <div class="alert alert-warning">
        <p>${user} no puedes depositar un valor negativo</p>
      </div>
    `;
    
  } else if (monto + saldo <= montoMaximo) {
    if (user === usuarioVerificado && monto != "") {
      aprobado = true;
      // Actualizar el saldo del usuario correspondiente en el arreglo "usuario"
      saldo += monto;
      saldo = saldo;
    }

    if (aprobado) {
      console.log(
        `Depósito de ${monto} realizado en la cuenta de ${user}. Tu nuevo saldo es: ${saldo}.`
      );
      let nodoMensajeMontoDepositado = document.querySelector("#pantalla");
      nodoMensajeMontoDepositado.innerHTML = `
                   <div class="alert alert-success">
                       <p>${user} tu deposito de $${monto} fue realizado con exito!</p>
                       <p>Tu nuevo saldo es: $${saldo}.</p>
                        
                   </div>
               
            `;
    } else {
      let nodoMensajeMontoInvalido = document.querySelector("#pantalla");
      nodoMensajeMontoInvalido.innerHTML = `
                       <div class="alert alert-warning">
                           <p>${user} tienes que depositar un valor</p>
                            
                       </div>
                   
                `;
      console.log(`tienes que depositar un valor`);
    }

    // Devolver el saldo actualizado del usuario
    //return saldo;
  } else {
    console.log(`saldo mayor a ${montoMaximo}`);
    montoMaximoDepositado();
  }
}

function retirarMonto() {
  // Obtener el valor del input y convertirlo a un número
  monto = parseFloat(document.getElementById("retiroInput").value);
  let aprobado = false;

  if (monto < 0 || monto === "" || isNaN(monto)) {
    let nodoMensajeMontoInvalido = document.querySelector("#pantalla");
    nodoMensajeMontoInvalido.innerHTML = `
      <div class="alert alert-warning">
        <p>${user} no puedes retirar un valor negativo</p>
      </div>
    `;
  } else if (saldo - monto >= montoMinimo) {
    if (user === usuarioVerificado && monto != "") {
      aprobado = true;
      // Actualizar el saldo del usuario correspondiente en el arreglo "usuario"
      saldo -= monto;
      saldo = saldo;
    }

    if (aprobado) {
      console.log(
        `Monto retirado ${monto} de la cuenta de ${user}. Tu nuevo saldo es: ${saldo}.`
      );
      let nodoMensajeMontoRetirado = document.querySelector("#pantalla");
      nodoMensajeMontoRetirado.innerHTML = `
                         <div class="alert alert-success">
                             <p>${user} tu retiro de $${monto} fue realizado con exito!</p>
                             <p>Tu nuevo saldo es: $${saldo}.</p>
                              
                         </div>
                     
                  `;
    } else {
      let nodoMensajeMontoInvalido = document.querySelector("#pantalla");
      nodoMensajeMontoInvalido.innerHTML = `
                         <div class="alert alert-warning">
                             <p>${user} tienes que ingresar un valor para retirar</p>
                             
                              
                         </div>
                     
                  `;
    }

    // Devolver el saldo actualizado del usuario
    //return saldo;
    console.log("monto retirado");
  } else {
    montoMinimoRetirado();
  }
}
/**PANTALLAS */

function mostrarMensajeError() {
  let nodoMensaje = document.querySelector("#pantalla");
  nodoMensaje.innerHTML = `
            <div class="alert alert-danger">
                <p>⚠ Error vuelve a ingresar los datos ⚠</p>
                <p></p>
                <p></p>
            </div>
        
     `;
}

function mostrarBotones() {
  let nodoBotones = document.querySelector("#botones");
  nodoBotones.innerHTML = `
            <div>
                <button class="btn btn-outline-secondary" onclick="consultarSaldo()">Consultar saldo</button>
                <button class="btn btn-outline-secondary" onclick="pantallaIngresarMonto()">Ingresar monto</button>
                <button class="btn btn-outline-secondary" onclick="pantallaRetirarMonto()">Retirar Monto</button>
            </div>
        
     `;
}

function pantallaBienvenida() {
  let nodoBienvenida = document.querySelector("#pantalla");
  nodoBienvenida.innerHTML = `
            <div class="alert alert-warning">
                <p>Bienvenido ${user}</p>
                
            </div>
        
     `;
}

function mostrarSaldo() {
  let nodoSaldo = document.querySelector("#pantalla");
  nodoSaldo.innerHTML = `
                <div class="alert alert-info">
                    <p>Hola ${user}</p>
                    <p>Tu saldo es $${saldo} </p>
                   
                </div>
            
         `;
}

function pantallaIngresarMonto() {
  console.log("patalla ingresar monto");
  let nodoIngresarMonto = document.querySelector("#pantalla");
  nodoIngresarMonto.innerHTML = `
  <div>
  <p>${user} cuanto deseas depositar?</p>
  <input type="number" class="form-control" id="depositoInput" placeholder="Monto" value="0">
  <div class="p-3"><button class="btn btn-success" onclick="depositarMonto()">Depositar</button></div>

</div>

                
             `;
}

function pantallaRetirarMonto() {
  console.log("patalla retirar monto");
  let nodoIngresarMonto = document.querySelector("#pantalla");
  nodoIngresarMonto.innerHTML = `
                                <div>
                                    <p>${user} cuanto dinero deseas retirar?</p>
                                    <input type="number" class="form-control" id="retiroInput" placeholder="Monto" value="">
                                    <div class="p-3"><button class="btn btn-danger " onclick="retirarMonto()">Retirar</button></div>
            
                                </div>
                            
                         `;
}

function montoMaximoDepositado() {
  limiteDeposito = montoMaximo - saldo;
  let nodoMaximoDepositado = document.querySelector("#pantalla");
  nodoMaximoDepositado.innerHTML = `
                                <div class="alert alert-danger" role="alert">
                                    <p>${user} tu cuenta no puede tener mas de $990 </p>
                                    <p>Puedes depositar un maximo de ${limiteDeposito} </p>
                                               
                                </div>
                            
                         `;
}
function montoMinimoRetirado() {
  limiteRetiro = saldo - montoMinimo;
  let nodoMaximoDepositado = document.querySelector("#pantalla");
  nodoMaximoDepositado.innerHTML = `
                                <div class="alert alert-danger">
                                    <p>${user} tu cuenta no puede tener menos de $10 </p>
                                    <p>Puedes retirar un maximo de ${limiteRetiro} </p>
                                               
                                </div>
                            
                         `;
}
function salir() {
  document.querySelector(".login").style.display = "block";
  let nodoSalir = document.querySelector("#pantalla");
  let nodoBotones = document.querySelector("#botones");

  nodoSalir.innerHTML = `
                                <div>
                                    <p> </p>
                                               
                                </div>
                            
                         `;
  nodoBotones.innerHTML = `
                                   <div>
                                      
                                   </div>
                               
                            `;
}
/*

console.log(`${usuario[1].nombre} tiene ${usuario[1].saldo} de saldo`)

*/

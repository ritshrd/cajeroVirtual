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

//document.getElementById("verificarButton").addEventListener("click", verificarData);

function guardarData() {
  document.getElementById("login").style.display = "none";
  user = document.getElementById("userInput").value;
  pass = document.getElementById("passInput").value;

  for (let i = 0; i < usuario.length; i++) {
    if (user === usuario[i].nombre && pass === usuario[i].password) {
      saldo = usuario[i].saldo;
      console.log(
        `VERIFICADO: USUARIO:${user} CONTRASEÑA:${pass} SALDO:${saldo} `
      );
    }
  }

  /*    
    console.log('el usuario ingresado es: '+user);
    console.log('la contraseña es: '+pass);
*/
  validarUsuario(usuario);
}

// funciones auxiliares

function validarUsuario(usuario) {
  let encontrado = false;

  for (let i = 0; i < usuario.length; i++) {
    if (user === usuario[i].nombre && pass === usuario[i].password) {
      pantallaBienvenida();
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
  for (let i = 0; i < usuario.length; i++) {
    saldo = usuario[i].saldo;

    if (user === usuario[i].nombre) {
      console.log(`USUARIO:${user} SALDO:${saldo} `);

      mostrarSaldo();
    }
  }
}

function depositarMonto() {

    
  // Obtener el valor del input y convertirlo a un número
  monto = parseFloat(document.getElementById("depositoInput").value);
  let aprobado = false;

  for (let i = 0; i < usuario.length; i++) {
    if (user === usuario[i].nombre && monto != "") {
      aprobado = true;
      // Actualizar el saldo del usuario correspondiente en el arreglo "usuario"
      usuario[i].saldo += monto;
      saldo = usuario[i].saldo;
    }
  }

  if (aprobado) {
    console.log(
      `Depósito de ${monto} realizado en la cuenta de ${user}. Tu nuevo saldo es: ${saldo}.`
    );
    let nodoMensajeMontoDepositado = document.querySelector("#pantalla");
    nodoMensajeMontoDepositado.innerHTML = `
                     <div>
                         <p>${user} tu deposito de $${monto} fue realizado con exito!</p>
                         <p>Tu nuevo saldo es: $${saldo}.</p>
                          
                     </div>
                 
              `;
  } else {
    console.log(`tienes que depositar un valor`);
  }

  // Devolver el saldo actualizado del usuario
  //return saldo;
}

function retirarMonto() {
  // Obtener el valor del input y convertirlo a un número
  monto = parseFloat(document.getElementById("retiroInput").value);
  let aprobado = false;

  for (let i = 0; i < usuario.length; i++) {
    if (user === usuario[i].nombre && monto != "") {
      aprobado = true;
      // Actualizar el saldo del usuario correspondiente en el arreglo "usuario"
      usuario[i].saldo -= monto;
      saldo = usuario[i].saldo;
    }
  }

  if (aprobado) {
    console.log(
      `Monto retirado ${monto} de la cuenta de ${user}. Tu nuevo saldo es: ${saldo}.`
    );
    let nodoMensajeMontoRetirado = document.querySelector("#pantalla");
    nodoMensajeMontoRetirado.innerHTML = `
                         <div>
                             <p>${user} tu retiro de $${monto} fue realizado con exito!</p>
                             <p>Tu nuevo saldo es: $${saldo}.</p>
                              
                         </div>
                     
                  `;
  } else {
    console.log(`tienes que ingresar un valor`);
  }

  // Devolver el saldo actualizado del usuario
  //return saldo;
  console.log("monto retirado");
}

/**PANTALLAS */

function mostrarMensajeError() {
  let nodoMensaje = document.querySelector("#pantalla");
  nodoMensaje.innerHTML = `
            <div>
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
                <button onclick="consultarSaldo()">Consultar saldo</button>
                <button onclick="pantallaIngresarMonto()">Ingresar monto</button>
                <button onclick="pantallaRetirarMonto()">Retirar Monto</button>
            </div>
        
     `;
}

function pantallaBienvenida() {
  let nodoBienvenida = document.querySelector("#pantalla");
  nodoBienvenida.innerHTML = `
            <div>
                <p>Bienvenido ${user}</p>
                
            </div>
        
     `;
}

function mostrarSaldo() {
  let nodoSaldo = document.querySelector("#pantalla");
  nodoSaldo.innerHTML = `
                <div>
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
                        <input type="number" id="depositoInput" placeholder="Monto" value="">
                        <button onclick="depositarMonto()">Depositar</button>

                    </div>
                
             `;
}

function pantallaRetirarMonto() {
  console.log("patalla retirar monto");
  let nodoIngresarMonto = document.querySelector("#pantalla");
  nodoIngresarMonto.innerHTML = `
                                <div>
                                    <p>${user} cuanto dinero deseas retirar?</p>
                                    <input type="number" id="retiroInput" placeholder="Monto" value="">
                                    <button onclick="retirarMonto()">Retirar</button>
            
                                </div>
                            
                         `;
}
/*

console.log(`${usuario[1].nombre} tiene ${usuario[1].saldo} de saldo`)

*/

class Nodo {
    constructor( valor ) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }

}

class Arbol {
    constructor () {
        this.raiz = null;
    }

    agregarElemento ( valor ) {
        const nuevo = new Nodo(valor);
        console.log(`${JSON.stringify(this.raiz)}`);
        if ( this.raiz === null ) {
            console.log('entra aqui');
            this.raiz = nuevo;
            return
        }
        else {
            this.agregar( nuevo, this.raiz )
        }

    }

    agregar ( nuevo, nodo ) {
        console.log(`El nuevo valor es ${nuevo.valor} y el nodo raiz es ${nodo.valor}`);
        if ( nuevo.valor < nodo.valor) {
            if (nodo.izquierda === null) {
                nodo.izquierda = nuevo;
            } else {
                this.agregar(nuevo, nodo.izquierda);
            }
        }
        else {
            if (nodo.derecha === null) {
                nodo.derecha = nuevo;
            } else {
                this.agregar(nuevo, nodo.derecha);
            }
        }
        
    }

    buscar( valor ) {
        return this.buscarElemento( valor, this.raiz )
    }

    buscarElemento (valor, nodo) {
        if ( !nodo ) {
            if ( valor === nodo.valor ) {
                this.buscar(valor. nodo.izquierda)
            }
            else {
                this.buscar(valor. nodo.derecha)
            }
        }
        return nodo.valor
    }

    enOrden() {
        const resultado = [];
        this.enOrdenAux(this.raiz, resultado);
        return resultado;
    }

    enOrdenAux( nodo, resultado) {
        if ( nodo ) {
            this.enOrdenAux( nodo.izquierda, resultado );
            resultado.push(nodo.valor);
            this.enOrdenAux( nodo.derecha, resultado ); 
        }

    }

    enPreorden () {
        const resultado = [];
        this.enPreordenAux(this.raiz, resultado)
        return resultado;
    }

    enPreordenAux( nodo, resultado ) {
        if ( nodo ) {
            resultado.push(nodo.valor);
            this.enPreordenAux(nodo.izquierda, resultado)
            this.enPreordenAux(nodo.derecha, resultado)
        }
    }

    enPostorden () {
        const resultado = [];
        this.enPostordenAux(this.raiz, resultado)
        return resultado;
    }

    enPostordenAux( nodo, resultado ) {
        if ( nodo ) {
            this.enPreordenAux(nodo.izquierda, resultado)
            this.enPreordenAux(nodo.derecha, resultado)
            resultado.push(nodo.valor);
        }
    }
}

const arbol = new Arbol();
arbol.agregarElemento(10);
arbol.agregarElemento(20);
arbol.agregarElemento(9);
arbol.agregarElemento(5);
arbol.agregarElemento(10);

console.log(arbol.raiz);

// console.log(arbol.buscar(5)); 

console.log(arbol.enOrden());
console.log(arbol.enPreorden());
console.log(arbol.enPostorden());

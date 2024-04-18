
class Nodo{
    constructor(valor){
        this.valor=valor;
        this.adyacentes=[];
        this.valoresAristas=[];
    }
}

class Grafo{
    constructor(){
        this.nodos=[];
    }
    agregarNodo(valor){
        let nodo=new Nodo(valor);
        this.nodos.push(nodo);
    }
    agregarArista(valor1,valor2,valorArista){
        let nodo1=this.buscarNodo(valor1);
        let nodo2=this.buscarNodo(valor2);
        nodo1.adyacentes.push(nodo2);
        nodo2.adyacentes.push(nodo1);
        nodo1.valoresAristas.push(valorArista);
        nodo2.valoresAristas.push(valorArista);
    }
    buscarNodo(valor){
        for(let i=0;i<this.nodos.length;i++){
            if(this.nodos[i].valor==valor){
                return this.nodos[i];
            }
        }
        return null;
    }
    buscarArista(valor1,valor2){
        let nodo1=this.buscarNodo(valor1);
        let nodo2=this.buscarNodo(valor2);
        if ( !nodo1 || !nodo2 ) {
            return null
        }
        for(let i=0;i<nodo1.adyacentes.length;i++){
            if(nodo1.adyacentes[i].valor==valor2){
                return nodo1.valoresAristas[i];
            }           
        }
        return null;
    }
    buscarCamino(valor1, valor2){
        let nodo1=this.buscarNodo(valor1);
        let nodo2=this.buscarNodo(valor2);
        let distancia = 0
        const nodosRevisados = []

        return this.hallarCamino(nodo1, nodo2, distancia, nodosRevisados)
    }

    hallarCamino(nodo1, nodo2, distancia, nodosRevisados){
        for(let i=0;i<nodo1.adyacentes.length;i++){
            let nodoAux=nodo1.adyacentes[i];
            if ( !nodosRevisados.includes(nodoAux.valor) ) {
                console.log(`quiero ir del punto ${nodo1.valor} al putno ${nodo2.valor}`);
                console.log(`el nodo ${nodo1.valor} tiene adyacente ${nodoAux.valor}`);
    
                distancia =+ nodoAux.valoresAristas[i]
                if(nodoAux.valor == nodo2.valor){
                    return distancia
                }  
                nodosRevisados.push(nodo1.valor)
                this.hallarCamino(nodoAux, nodo2, distancia, nodosRevisados )
            }
        }
    }
}   
let grafo=new Grafo();
grafo.agregarNodo("A");
grafo.agregarNodo("B");
grafo.agregarNodo("C");
grafo.agregarNodo("D");


grafo.agregarArista("A","B",200);
grafo.agregarArista("A","C",300);
grafo.agregarArista("A","D",400);
grafo.agregarArista("B","C",100);

const valorArista = grafo.buscarArista("B","D")

if( valorArista ){
    console.log("La arista existe");
    console.log(`El valor de la arista es: ${valorArista}`);
}
else{
    console.log(`La distancia entre los puntos es de ${grafo.buscarCamino('B','D')}`);
    console.log("La arista no existe");
}

//realizar una funcion que permita encontrar
//la distancia como suma de aristas entre dos nodos que no estan conectados directamente
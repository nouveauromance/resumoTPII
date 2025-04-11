// !! Factory Method

// Produto
class Produto { usar() {} }

// Produto concreto
class ProdutoA extends Produto { usar() { console.log("Produto A"); } }

// Criador base
class Fabrica {
  criarProduto() {} // método fábrica
}

// Criador concreto
class FabricaA extends Fabrica {
  criarProduto() { return new ProdutoA(); }
}

// Dica mental: Tem um método fábrica numa superclasse que é sobrescrito nas filhas.
// Exemplo: transportes, provas, serviços.

// !! Abstract Factory

// Interfaces dos produtos
class Botao { render() {} }
class Menu { render() {} }

// Produtos concretos
class BotaoWin extends Botao { render() { console.log("Windows"); } }
class MenuWin extends Menu { render() { console.log("Windows Menu"); } }

// Fábrica abstrata
class UIFactory {
  criarBotao() {}
  criarMenu() {}
}

// Fábrica concreta
class WinFactory extends UIFactory {
  criarBotao() { return new BotaoWin(); }
  criarMenu() { return new MenuWin(); }
}

// Dica mental: Cria vários produtos que combinam entre si (família de objetos).
// Exemplo: UI para SO, personagens com arma/habilidade, e-commerce por categoria.

// !! Builder

class Produto {
  constructor() { this.partes = []; }
}

class ProdutoBuilder {
  constructor() { this.produto = new Produto(); }
  adicionarParte(p) { this.produto.partes.push(p); return this; }
  construir() { return this.produto; }
}

// Uso:
const meuProduto = new ProdutoBuilder()
  .adicionarParte("parte 1")
  .adicionarParte("parte 2")
  .construir();

// Dica mental: Monta um objeto passo a passo. Às vezes com um “diretor” que segue receita.
// Exemplo: pizza, relatório, grade horária.

// !! Prototype

class Documento {
  constructor(titulo) { this.titulo = titulo; }
  clone() { return new Documento(this.titulo); }
}

// Dica mental: Tem um .clone() que faz uma cópia personalizada do objeto.
// Exemplo: pizza com alteração, formas CAD, cargos de RH.

// !! Singleton

class Sistema {
  constructor() {
    if (Sistema.instancia) return Sistema.instancia;
    this.config = {};
    Sistema.instancia = this;
  }

  static getInstance() {
    if (!Sistema.instancia) {
      Sistema.instancia = new Sistema();
    }
    return Sistema.instancia;
  }
}

// Dica mental: Tem getInstance() e guarda tudo numa instância estática.
// Exemplo: configurações, logger, cache, carrinho, validador.

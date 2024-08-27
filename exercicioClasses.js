class funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
}

seApresentar(){
    console.log(`Meu nome é ${this.nome}, tenho ${this.idade} e sou ${this.cargo}.`);
}

trabalhar(){
    console.log(`${this.nome} está trabalhando`);
}

class gerente extends funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar(){
            console.log(`${this.nome} já está gerenciando ${this.departamento}`);
            return;
        
    }
}

class desenvolvedor extends funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

}

    programar(){
       console.log(`${this.nome} está programando em ${this.linguagem}`)
        
}

const gerente = new Gerente('Marcos',55,'Gerente de projetos','TI');
const desenvolvedor = new Desenvolvedor('Renata',31,'Desenvolvedor fullstack','Javascript');

gerente.seApresentar();
gerente.trabalhar();
gerente.gerenciar();

console.log("");

desenvolvedor.seApresentar();
gerente.trabalhar();
desenvolvedor.programar();
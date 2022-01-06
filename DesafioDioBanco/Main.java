package DesafioDioBanco;

public class Main {
    public static void main(String[] args) {
        Cliente Larissa = new Cliente();
        Larissa.setNome("Larissa");

        Conta cc = new ContaCorrente(Larissa);
        Conta cp = new ContaPoupanca(Larissa);

        cc.depositar(100);
        cc.transferir(100,cp);

        cc.imprimirExtrato();
        cp.imprimirExtrato();
    }
}

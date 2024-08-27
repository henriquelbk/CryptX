import Web3 from "web3";
import ABI from "./ABI.json";

const CONTRACT_ADDRESS = "0x728A576d9fF16358DE6F6E5a611Fc7046700a4B1";

// Função de conexão e login

export async function doLogin(){
    if (!window.ethereum) throw new Error("No Metamask found");

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    if (!accounts || !accounts.length) throw new Error("Wallet not found or allowed");

    localStorage.setItem("wallet", accounts[0]);

    return accounts[0];
}

// Função de envio do Post

function getContract(){
    if (!window.ethereum) throw new Error("No Metamask found");

    const web3 = new Web3(window.ethereum);
    const from = localStorage.getItem("wallet");

    return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, {from});
}

export async function addPost(text){
    const contract = getContract();
    return contract.methods.addPost(text).send();
}

// Função de alteração do UserName

export async function changeUsername(newName){
    const contract = getContract();
    return contract.methods.changeUsername(newName).send();
}
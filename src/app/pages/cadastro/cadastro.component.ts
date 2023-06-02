import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/Services/usuario.service';
import { Usuario } from '../../Model/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private router: Router, private service: UsuarioService) {}

  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthdate: '',
    password: '',
    usPerson: false,
    terms: false,
    receiveNews: false,
    receiveMarketUpdates: false
  };

  countries = [
    'Afeganistão',
    'África do Sul',
    'Albânia',
    'Alemanha',
    'Andorra',
    'Angola',
    'Antígua e Barbuda',
    'Arábia Saudita',
    'Argélia',
    'Argentina',
    'Armênia',
    'Austrália',
    'Áustria',
    'Azerbaijão',
    'Bahamas',
    'Bahrein',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Bélgica',
    'Belize',
    'Benin',
    'Bolívia',
    'Bósnia e Herzegovina',
    'Botsuana',
    'Brasil',
    'Brunei',
    'Bulgária',
    'Burkina Faso',
    'Burundi',
    'Butão',
    'Cabo Verde',
    'Camarões',
    'Camboja',
    'Canadá',
    'Catar',
    'Cazaquistão',
    'Chade',
    'Chile',
    'China',
    'Chipre',
    'Colômbia',
    'Comores',
    'Congo',
    'Coreia do Norte',
    'Coreia do Sul',
    'Costa do Marfim',
    'Costa Rica',
    'Croácia',
    'Cuba',
    'Dinamarca',
    'Djibuti',
    'Dominica',
    'Egito',
    'El Salvador',
    'Emirados Árabes Unidos',
    'Equador',
    'Eritreia',
    'Eslováquia',
    'Eslovênia',
    'Espanha',
    'Estados Unidos',
    'Estônia',
    'Eswatini',
    'Etiópia',
    'Fiji',
    'Filipinas',
    'Finlândia',
    'França',
    'Gabão',
    'Gâmbia',
    'Gana',
    'Geórgia',
    'Granada',
    'Grécia',
    'Guatemala',
    'Guiana',
    'Guiné',
    'Guiné Equatorial',
    'Guiné-Bissau',
    'Haiti',
    'Holanda',
    'Honduras',
    'Hungria',
    'Iêmen',
    'Ilhas Marshall',
    'Ilhas Maurício',
    'Índia',
    'Indonésia',
    'Irã',
    'Iraque',
    'Irlanda',
    'Islândia',
    'Israel',
    'Itália',
    'Jamaica',
    'Japão',
    'Jordânia',
    'Kiribati',
    'Kuwait',
    'Laos',
    'Lesoto',
    'Letônia',
    'Líbano',
    'Libéria',
    'Líbia',
    'Liechtenstein',
    'Lituânia',
    'Luxemburgo',
    'Macedônia do Norte',
    'Madagascar',
    'Malásia',
    'Malavi',
    'Maldivas',
    'Mali',
    'Malta',
    'Marrocos',
    'Mauritânia',
    'México',
    'Mianmar',
    'Micronésia',
    'Moçambique',
    'Moldávia',
    'Mônaco',
    'Mongólia',
    'Montenegro',
    'Namíbia',
    'Nauru',
    'Nepal',
    'Nicarágua',
    'Níger',
    'Nigéria',
    'Noruega',
    'Nova Zelândia',
    'Omã',
    'Palau',
    'Panamá',
    'Papua Nova Guiné',
    'Paquistão',
    'Paraguai',
    'Peru',
    'Polônia',
    'Portugal',
    'Quênia',
    'Quirguistão',
    'Reino Unido',
    'República Centro-Africana',
    'República Dominicana',
    'República Tcheca',
    'Romênia',
    'Ruanda',
    'Rússia',
    'Samoa',
    'San Marino',
    'Santa Lúcia',
    'São Cristóvão e Nevis',
    'São Tomé e Príncipe',
    'São Vicente e Granadinas',
    'Seicheles',
    'Senegal',
    'Serra Leoa',
    'Sérvia',
    'Singapura',
    'Síria',
    'Somália',
    'Sri Lanka',
    'Sudão',
    'Sudão do Sul',
    'Suécia',
    'Suíça',
    'Suriname',
    'Tailândia',
    'Taiwan',
    'Tajiquistão',
    'Tanzânia',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad e Tobago',
    'Tunísia',
    'Turcomenistão',
    'Turquia',
    'Tuvalu',
    'Ucrânia',
    'Uganda',
    'Uruguai',
    'Uzbequistão',
    'Vanuatu',
    'Vaticano',
    'Venezuela',
    'Vietnã',
    'Zâmbia',
    'Zimbábue'
  ];

  /* formatPhoneNumber(phoneNumber: string): string {
    const cleanedPhoneNumber = phoneNumber.replace(/[-.()]/g, '');
    let formattedPhoneNumber = '+';
    formattedPhoneNumber += cleanedPhoneNumber.substr(0, 2) + ' ';
    formattedPhoneNumber += cleanedPhoneNumber.substr(2, 2) + ' ';
    formattedPhoneNumber += cleanedPhoneNumber.substr(4, 1) + ' ';
    formattedPhoneNumber += cleanedPhoneNumber.substr(5);
    return formattedPhoneNumber;
  } */

  registerUser() {
    const usuario: Usuario = {
      idUsuario: '', // Defina o valor apropriado
      nome: this.user.firstName,
      sobrenome: this.user.lastName,
      email: this.user.email,
      login: this.user.login, // Adicione a propriedade login
      password: this.user.password, // Adicione a propriedade password
      telefone: this.user.phone,
      dataDeNascimento: new Date(this.user.birthdate),
      endereco: this.user.address,
      informacoesDeEndereco: this.user.addressInfo,
      cidade: this.user.city,
      pais: this.user.country,
      cep: this.user.zipcode,
      estado: this.user.state,
      referencia: this.user.reference
    };
  
    this.service.cadastrarUsuario(usuario).subscribe(
      response => {
        console.log('Usuário cadastrado com sucesso:', response);
        console.log(usuario);
        console.log("login: "+usuario.login+" Senha: "+usuario.password);
      },
      error => {
        console.error('Erro ao cadastrar usuário:', error);
      }
    );
    const rotaDesejada = '/home';
    this.router.navigateByUrl(rotaDesejada)
  }

  
  

  email(email: string = 'vimvmvbnmvbnmvi@gmail.com') {
    this.service.buscarEmail(email).subscribe(
      (user: any) => {
        this.user = user;
        console.log(this.user);
      },
      (error: any) => {
        console.error(error);
        alert('Email não cadastrado')
      }
    );
  }
  
  
}

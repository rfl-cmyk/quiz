import AnswerModel from "@/models/answer";
import QuestionModel from "@/models/question";

const questions: QuestionModel[] = [
  new QuestionModel(
    1,
    "Qual bicho transmite a Doença de Chagas?",
    [
      AnswerModel.incorrectAnswer("Abelha"),
      AnswerModel.incorrectAnswer("Barata"),
      AnswerModel.incorrectAnswer("Pulga"),
      AnswerModel.correctAnswer("Barbeiro"),
    ],
    false
  ),
  new QuestionModel(
    2,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      AnswerModel.incorrectAnswer("Caju"),
      AnswerModel.incorrectAnswer("Côco"),
      AnswerModel.incorrectAnswer("Chuchu"),
      AnswerModel.correctAnswer("Abóbora"),
    ],
    false
  ),
  new QuestionModel(
    3,
    "Qual é o coletivo de cães?",
    [
      AnswerModel.incorrectAnswer("Manada"),
      AnswerModel.incorrectAnswer("Alcateia"),
      AnswerModel.incorrectAnswer("Rebanho"),
      AnswerModel.correctAnswer("Matilha"),
    ],
    false
  ),
  new QuestionModel(
    4,
    "Qual é o triângulo que tem todos os lados diferentes?",
    [
      AnswerModel.incorrectAnswer("Equilátero"),
      AnswerModel.incorrectAnswer("Isóceles"),
      AnswerModel.incorrectAnswer("Trapézio"),
      AnswerModel.correctAnswer("Escaleno"),
    ],
    false
  ),
  new QuestionModel(
    5,
    "Quem compôs o Hino da Independência?",
    [
      AnswerModel.incorrectAnswer("Castro Alves"),
      AnswerModel.incorrectAnswer("Manuel Bandeira"),
      AnswerModel.incorrectAnswer("Carlos Gomes"),
      AnswerModel.correctAnswer("Dom Pedro I"),
    ],
    false
  ),
  new QuestionModel(
    6,
    'Qual é o antônimo de "malograr"?',
    [
      AnswerModel.incorrectAnswer("Perder"),
      AnswerModel.incorrectAnswer("Fracassar"),
      AnswerModel.incorrectAnswer("Desprezar"),
      AnswerModel.correctAnswer("Conseguir"),
    ],
    false
  ),
  new QuestionModel(
    7,
    "Em que país nasceu Carmen Miranda?",
    [
      AnswerModel.incorrectAnswer("Argentina"),
      AnswerModel.incorrectAnswer("Espanha"),
      AnswerModel.incorrectAnswer("Brasil"),
      AnswerModel.correctAnswer("Portugal"),
    ],
    false
  ),
  new QuestionModel(
    8,
    "Qual foi o último Presidente do período da ditadura militar no Brasil?",
    [
      AnswerModel.incorrectAnswer("Costa e Silva"),
      AnswerModel.incorrectAnswer("Emílio Médici"),
      AnswerModel.incorrectAnswer("Ernesto Geisel"),
      AnswerModel.correctAnswer("João Figueiredo"),
    ],
    false
  ),
  new QuestionModel(
    9,
    "Seguindo a sequência do baralho, qual carta vem depois do dez?",
    [
      AnswerModel.incorrectAnswer("Ás"),
      AnswerModel.incorrectAnswer("Nove"),
      AnswerModel.incorrectAnswer("Rei"),
      AnswerModel.correctAnswer("Valete"),
    ],
    false
  ),
  new QuestionModel(
    10,
    'O adjetivo "venoso" está relacionado a:',
    [
      AnswerModel.incorrectAnswer("Vela"),
      AnswerModel.incorrectAnswer("Vento"),
      AnswerModel.incorrectAnswer("Vênia"),
      AnswerModel.correctAnswer("Veia"),
    ],
    false
  ),
  new QuestionModel(
    11,
    "Que nome se dá à purificação por meio da água?",
    [
      AnswerModel.incorrectAnswer("Abrupção"),
      AnswerModel.incorrectAnswer("Abolição"),
      AnswerModel.incorrectAnswer("Abnegação"),
      AnswerModel.correctAnswer("Ablução"),
    ],
    false
  ),
  new QuestionModel(
    12,
    "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
    [
      AnswerModel.incorrectAnswer("Monte Branco"),
      AnswerModel.incorrectAnswer("Monte Fuji"),
      AnswerModel.incorrectAnswer("Monte Carlo"),
      AnswerModel.correctAnswer("Monte Everest"),
    ],
    false
  ),
  new QuestionModel(
    13,
    "Em que parte do corpo se encontra a epiglote?",
    [
      AnswerModel.incorrectAnswer("Estômago"),
      AnswerModel.incorrectAnswer("Pâncreas"),
      AnswerModel.incorrectAnswer("Rim"),
      AnswerModel.correctAnswer("Pescoço"),
    ],
    false
  ),
  new QuestionModel(
    14,
    "A compensação por perda é chamada de...",
    [
      AnswerModel.incorrectAnswer("Déficit"),
      AnswerModel.incorrectAnswer("Indexação"),
      AnswerModel.incorrectAnswer("Indébito"),
      AnswerModel.correctAnswer("Indenização"),
    ],
    false
  ),
  new QuestionModel(
    15,
    "Que personagem do folclore brasileiro tem uma perna só?",
    [
      AnswerModel.incorrectAnswer("Cuca"),
      AnswerModel.incorrectAnswer("Curupira"),
      AnswerModel.incorrectAnswer("Boitatá"),
      AnswerModel.correctAnswer("Saci-pererê"),
    ],
    false
  ),
  new QuestionModel(
    16,
    'Quem é o "patrono" do Exército Brasileiro?',
    [
      AnswerModel.incorrectAnswer("Marechal Deodoro"),
      AnswerModel.incorrectAnswer("Barão de Mauá"),
      AnswerModel.incorrectAnswer("Marquês de Pombal"),
      AnswerModel.correctAnswer("Duque de Caxias"),
    ],
    false
  ),
];

export default questions;

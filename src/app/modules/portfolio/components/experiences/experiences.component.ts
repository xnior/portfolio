import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperience[]>([{
    summary:{
      strong: 'Systems Engineer',
      p: 'Rockwell Collins Aviation',
      date: '2020 - Present',
      description: 'Trabalhei como Engenheiro em uma subsidiária da Rockwell Collins Aviation, onde pude aprender e aprimorar minhas habilidades no desenvolvimento de aplicações web com Angular, React e Vue, bem como no desenvolvimento de sistemas com Java, C++, C#.',
      logo: 'assets/img/sofka.png'
    },text: 'Trabalhei como Engenheiro em uma subsidiária da Rockwell Collins Aviation, onde pude aprender e aprimorar minhas habilidades no desenvolvimento de aplicações web com Angular, React e Vue, bem como no desenvolvimento de sistemas com Java, C++, C#.',
    
    
  },{
    //create a new object relating for Aeronautical Engineer and an airplane pilot, Embry Riddle Aeronautical University, Daytona Beach, Florida, USA.
    summary:{
      strong: 'Aeronautical Engineer',
      p: 'Embry Riddle Aeronautical University',
      date: '2012 - 2017',
      description: 'Concluir a licenciatura em Engenharia Aeronáutica foi um percurso verdadeiramente fascinante e desafiante, que moldou não só a minha carreira, mas também a minha perspectiva sobre a inovação na indústria aeroespacial. Ao longo do caminho, estive imerso num ambiente educativo que combinava o rigor académico com experiências práticas, proporcionando uma compreensão abrangente da complexidade e da evolução emocionante do setor.',
      logo: 'assets/img/erau.png'
    },text: 'Concluir a licenciatura em Engenharia Aeronáutica foi um percurso verdadeiramente fascinante e desafiante, que moldou não só a minha carreira, mas também a minha perspectiva sobre a inovação na indústria aeroespacial. Ao longo do caminho, estive imerso num ambiente educativo que combinava o rigor académico com experiências práticas, proporcionando uma compreensão abrangente da complexidade e da evolução emocionante do setor.',
  },{
    //create a new object relating for aeronautical studies and development of hardware and software for airplanes like Boeing Honeywell Aerospace like a research.
    summary:{
      strong: 'Projeto de Pesquisa Engenharia Aeronáutica',
      p: 'Boeing, Honeywell Aerospace',
      date: '2014 - 2016',
      description: 'Participar do projeto de pesquisa estrutural aeronáutica da Boeing e da Honeywell Aerospace foi uma experiência excepcional que transcendeu os limites da sala de aula. Como estudante envolvido neste emocionante empreendimento, estive imerso em um ambiente colaborativo e inovador, trabalhando lado a lado com profissionais renomados e colegas igualmente apaixonados pela engenharia aeroespacial. Contribuir para a busca de soluções avançadas em estruturas aeronáuticas, utilizando métodos de análise de ponta e explorando materiais de última geração, me proporcionou uma visão única sobre o processo de desenvolvimento tecnológico da indústria. Ver as nossas ideias e esforços integrados no projeto global, liderado por duas potências como a Boeing e a Honeywell, não só elevou a minha compreensão prática, mas também alimentou a minha aspiração pela inovação. Esta oportunidade moldou não só o meu conhecimento técnico, mas também o meu entusiasmo em contribuir para o futuro da aviação.',
      logo: 'assets/img/honeywell.png'
    },text: 'Participar do projeto de pesquisa estrutural aeronáutica da Boeing e da Honeywell Aerospace foi uma experiência excepcional que transcendeu os limites da sala de aula. Como estudante envolvido neste emocionante empreendimento, estive imerso em um ambiente colaborativo e inovador, trabalhando lado a lado com profissionais renomados e colegas igualmente apaixonados pela engenharia aeroespacial. Contribuir para a busca de soluções avançadas em estruturas aeronáuticas, utilizando métodos de análise de ponta e explorando materiais de última geração, me proporcionou uma visão única sobre o processo de desenvolvimento tecnológico da indústria. Ver as nossas ideias e esforços integrados no projeto global, liderado por duas potências como a Boeing e a Honeywell, não só elevou a minha compreensão prática, mas também alimentou a minha aspiração pela inovação. Esta oportunidade moldou não só o meu conhecimento técnico, mas também o meu entusiasmo em contribuir para o futuro da aviação.',
  },{
    //create the description about my other course in the university in Brasil the name is UNIUBE and the course is agribusiness.
    summary:{
      strong: 'Agribusiness',
      p: 'UNIUBE',
      date: '2004 - 2007',
      description: 'Como aluno concluinte do curso de Gestão do Agronegócio, posso afirmar que a experiência foi enriquecedora e de grande relevância para minha trajetória profissional. Durante o programa, estive imerso em um ambiente educacional que equilibra teoria e prática, proporcionando uma compreensão abrangente dos desafios e oportunidades do setor agrícola brasileiro.',
      logo: 'assets/img/uniube.png'
    },text: 'Como aluno concluinte do curso de Gestão do Agronegócio, posso afirmar que a experiência foi enriquecedora e de grande relevância para minha trajetória profissional. Durante o programa, estive imerso em um ambiente educacional que equilibra teoria e prática, proporcionando uma compreensão abrangente dos desafios e oportunidades do setor agrícola brasileiro.',
  }
])

}
